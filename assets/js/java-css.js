/* cours : Manipuler le CSS avec Javascript */
/*var maDiv = document.getElementById('maDiv');

console.log('Selon le Javascript, la couleur de fond de ce <div> est : ' + maDiv.style.backgroundColor); //on affiche la couleur de fond ?

var text = document.getElementById('text'),
    color = getComputedStyle(text).color;

    console.log(color);
*/
/* cours : Les propriétés de type offset */
var parent = document.getElementById('parent');
var enfant = document.getElementById('enfant');

alert("Sans la fonction de calcul, la position de l'élément enfant est : \n\n" + 'offsetTop : ' + enfant.offsetTop + 'px\n' +
 'offsetLeft : ' + enfant.offsetLeft + 'px');

function getOffset(element) { // notre fonction qui calcule le positionnement complet
  var top = 0, left = 0;

  do {
    top += element.offsetTop;
    left += element.offsetLeft;
  } while (element = element.offsetParent); // Tant que « element » reçoit un « offsetParent » valide alors on additionne les valeurs des offsets

  return { // on retourne un objet, cela nous permet de retourner les deux valeurs calculées
    top: top,
    left: left
  };
}

console.log("Avec la fonction de calcul, la position de l'élément enfant est : \n\n" +
            'offsetTop : ' + getOffset(enfant).top + 'px\n' +
            'offsetLeft : ' + getOffset(enfant).left + 'px');

/* CORRECTION */
