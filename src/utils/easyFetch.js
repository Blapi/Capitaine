class EasyFetch {
  constructor(url) {
    this.url = url
    this.headers = {}
    this.queryParams = {}
    this.options = {}
  }

  /**
  * Set headers on the request.
  * Should be called before _fetch.
  */
  setHeaders(headers) {
    this.headers = headers
    return this
  }

  /**
  * Set query parameters on the url.
  * Should be called before _fetch.
  */
  setQueryParams(queryParams) {
    this.queryParams = queryParams
    return this
  }

  /**
  * Set options for the request.
  * Should be called before _fetch.
  */
  setOptions(options) {
    this.options = options
    return this
  }

  _buildQueryParams() {
    let q = Object.keys(this.queryParams).map((k) => [k, encodeURIComponent(this.queryParams[k])].join('=')).join('&')
    if (this.url.indexOf("?") === -1 && q)
      q = `?${q}`
    return q
  }

  _checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 400) {
      return response
    } else {
      console.log(response)
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
  }

  _fetch(method, body) {
    return fetch(this.url + this._buildQueryParams(),
      {...this.options, method: method, headers: this.headers, body: body})
    .then(this._checkResponseStatus)
  }

  head() {
    return this._fetch('HEAD')
  }

  get() {
    return this._fetch('GET')
  }

  post(body) {
    return this._fetch('POST', body)
  }

  put(body) {
    return this._fetch('PUT', body)
  }   

  patch(body) {
    return this._fetch('PATCH', body)
  }

  delete() {
    return this._fetch('DELETE')
  }
}

export function easyFetch(url) {
    return new EasyFetch(url)
}


class JsonFetch extends EasyFetch {
  constructor(url) {
    super(url)
    this.headers = {'Accept': 'application/json',
                    'Content-Type': 'application/json'}
  }

  setHeaders(headers) {
    this.headers = {...this.headers, ...headers}
    return this
  }

  _fetch(method, body) {
    if (body !== undefined)
      body = JSON.stringify(body)
    return super._fetch(method, body).then((resp) => resp.json())
  }
}

export function jsonFetch(url) {
  return new JsonFetch(url)
}