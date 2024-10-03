console.log('10. Import, Export y Funciones Comunes de Arreglos');

const getUsuarioActivo = (nombre) =>
  ({
    uid: 'ABC567',
    username: nombre
  })

const usuarioActivo = getUsuarioActivo('Leonardo');
console.log(usuarioActivo); // {uid: "ABC567", username: "Fernando"}