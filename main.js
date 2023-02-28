function somar() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  result  = parseFloat(num1) + parseFloat(num2);

  var resultado = document.getElementById("resultado");
resultado.value = result;

}

