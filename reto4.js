// Supongamos que trabajas para Google. Te piden hacer un programa para
// que Google Home aprenda a prender y a apagar la luz. Para eso, crea una
//  variable llamada lamparaPrendida. Comienza pensando que la lámpara ya
// está prendida, así que asígnale el valor 1. Luego crea un condicional que le
// permita a Google Home saber qué hacer para prender y apagar la
// lámpara. Usa console.log() para imprimir por pantalla lo que debería decir
// Google Home. (prendido 1, apagado 0)

let lamparaPrendida = 3;
if(lamparaPrendida===1){
    console.log('La lampara esta prendida');
} else if(lamparaPrendida===0){
    console.log('La lampara esta apagada');
} else{
    console.log('Escribe un numero entre 1 o 0');
}

// Trabajas ahora para una fábrica de ascensores. Definí el procedimiento
// para que podamos abrir y cerrar las puertas de un ascensor. Usa
// console.log() para avisarle a los usuarios que harán las puertas, es decir
// Puertas abriendo, puertas cerrando.

let puertas= 1;
if(puertas===1){
    console.log('Puertas abriendo');
} else if(puertas===0){
    console.log('Puertas cerrado');
} else{
    console.log('Ascensor averiado');
}

// Finalmente, tu decides trabajar programando una máquina para dar acceso al 
// cine. Debes hacer un procedimiento que use console.log() para informar a los 
// usuarios si pueden ver una película PG18. Las condiciones son:
// ○ Si tienes menos de 12 años: “No puedes ingresar”
// ○ SI tienes entre 13 y 17 años: “Puedes ingresar con un adulto responsable
// ○ Si tienes más de 18 años: “Puedes ingresar"

let edad = 8;
if(edad <= 12){
    console.log('No puedes ingresar');
} else if (edad >= 13 && edad<= 17){
    console.log('Puedes ingresar con un adulto responsable');
} else if (edad >= 18){ 
    console.log('Puedes ingresar');
}

// Una juguetería te contrata para que programes un Loro que juega a Tingo 
// Tango. Desearía que la pruebes imprimiendo 32 veces en pantalla: Tingo

let juego = "Tingo!"; 
let tingoRepetido = juego.repeat(32); 
let Tango = tingoRepetido;
console.log(tingoRepetido);

