# Corrections à effectuer

## div.keywords
***catégorie***: SEO  
***détail***: Il existe des balises caché `<div class="keywords">`.  
Ces balises poluent le html et influent négativement sur le référencement.  
Il faut les supprimées.  

## html > head / main & header & footer
***catégorie***: SEO  
***détail***: les infos du head ne sont pas cohérentes sur les 2 pages.  
Au niveau des balises `<html>` et `<header>`, il faut saisir les informations suivantes :  
=> lang, keywords, description, title.  
Utiliser les balise main & header & footer.  

## img[alt]
***catégorie***: SEO & accessibilité  
***détail***: La valeur du alt est souvent erronée.  
En effet, on voit souvent agence paris alors que l'agence est à Lyon.
Il faut que le alt décrive l'image pour que les non voyant et les bots de référencement puissent savoir ce que c'est.
=> Mettre des alt cohérents

## remplacer les images par du texte
***catégorie***: SEO & performance & accessibilité  
***détail***: Certaines images ne contiennent que du texte, c'est plus long à charger,
c'est moins accessible et c'est moins efficace pour le référencement.  
Il faut remplacer les images par du texte.

## minification
***catégorie***: performance  
***détail***: Les fichiers js et css doivent être minifier pour être chargés plus rapidement.

## renommage de la page contact
***catégorie***: SEO  
***détail***: Pour le référencement, il faut mieux appeler la deuxième page Contact au lieu de Page 2

## optimisation des images
***catégorie***: performance  
***détail***: Le format bmp n'est pas adapter au web. Il faut les remplacer par du jpeg.  
Pour les format jpeg et png, on peut les compresser plus.  
On peut par exemple utiliser *Mass Image Compressor*

## correction des bugs
***catégorie***: performance  
***détail***: Il existe quelques bugs qu'il faut corriger.  
Bien charger les assets dans la page 2.  
Enlever une balise li dans le menu.  
Corriger le bouton pour le scrolltop 

## contrast && taille de police
***catégorie***: accessibilité  
***détail***: Parfois le texte est en orange sur fond orange. C'est très peu lisible, il faut le corriger.  
La taille de la police est parfois trop petite.

## footer
***catégorie***: SEO  
***détail***: Le footer ne doit pas contenir de liens qui ne servent à rien.  

## formulaire
***catégorie***: accessibilité  
***détail***: chaque label doit être associé à son input pour l'accessibilité.

## a href
***catégorie***: SEO  
***détail***: Mettre des liens pour toutes les balises `<a>` même au niveau du footer pour les liens des réseaux sociaux.  

# commandes utiles
```sh
npx css-minify --dir src/css --output src/css
npx uglifyjs src/js/bootstrap.js -o src/js/bootstrap.min.js
npx uglifyjs src/js/jquery-2.1.0.js -o src/js/jquery-2.1.0.min.js
npx uglifyjs src/js/gmaps.js -o src/js/gmaps.min.js
npx uglifyjs src/js/jqBootstrapValidation.js -o src/js/jqBootstrapValidation.min.js
npx uglifyjs src/js/jquery.touchSwipe.js -o src/js/jquery.touchSwipe.min.js
npx uglifyjs src/js/blocs.js -o src/js/blocs.min.js
npx uglifyjs src/js/formHandler.js -o src/js/formHandler.min.js
```



                        