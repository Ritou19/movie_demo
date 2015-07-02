# Site web Movie Demo
>Créateurs: Steven Habegger & Julien Schneider

Ci-dessous, les étapes clés pour la création et l'upload du site Movie Demo.

##Réalisation
Le site movie demo, est basé sur un execice réalisé en cours. Nous avons décidés d'y rajouter les fonctionnalités/améliorations suivantes:
- Possibilité de voir les acteurs d'un film
- Possibilité de voir la note d'un film grâce au plugin angular-rating-yo qui permet d'afficher la note d'un film sous la forme d'étoiles
- Détails des acteurs (Bio, informations & Filmographie)
- Page de liste d'acteurs populaire
- Page d'accueil
- Liste des films les mieux notés
- Utilisation des Slick pour l'affichage des listes de films/acteurs
- Amélioration du design général du site 
    -  Fond avec opacité réduite sur la page de détails d'un film
    -  ...

##Déploiement
Génération de la version de production avec la commande ```grunt build```

Visualisation de la version de production en local avec la commande ```grunt serve:dist```

Upload du site de production vers github dans le repository "movie_demo" atteignable à l'adresse suivante : http://ritou19.github.io/movie_demo
