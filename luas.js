var heightInput = document.querySelector(".panjang");
var weightInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".luas");
var BMI, height, weight;

function myFunction() {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = weight / height ** 2;
  alert("BMI ideal kamu adalah :" + BMI);
}