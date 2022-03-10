//import {heroes} from './data/heroes'
//import { heroes } from './data/heroes';

import heroes,{owners} from "../data/heroes";

//console.log(heroes);

// const getHeroById = (id) => {
//     return heroes.find((heroe)=>{
//         if (heroe.id === id){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }
export const getHeroById = (id) => heroes.find((heroe)=> heroe.id === id);

// console.log(getHeroById(2));

export const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroByOwner('Marvel'));
// console.log(owners);