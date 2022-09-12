function adicionarJogador() {
  var nome = document.getElementById("novoJogador");
  jogadores.push({
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  });

  nome.value = "";
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td> " + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpateParaTodos(" +
      i +
      ")'>Empate</button></td>";

    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarPontos (" + i + ")'>Zerar</button></td>";

    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;

  var novoJogador = document.getElementById("jogador");
  novoJogador.innerText = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++; //adiciona um vitoria
  jogador.pontos = calculaPontos(jogador); // recalcula os pontos baseado na vitoria adicionado
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpateParaTodos() {
  for (e = 0; e < jogadores.length; e++) {
    jogadores[e].empates++;
    jogadores[e].pontos = calculaPontos(jogadores[e]);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;

  exibeJogadoresNaTela(jogadores);
}
//desafios

// fazer logica do empate aumenta com outros jogadores automatico
// add uma imagem
// criar um botão para zerar o placar
// add um novo jogador por meio de um input(fazendo push )
