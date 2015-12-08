/* mon travail
var element = document.getElementById('tout')

element.onclick = function(){
  console.log('vous avez cliqué sur tout');

}

var element = document.getElementById('gars')

element.onclick = function(){
  console.log('vous avez cliqué sur gars');
  document.querySelectorAll('#tableau .gars');
}

var element = document.getElementById('girl')

element.onclick = function(){
  console.log('vous avez cliqué sur girl');
}
*/

/* correction */

/* ETAPE 1
function afficher(genre){
  if (genre == 'gars') {
    console.log('vous avez cliqué sur gars');
    var tabGirl = document.querySelectorAll('.girl'); //selectionner les éléments ayant pour class filles
    console.log(tabGirl);
    for (var i = 0; i < tabGirl.length; i++) {
      tabGirl[i].style.display="none";
    } //masquer les filles

    var tabGars = document.querySelectorAll('.gars'); //selectionner les éléments ayant pour class gars
    for (var i = 0; i < tabGars.length; i++) {
      tabGars[i].style.display="list-item";
    } //afficher les gars
  }
  if (genre == 'girl') {
    console.log('vous avez cliqué sur girl');
    var tabGars = document.querySelectorAll('.gars'); //selectionner les éléments ayant pour class gars
    for (var i = 0; i < tabGars.length; i++) {
      tabGars[i].style.display="none";
    } //masquer les gars

    var tabGirl = document.querySelectorAll('.girl'); //selectionner les éléments ayant pour class filles
    for (var i = 0; i < tabGirl.length; i++) {
      tabGirl[i].style.display="list-item";
    } //afficher les filles
  }
  if (genre == 'tout') {
    console.log('vous avez cliqué sur tout'); //afficher tout
    var tabGirl = document.querySelectorAll('.girl'); //selectionner les éléments ayant pour class filles
    for (var i = 0; i < tabGirl.length; i++) {
      tabGirl[i].style.display="list-item";
    } //afficher les filles
        var tabGars = document.querySelectorAll('.gars'); //selectionner les éléments ayant pour class gars
        for (var i = 0; i < tabGars.length; i++) {
          tabGars[i].style.display="list-item";
        } //afficher les gars
  }
}
*/
/* ETAPE 2, EN 2 LIGNES :*/

function afficher(genre, disp)
{
  var tabGenre = document.querySelectorAll('.'+genre);
  for (var i = 0; i < tabGenre.length; i++) { tabGenre[i].style.display=disp; }
}
