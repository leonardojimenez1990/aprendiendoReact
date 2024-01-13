// funciones en JS

const saludar = function (nombre) {    
    return `Hola, ${nombre===undefined ? 'Carlos' : nombre}`;
}

//  transformando la funcion anterior a una funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre===undefined ? 'Carlos' : nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre===undefined ? 'Carlos' : nombre}`; // Esta es otra forma de escribir la funcion de flecha
const saludar4 = () => `Hola Mundo`; // Esta es otra forma de escribir la funcion de flecha
//  saludar = 30; // Esto no se debe hacer, ya que se esta sobreescribiendo la funcion saludar

console.log(saludar("ichiro"));

// Esto imprime la definicion de la funcion saludar
console.log(saludar2('hina'));

// Esto imprime el resultado de la funcion saludar
console.log(saludar3('felipe'));
console.log(saludar4());


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser1 = () =>
    ({
        uid: 'ABC1234',
        username: 'La_Mami1501'
    });

const user1 = getUser();
const user2 = getUser1();
console.log(user1);
console.log(user2);

//  Tarea
//  1. Transformar a una funcion de flecha
//  2. Tiene que retornar un objeto implicito
//  3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Carlos');
console.log(usuarioActivo);

// respuesta
const getUsuarioActivo2 = (nombre) => 
    ({
        uid: 'ABC567',
        username: nombre
    });
const usuarioActivo2 = getUsuarioActivo2('bigfoot');
console.log(usuarioActivo2);
