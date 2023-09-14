var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".luas");
var BMI, height, weight;

function myFunction(){
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    alert("BMI ideal kamu adalah :" + BMI);
}