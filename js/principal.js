var titulo = document.querySelector(".titulo");
titulo.textContent = "Programdor Front-end Ivan Lima"

var paciente = document.querySelector("#primeiroPaciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso iválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >=3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdAltura.textContent = "Altura inválida";
}

if( alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}



console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(peso); // obter 100
console.log(altura); // obter 100
console.log(imc);
