//desestructuracion 

const { useContext } = require("react");

// asignacion desesctructurante
const persona = {
    nombre:'yepeto',
    edad:23,
    clave:'simon',
}

const {edad,clave,nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const otroP = ({clave,nombre,edad,rango='capi'}) => {
    //console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
        location:{
            alt:9999,
            dist:-6666
        }
    }
}
const {nombreClave,anios,location:{alt,dist}} = otroP(persona);

console.log(nombreClave,anios);
console.log(alt,dist);