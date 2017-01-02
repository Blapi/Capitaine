const config = {}

config.api = {
  clientId: '7ZZqrGLAUPSJsfELszLWqnqvyvtQCD4R3ekq2ibu',
  clientSecret: 'EdRPOUJ6HTkjhlZIKT9qrGmW0JoAfYcNS5FmI691iIfDjdRwEi8T84A4khDaaciy6YWFiwnU73b0N0HxHhkq9nPeN8P10hgyjVdxT8A1oLctGRl8bpUk72gohIE7G0zx',
  url: 'http://149.202.169.91'
}

// curl -X POST -d 'client_id=7ZZqrGLAUPSJsfELszLWqnqvyvtQCD4R3ekq2ibu&client_secret=EdRPOUJ6HTkjhlZIKT9qrGmW0JoAfYcNS5FmI691iIfDjdRwEi8T84A4khDaaciy6YWFiwnU73b0N0HxHhkq9nPeN8P10hgyjVdxT8A1oLctGRl8bpUk72gohIE7G0zx&grant_type=refresh_token&refresh_token=bmsri5WIVpQkXHuufC90tJb4vn55X6'

export default config

/*http://149.202.169.91/api/flight/
http://149.202.169.91/api/airfields/
http://149.202.169.91/api/plane/bah tu vas regarder
tu peux la tester en live
si tu scroll tout en bas
tu vois les parametres que tu peux post

Par contre comment on se log dessus ? 😛
test
test

pour se logger ça marche sur base de tokens
https://github.com/PhilipGarnero/django-rest-framework-social-oauth2
tu dois balancer ton token sur chaque appel que tu fais

curl -X POST -d "client_id=<client_id>&client_secret=<client_secret>&grant_type=password&username=<user_name>&password=<password>" http://149.202.169.91/auth/token
la route pour récup un token c'est ça
client id : 7ZZqrGLAUPSJsfELszLWqnqvyvtQCD4R3ekq2ibu
client secret : EdRPOUJ6HTkjhlZIKT9qrGmW0JoAfYcNS5FmI691iIfDjdRwEi8T84A4khDaaciy6YWFiwnU73b0N0HxHhkq9nPeN8P10hgyjVdxT8A1oLctGRl8bpUk72gohIE7G0zx
mets pas les chevrons hein
tu peux le mettre en json ça marche aussi pd
maintenant ce token la
Damien
J'le balance à l'API à chaque requete
Philip
tu le mets dans le header Authorization à chaque fois
Authorization: Bearer <token>*/