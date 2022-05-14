


var pacientes = document.querySelectorAll(".paciente");

function calcularIMC(peso,altura){

    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

for(var i = 0;i<pacientes.length;i++){

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);


    pesoEsValido = true;
    alturaEsValida = true;

    if((peso < 0)||(peso > 1000)){
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if((altura < 0)||(altura > 3.0)){
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }

}

