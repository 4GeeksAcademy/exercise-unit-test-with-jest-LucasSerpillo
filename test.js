// Importar la funcion del archivo app.js
const{sum} = require('./app.js');

//Comienza tu primera prueba

test('adds 14 + 9 to equal 23', () =>{
    //Dentro de la prueba llamamos a nuestra funcion sum con 2 numeros
    let total = sum(14,9);

    //Esperamos que la suma de esos 2 numeros sea 23
    expect(total).toBe(23);
})


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(8)).toBe(1170.0934579439252);
})

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(60)).toBe(0.33354632587859423);
})