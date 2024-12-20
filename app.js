
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87,
};

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

console.log(sum(7,3))
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(8))
console.log(fromYenToPound(60))

// Esta es mi funcion que suma dos numeros

const sum = (a,b) =>{
    return a + b;
}

// Solo un registro en consola para nosotros



// Exportar la funcion para usarla en otros archivos

// (similar a la palabra "export" cuando se usa webpack)

module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};