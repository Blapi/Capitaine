Installation React-Native pour android
======================================

Avant toute chose, se procurer un device android supérieur ou égal à 5.0 lollipop
si on ne souhaite pas dev sous émulateur. (la version est importante uniquement pour le dev)  
Si on dev sous émulateur, utiliser android studio pour créer un nouveau device
(celui ci apparaitra plus tard au niveau de l'ide).  

Installer l'ide [Deco](https://www.decosoftware.com/) sur macos.  
Installer [react native](https://facebook.github.io/react-native/docs/getting-started.html).  
Lancer deco et créer (puis sauvegarder) ou ouvrir un projet.

Dans l'ide, si on utilise l'émulateur, cliquer sur `simulator` et sélectionner son device.  

Si on utilise un device physique, vérifier que `packager running` est activé (en bas à droite),
ouvrir un terminal et accéder à la racine du projet.  
Vérifier que le device est bien connecté avec `adb devices`.  
Ensuite, utiliser la commande `react-native run-android` pour installer l'apk.  
A partir de là des erreurs vont sans doute apparaitre dans l'app.
Si c'est le cas, s'assurer d'être sur le même réseau wifi sur le device et le mac (Wifi Gratuit Decathlon fonctionne bien)
et utiliser la commande `adb reverse tcp:8081 tcp:8081` pour indiquer au device
ou se trouve le serveur react-native, [voir les instructions en détail ici](https://www.decosoftware.com/docs/react-native/running-on-device-android.html).
Appuyer sur reload JS pour faire disparaitre les erreurs.  
L'app devrait maintenant fonctionner.

En secouant le device de GAUCHE à DROITE, un menu de dev apparait.
Dedans, activer le hot reloading et le live reload.
A l'avenir en cas d'erreur, utiliser ce menu pour accéder à reload JS.

Voila pour l'installation.


Tutoriel React + Redux
======================

Pour se familiariser a React et Redux, il faut lire quelques pages de docs et exemples,
mais les concepts étant simples, une journée de formation devrait suffire pour être opérationnel.  

Tout d'abord les pages à lire sur React:

* [Comment penser en react ?](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Les components et les props](https://facebook.github.io/react/docs/components-and-props.html)
* [Les conditions](https://facebook.github.io/react/docs/conditional-rendering.html)
* [Les states et le lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)

Lire toute la partie [redux basics](http://redux.js.org/docs/basics/) devrait être suffisant
pour se faire une idée de comment fonctionne l'application.  

Enfin, lire la [doc de react-native-router-flux](https://github.com/aksonov/react-native-router-flux/tree/master/docs)
pour comprendre comment ajouter de nouvelles activités ou créer des activités fragmentées.

Petite explication de la structure du repo:

* Tout se passe dans le dossier src.
* Les components qui n'ont pas de logique spécifique à part afficher des infos, ou intéragir avec l'user sont situés dans le dossier presentationals.
* Les components qui possèdent une logique complexe et intéragissent avec le store, sont situés dans le dossier containers.
  Attention, l'interface de ces components est toujours située dans presentationals, seule la logique est placée dans containers.
* Les différentes actions possibles pour un component sont situées dans le dossier actions.
  Les actions sont la seule façon de trigger des modifications du store.
  Celles ci peuvent aussi être asynchrones pour par exemple effectuer un appel HTTP.
* Les reducers sont situés dans le dossier reducers.
  Attention, aucune logique ne doit apparaitre dans les reducers.
  Uniquement, l'application de l'action sur le store doit apparaitre.