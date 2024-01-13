// Desestructuración en JS
//  Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona; // Esta es una forma de hacer la desestructuracion

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

console.log(nombre, edad, clave);

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    // const { nombre, edad, clave } = usuario;
    console.log(usuario);
}

const retornaPersona2 = (usuario) => {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
}

const useContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {
    // console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3232,
            lng: -12.3232
        }
    }
}


retornaPersona(persona);
retornaPersona2(persona);

// const {nombreClave, anios,latlng} = useContext (persona);
// const {lat, lng} = latlng;
// console.log(lat, lng);

const {nombreClave, anios, latlng:{lat, lng}} = useContext (persona);

console.log(nombreClave, anios, lat, lng);

// console.log(latlng);
// console.log(avenger);