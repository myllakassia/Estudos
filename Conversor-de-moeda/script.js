function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valorEuro");
  var valor2 = valorElementoEuro.value;
  var valorEmEuroNumerico = parseFloat(valor2);

  var valorEuroEmReal = valorEmEuroNumerico * 5;
  console.log(valorEuroEmReal);

  var elementoValorEuro = document.getElementById("valorConvertidoEuro");
  var valorEuroConvertido = "O resultado em real é R$ " + valorEuroEmReal;
  elementoValorEuro.innerHTML = valorEuroConvertido;
}

function ConverterLibra() {
  var valorElementoLibra = document.getElementById("valorLibra");
  var valor3 = valorElementoLibra.value;
  var valorEmLibraNumerico = parseFloat(valor3);

  var valorLibraEmReal = valorEmLibraNumerico * 6;

  var elementoValorLibra = document.getElementById("valorConvertidoLibra");
  var valorLibraConvertida = "O resultado em real é R$ " + valorLibraEmReal;

  elementoValorLibra.innerHTML = valorLibraConvertida;
}
