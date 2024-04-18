// calcula o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos.
function calculateBMI() {
  // Obtém os valores de altura e peso dos campos de entrada e converte-os em números de ponto flutuante.
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  // Verifica se os valores de altura e peso são válidos (maiores que zero e não NaN).
  // Se não forem válidos, exibe uma mensagem de erro e interrompe a execução da função.
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerText = "Please enter valid values.";
    return;
  }

  // Calcula o IMC usando a fórmula: peso / (altura em metros)^2
  var bmi = weight / Math.pow(height / 100, 2);

  // Exibe o resultado do cálculo do IMC com duas casas decimais.
  document.getElementById("result").innerText =
    "Your BMI is: " + bmi.toFixed(2);
}

// limpa os campos de entrada e o resultado do cálculo do IMC.
function Clear() {
  document.getElementById("height").value = "";   
  document.getElementById("weight").value = "";  
  document.getElementById("result").innerText = "";
}
