const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};


// const persona2 = persona; // No se debe hacer esto, ya que se esta apuntando a la misma referencia de memoria
const persona2 = { ...persona }; // Esto es una forma de hacer una copia del objeto persona
persona2.nombre = 'Peter';

// console.table(persona);
console.log(persona);
console.log(persona2);
