const personajes = ['Erick','Michel','Deloera'];
const [ , , p3] = personajes;
console.log(p3);

const retornoArreglo = () => {
    return ['ABC',123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras,numeros);

//tarea 
//1.- el primer valor del arr se llamar nombre
//2.- se llama set nombre
const useState = (valor) => {
    return[valor, () => { console.log('heyou1;')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('koku');
console.log(nombre);
setNombre();