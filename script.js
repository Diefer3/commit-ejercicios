/pedir al usuario que ingrese la base y la altura del triangulo//
let base = prompt("ingrese la base del triangulo");
let altura = prompt("ingrese altura");

//convertir los valores en numero
base = parseFloat(base);
altura = parseFloat(altura);

//calcular base de triangulo (formula: base * altura / 2)
let area = (base * altura)/ 2;

//mostrar el resultado
document.write ("el area del triangulo es " + area.toFixed(2));