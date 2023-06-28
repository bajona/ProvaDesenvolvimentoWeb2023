function enviardados() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("emaill").value;
  var range = document.getElementById("range").value;
  var radios = document.getElementsByName("novidades");
  var radioValue;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
      break;
    }
  }
  var tempo = document.getElementById("tempo").value;
  var resultado = document.getElementById("resultado");

  var mensagem =
    "Seu nome é " +
    nome +";" +
    "<br>" +
    "<br>" +
    "Seu telefone é " +
    telefone +";" +
    "<br>" +
    "<br>" +
    "Seu email é " +
    email + ";" +
    "<br>" +
    "<br>" +
    "O tanto que vc ama a giorjety é " +
    range +";" +
    "<br>" +
    "<br>" +
    "Você gostaria de receber novidades? " +
    radioValue +";" +
    "<br>" +
    "<br>" +
    "O horario que vc mandou essa mensagem foi " +
    tempo + ";";
  document.getElementById("resultado").innerHTML =
    mensagem + "<br>" + "<br>" + nome + ", sua mensagem foi enviada!";
}
