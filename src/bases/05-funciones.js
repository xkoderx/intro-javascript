//funciones en js
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Sombras`;


//console.log(saludar('Erick'));
console.log(saludar2('Yepeto'));
console.log(saludar3('Yepetete'));
console.log(saludar4());

const getUser = () => ({
    nom:'Erick',
    ape:'Michel'
});

console.log(getUser());

/* tarea
1. transformar funcion a flecha
2.retornar valor implicito
3.probar*/
const getUsuarioActivo = (nombre) =>
    ({
        nombre:'MAria',
        apei:nombre
    });
const usuarioActivo = getUsuarioActivo('Erick');
console.log(usuarioActivo);