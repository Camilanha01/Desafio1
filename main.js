//Primer Desafio

console.log("BIENVENIDO A MI TIENDA 👽")

let usuario = prompt("Ingrese su nombre");

console.log("Bienvenido/a " + usuario + "a nuestra tienda 🤠");

console.log(`Lista de productos disponibles:\n 
⚫Remera = $9000\n 
⚫Jeans  = $8500\n 
⚫Buzo   = $7300\n 
`);

let precioProducto1 = parseInt(prompt("Ingrese el precio del primer producto: "));
let precioProducto2 = parseInt(prompt("Ingrese el precio del segundo producto: "));

function ingresoProductos(producto1, producto2){
    let result = (producto1 + producto2)
    return result
}

let total = ingresoProductos(precioProducto1, precioProducto2);

//cuotas

function calcularCuotas(producto1, producto2){

    let totalCom = ingresoProductos(precioProducto1, precioProducto2);
    console.log('El total es de: ' + totalCom);

    let respuestaCuotas = prompt('Quieres pagar en Cuotas?', 'Ingresar "si" o "no"').toLowerCase();

    while ( typeof respuestaCuotas !=='string' && (respuestaCuotas != 'si' || respuestaCuotas != 'no')){
        respuestaCuotas = prompt('Invalido. Ingresa nuevamente tu respuesta: ').toLowerCase();
    }

    if (respuestaCuotas === 'si'){
        let cantCuotas = prompt('Ingrese cantidad de cuotas: 3 cuotas || 6 cuotas || 12 cuotas');

        let precioTotal = ingresoProductos(precioProducto1, precioProducto2) / cantCuotas;
        console.log('Usted eligio pagar en ' + cantCuotas + ' cuotas.' + ' Su precio por cuotas sera de: $' + Math.trunc(precioTotal + cantCuotas) + ' Gracias. Vuelva pronto 👽');
    } else {
        console.log('Usted eligio pagar en efectivo el total de: $' + total + ' Gracias. Vuelva pronto! 👽');
    }

} 

calcularCuotas();