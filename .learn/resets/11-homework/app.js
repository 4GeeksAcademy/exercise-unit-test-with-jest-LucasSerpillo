
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}




// Esta es mi funcion que suma dos numeros

const sum = (a,b) =>{
    return a + b;
}

// Solo un registro en consola para nosotros

console.log(sum(7,3))

// Exportar la funcion para usarla en otros archivos

// (similar a la palabra "export" cuando se usa webpack)

module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};