var cartaPaulo = {
  nome: "Shiryu de dragão",
  imagem:
    "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
  atributos: {
    ATAQUE: 5,
    DEFESA: 9,
    PODER: 10,
  },
};

var cartaRafa = {
  nome: "Bulbassauro",
  imagem:
    "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
  atributos: {
    ATAQUE: 7,
    DEFESA: 8,
    PODER: 6,
  },
};

var cartaGui = {
  nome: "Dart Vader",
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png",
  atributos: {
    ATAQUE: 9,
    DEFESA: 8,
    PODER: 2,
  },
};

var cartas = [cartaPaulo, cartaRafa, cartaGui];
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

  exibirCartaJogador();
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
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você ganhou!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true; //desabilita o botão após ser selecinado
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgraundImage = `url(${cartaJogador.imagem})`; //colocar img dentro do html atraves do js
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit;  height: inherit; position: absolute;">'; // estrutura montada p ser exibida no html
  var tagHTML = "<div id='opcoes' class='carta-status'>"; //exibir opçoes como propreiedades da carta

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' checked value='" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaJogador.atributos[atributo] +
      "<br>"; // exibe os atributos de cada carta
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`; //imprime o nome de cada jogador na tela

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgraundImage = `url(${cartaMaquina.imagem})`; //colocar img dentro do html atraves do js
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit;  height: inherit; position: absolute;">'; // estrutura montada p ser exibida no html
  var tagHTML = "<div id='opcoes' class='carta-status'>"; //exibir opçoes como propreiedades da carta

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaMaquina.atributos[atributo] +
      "</p>"; // exibe os atributos de cada carta
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`; //imprime o nome de cada jogador na tela

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
