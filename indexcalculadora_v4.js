/*
Aquí seleccionamos todos los nodos de nuestro html para añadir a la interactividad a la calculadora.
*/
const pantallaValorAnterior = document.getElementById('valor-anterior');
const pantallaValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});