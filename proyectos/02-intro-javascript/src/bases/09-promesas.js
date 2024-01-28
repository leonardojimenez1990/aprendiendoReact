import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         // importar el resolve

//         const heroeSelect = getHeroeById(5);
//         // console.log(heroeSelect);

//         resolve(heroeSelect); //console.log('2 segundos después');
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);

// });

// promesa.then((heroe) => {
//     // console.log('then de la promesa');
//     console.log('heroe ', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            // importar el resolve
    
            const heroeSelect = getHeroeById(id);
                if (heroeSelect) {
                    resolve(heroeSelect);
                }else{
                    reject('No se pudo encontrar el héroe');
                }
            // console.log(heroeSelect);
    
            resolve(heroeSelect); //console.log('2 segundos después');
            // reject('No se pudo encontrar el héroe');
        }, 2000);
    
    });

    // return promesa;
}

getHeroeByIdAsync(5)
    .then(heroe => console.log('Heroe ', heroe))
    .catch(err => console.warn(err));
    // .then(console.log)
    // .catch(console.warn);