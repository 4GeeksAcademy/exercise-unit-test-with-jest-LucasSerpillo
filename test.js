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
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 japan Yen", function() {
    
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(8);
    const expected = 8 * 156.5;
    expect(fromDollarToYen(8)).toBe(1252); 
})

test("One Yen should be 0.87 british pound", function() {
    
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(10);
    const expected = 10 * 0.87;
    expect(fromYenToPound(10)).toBe(8.7);
})