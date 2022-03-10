
const persona = {
    nombre: 'tony',
    lnom: 'fallas',
    edad:23,
    direccion: {
        ciudad: 'Shingona',
        zip: 90001,
        esto: 901290122.21212212,
        lotro: 12121212121.323323,
    }
}
//console.table({persona:persona});

const persona2 = { ...persona };
persona2.nombre = 'Odette';

console.log(persona);
console.log(persona2);
