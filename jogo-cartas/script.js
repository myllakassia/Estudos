var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ATAQUE: 7,
    DEFESA: 8,
    PODER: 6,
  },
};

var carta2 = {
  nome: "Dart Vader",
  atributos: {
    ATAQUE: 9,
    DEFESA: 8,
    PODER: 2,
  },
};

var carta3 = {
  nome: "Shiryu de dragão",
  atributos: {
    ATAQUE: 5,
    DEFESA: 9,
    PODER: 10,
  },
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    //sorteia um numero que não seja o que ja foi sorteado
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true; //habilitar e desabiliar um botão
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' checked value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "A carta da máquina foi maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }

  console.log(cartaMaquina);
}
//deixa ruma selecionado default
// mostrar msg de error quando não tem opçao selecionada
// add imagem de acordo com a img escolhida
