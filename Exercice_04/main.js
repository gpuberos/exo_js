// Sélectionne la div
let myDiv = document.querySelector('div');

// Crée un nouvel élément span
let newSpan = document.createElement('span');

// Donne le contenu texte à l'élément span
newSpan.innerText = 'Nouveau contenu';

// Ajoute newSpan à myDiv (la méthode appenChild ajout un noeud à la fin de la liste des enfants d'un noeud parent)
myDiv.appendChild(newSpan);
