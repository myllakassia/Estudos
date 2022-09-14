var carta1 = {
  nome: "Pikachu",
  imagem:
    "https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg",
  atributos: {
    ATAQUE: 9,
    DEFESA: 7,
    PODER: 10,
  },
};

var carta2 = {
  nome: "Bulbassauro",
  imagem:
    "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
  atributos: {
    ATAQUE: 7,
    DEFESA: 8,
    PODER: 9,
  },
};

var carta3 = {
  nome: "Vulpix",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
  atributos: {
    ATAQUE: 9,
    DEFESA: 8,
    PODER: 9,
  },
};

var carta4 = {
  nome: "Clefairy",
  imagem: "https://img.pokemondb.net/artwork/large/clefairy.jpg",
  atributos: {
    ATAQUE: 9,
    DEFESA: 5,
    PODER: 10,
  },
};

var carta5 = {
  nome: "Squirtle",
  imagem:
    "https://static.wikia.nocookie.net/pokepedia/images/e/e3/Squirtle.png/revision/latest?cb=20161021203229&path-prefix=pt",
  atributos: {
    ATAQUE: 8,
    DEFESA: 7,
    PODER: 6,
  },
};

var carta6 = {
  nome: "Ivysaur",
  imagem: "https://img.pokemondb.net/sprites/home/normal/2x/ivysaur.jpg",
  atributos: {
    ATAQUE: 5,
    DEFESA: 6,
    PODER: 9,
  },
};

var carta7 = {
  nome: "Chamander",
  imagem: "https://listeenhas.files.wordpress.com/2013/01/char.jpg",
  atributos: {
    ATAQUE: 7,
    DEFESA: 10,
    PODER: 10,
  },
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    //sorteia um numero que não seja o que ja foi sorteado
    numeroCartaJogador = parseInt(Math.random() * 6);
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
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //colocar img dentro do html atraves do js
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
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //colocar img dentro do html atraves do js
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
