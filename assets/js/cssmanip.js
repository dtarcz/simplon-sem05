var objets = document.querySelectorAll('.draggableBox');
var stockage = {};

function clicBas(e){
  stockage.target = e.target;
  stockage.x = e.clientX;
  stockage.y = e.clientY;
}

function clicBouge(e){
  if (stockage.target) {
    stockage.target.style.top = e.clientY + 'px';
    stockage.target.style.left = e.clientX + 'px';
  }
}

function clicHaut(){
  stockage = {};
}

for (var i = 0; i < objets.length; i++) {
  objets[i].addEventListener('mousedown', clicBas, false);
  document.addEventListener('mousemove', clicBouge, false);
  objets[i].addEventListener('mouseup', clicHaut, false);
}
