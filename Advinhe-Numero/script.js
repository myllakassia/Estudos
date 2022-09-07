var numeroSecreto = parseInt(Math.random() * 11);
var getResultado = document.getElementById("resultado");
var getTentativas = document.getElementById("tentativas");
var tentativas = 3;
var getDicas = document.getElementById("dicas");
var dicas = "RECOMEÇE O JOGO";

getTentativas.innerHTML = tentativas;
getDicas.innerHTML = dicas;

function Chutar() {
  var resultado = "";
  var chute = parseInt(document.getElementById("valor").value);

  console.log("O número secreto é " + numeroSecreto);

  //DICA
  if (numeroSecreto < chute) {
    dicas = "Tente um número menor! ";
    getDicas.innerHTML = dicas;
  } else if (numeroSecreto > chute) {
    dicas = "Tente um número maior! ";
    getDicas.innerHTML = dicas;
  }

  //CORE
  if (numeroSecreto == chute) {
    //RESETAR DICAS
    dicas = "RECOMEÇE O JOGO";
    getDicas.innerHTML = dicas;
    //ATRIBUIR NOVO NÚMERO
    numeroSecreto = parseInt(Math.random() * 11);
    resultado =
      "<span class='acerto'>ACERTOU!</span> <br> Um novo número já foi atribuído.";
    getResultado.innerHTML = resultado;
    console.log(numeroSecreto);
    //RESETAR TENTATIVAS
    tentativas = 3;
    getTentativas.innerHTML = tentativas;
  } else if (chute > 10 || chute < 0) {
    resultado = "Você deve digitar um número entre 0 e 10.";
    getResultado.innerHTML = resultado;
  } else if (tentativas == 2) {
    resultado =
      "<span class='erro'>ERROU!</span> <br> Última chance do antes do número secreto mudar.";
    getResultado.innerHTML = resultado;
    //REDUÇÃO TENTATIVAS
    tentativas--;
    getTentativas.innerHTML = tentativas;
  } else if (tentativas == 1) {
    resultado = "<span class='erro'>ERROU!</span> <br> O número secreto mudou.";
    getResultado.innerHTML = resultado;
    //REDUÇÃO TENTATIVAS
    tentativas--;
    getTentativas.innerHTML = tentativas;
  } else {
    resultado = "<span class='erro'>ERROU!</span>";
    getResultado.innerHTML = resultado;
    //REDUÇÃO TENTATIVAS
    tentativas--;
    getTentativas.innerHTML = tentativas;
  }

  //RESETAR JOGO
  if (tentativas == 0) {
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
    getTentativas.innerHTML = tentativas;
  }
}
