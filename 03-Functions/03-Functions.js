function timeConversion(time){
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    let AMPM = time.slice(8);
    let hora = time.slice(0, 2);
    let min = time.slice(3, 5);
    let seg = time.slice(6, 8);

    //if(AMPM === "PM" && hora === "12" || hora < 12)
}

module.exports = {
    timeConversion
}