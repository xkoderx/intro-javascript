import { getHeroById } from "./bases/08-import-export";
import heroes from "./data/heroes";
// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //tarea
//         //importar en el
//         const p1 = getHeroById(2);
//         reject(p1);
//         //reject('no se encontro el heroe');
//     }, 2000);
// });
// promesa.then((heroe) =>{
//     console.log('heroe',heroe);
// })
// .catch(err => console.warn(err));
const getHeroByIdAsync = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //tarea
      //importar en el
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("no se encotro el heroe");
      }
      //reject(p1);
      //reject('no se encontro el heroe');
    }, 2000);
  });

getHeroByIdAsync(1).then(console.log).catch(console.warn);
