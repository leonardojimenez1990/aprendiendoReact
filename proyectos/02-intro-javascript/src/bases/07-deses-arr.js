//Desestructuracion de arreglos en JS

const personajes = ['Rick','Morty','Summer'];
const[,,p3] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC',123];
}

const arr = retornaArreglo();
console.log(arr);

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

//Tarea
// 1. el primer valor del arr1 se llamara nombre
// 2. se llamara setNombre
const useState = (valor) => {
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Jerry');
// console.log(arr1);

console.log(nombre);
setNombre();