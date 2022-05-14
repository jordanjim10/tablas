var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){

    event.preventDefault();

    console.log("Ud hizo click en el boton adicioanr");

    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var tabla = document.querySelector("#tabla-pacientes");

    console.log(nombre);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");


    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    tabla.appendChild(pacienteTr);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);



});