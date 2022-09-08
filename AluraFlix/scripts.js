var listaFilmes = [
  "http://vortexcultural.com.br/images/2021/05/milagre-na-cela-7.jpg",
  "https://noticiasdatv.uol.com.br/media/_versions/recomenda/this-is-us-poster-season-4_fixed_recomenda_big.jpg",
  "https://br.web.img2.acsta.net/pictures/16/01/21/17/36/185079.jpg",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

function add() {
  var addMoovie = document.getElementById("link").value;
  var elementWarning = document.getElementById("warning");
  var isAdd = false;
  for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i] == addMoovie) {
      elementWarning.innerHTML = "Você já posui esse filme na lista";
      isAdd = true;
    }
  }

  if (isAdd == false) {
    elementWarning.innerHTML = "";
    listaFilmes.push(addMoovie);

    var moovieImg = document.createElement("img");
    moovieImg.src = addMoovie;
    document.body.appendChild(moovieImg);
  }
}
