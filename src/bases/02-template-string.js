const nombre = 'Erick';
const apellido = 'Michel';
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es el texto : ${getSaludo(nombre)}`);