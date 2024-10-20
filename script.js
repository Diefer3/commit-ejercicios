// solicitar la base y el exponer al usuario
let base = prompt("ingresa la base");
let exponente = prompt("ingresa el exponente");

// convertir los valores ingresado a numeros
base = parseFloat(base);
exponente = parseFloat(exponente);

//calcular la pontencia utilizando math.pow()
let resultado = math.pow (base, exponente);

//mostrar el resultado concatenedo en el mensaje
document.write ("el resultado obtenido es"+ resultado);




