// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

//fifo, sacar cada persona de la cola y verificar:
//que sea mayor de 18
//ticket corresponda al event
//que el number de ticket no haya ingresado ya

var controlAcces = function(queue, event){
    // Tu código aca:
    let nombres = [];
    let tickets = [];
    let persona = queue.dequeue();
    while(queue.size()){
      if(persona.age > 18 && persona.ticket.event === event && !tickets.includes(persona.ticket.number)){
        nombres.push(persona.fullname);
        tickets.push(persona.ticket.number);
      }
    }
    return nombres;
  };
      
  

  module.exports = {
    controlAcces,
   
}