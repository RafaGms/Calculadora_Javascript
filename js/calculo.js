const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnDividir = document.getElementById("btnDividir");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnLimpar = document.getElementById("btnLimpar");

var resultado = document.getElementById("resultado");

btnSomar.addEventListener("click", () => {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var soma = parseInt(num1) + parseInt(num2);

  resultado.innerHTML = soma;
});
btnDividir.addEventListener("click", () => {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var divisao = parseInt(num1) / parseInt(num2);

  resultado.innerHTML = divisao;
});
btnSubtrair.addEventListener("click", () => {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var subtrair = parseInt(num1) - parseInt(num2);

  resultado.innerHTML = subtrair;
});
btnMultiplicar.addEventListener("click", () => {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var multiplicar = parseInt(num1) * parseInt(num2);

  resultado.innerHTML = multiplicar;
});
btnLimpar.addEventListener("click", () => {
 document.getElementById("num1").value = "";
 document.getElementById("num2").value = "";


  resultado.innerHTML = "";
});
