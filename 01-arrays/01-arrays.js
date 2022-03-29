
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let nvoArray = [];
    for(i = array.length - 1; i >= 0; i--){
        if(array[i] < 10 && array[i] >= 0) nvoArray.push(array[i]);
    }
    return nvoArray;
};
console.log (invertirOrden([1,2,3,4]))

function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    //devolver el valor en comun
    //si no tiene, devolver el valor mas chico
    //let valor;
    for(i = 0; i < array1.length; i++){
        for(j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]) return array1[i];
            // if(array1[i] < array2[j]) valor = array1[i];
            // if(!valor) valor = array2[j];
            // if(valor && array2[j] < valor) valor = array2[j];
        }
    }
    //return valor;
    return Math.min(...array1, ...array2);
};
console.log(numeroEnComun([10,5,4,15], [60,2,0,90,]))


function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    //crear un nvoarray
    //recorrer el array 
    //sumar los elementos de los array que SOLO contengan 2elem
    //pushear al nvoarray los resultados 
    //si se encuentra solo un number y no un array, pushear el number
    let nvoArray = [];
    array.forEach(element => {
        if(Array.isArray(element) && element.length === 2) nvoArray.push(element[0] + element[1]);
        if(typeof element === 'number') nvoArray.push(element);
    });
    return nvoArray;
};
console.log(sumaDeArrays([[5, 5], 4, [10, 15], [10, 7]]))


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    //crear un array nvo
    //determinar si el divsor es divisible por el numero(resto 0)
    //si no lo es devolver false
    //si es true, agregar al array el resultado la cant de veces del divisor
    let array = [];
    if(numero % divisor !== 0) return false;
    let resultado = numero / divisor;//5
    let cant = 0;
    while(divisor > cant){
        array.push(resultado);
        cant++;
    }return array;

};
console.log(mismoValorMismosElementos(30, 3))


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    //let nvoArray = [];
    //nvoArray.push(Math.min(...array))
    //nvoArray.push(Math.max(...array))
    return [Math.min(...array), Math.max(...array)];
};
console.log(elementoMenorYMayor([5,10,6,30,2]));


module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};