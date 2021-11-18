let lado1, lado2, lado3 = 0;
let contadorDeEquilateros = 0;
let contadorDeIsoceles = 0;
let contadorDeEscalenos = 0;

for(let i=0; i<4; i++) {
let lado1 = parseInt(prompt('ingrese el primer lado del triángulo'));
let lado2 = parseInt(prompt('ingrese el segundo lado del triángulo'));
let lado3 = parseInt(prompt('ingrese el tercer lado del triángulo'));
if (lado1 == lado2 == lado3) {
   document.write('Triángulo Equilátero. <br>');
    contadorDeEquilateros ++;
} else if ((lado1 == lado2 && lado2 != lado3) || (lado2 == lado3 && lado2 != lado1)|| (lado3 == lado1 && lado1 !=lado2)) {
    document.write('Triángulo Isóceles. <br>');
    contadorDeIsoceles ++;
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
   document.write('Triángulo Escaleno. <br>');
    contadorDeEscalenos ++;
}
}

document.write(`<br> Cantidad de triángulos Equiláteros = ${contadorDeEquilateros} <br>`);
document.write(`Cantidad de triángulos Isóceles= ${contadorDeIsoceles} <br>`);
document.write(`Cantidad de triángulos Escalenos = ${contadorDeEscalenos} <br>`);


if (contadorDeEquilateros > contadorDeEscalenos && contadorDeEquilateros > contadorDeIsoceles) {
    document.write('<br> El tipo de triángulo de menor cantidad son el Isóceles y el Escaleno.');
} else if (contadorDeIsoceles > contadorDeEquilateros && contadorDeIsoceles > contadorDeEscalenos) {
    document.write('<br> El tipo de triángulo de menor cantidad son el Equilátero y el Escaleno.');
} else {
    document.write('<br> El tipo de triángulo de menor cantidad son el Equilátero y el Isóceles.');
}