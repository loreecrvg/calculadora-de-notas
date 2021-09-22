function calcularMedia() {
  var notaFinal = "Sua nota final é:";
  var notaDoPrimeiroBimestre = parseInt(
    prompt("Por favor, insira a nota do primeiro bimestre")
  );
  var notaDoSegundoBimestre = parseInt(
    prompt("Por favor, insira a nota do segundo bimestre")
  );
  var notaDoTerceiroBimestre = parseInt(
    prompt("Por favor, insira a nota do terceiro bimestre")
  );
  var notaDoQuartoBimestre = parseInt(
    prompt("Por favor, insira a nota do quarto bimestre")
  );
  var notaFinal =
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4;
  var notaFixada = notaFinal.toFixed(2);
  var textoNota = document.getElementById("textoNota");

  textoNota.innerHTML = notaFixada;

  var textoAprovacao = document.getElementById("textoAprovacao");
  var aprovado = "Aprovado";

  if (notaFinal < 5) {
    aprovado = "Reprovado";
  }

  textoAprovacao.innerHTML = aprovado;
}
