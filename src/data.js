//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};  */
import data from './data/potter/potter.js';

const characters = data.map(character => character);

<<<<<<< HEAD

=======
export let selectedHouseVariable;
>>>>>>> upstream/master
//Dividir personajes por casa
export function houseMembers(selectedHouseVariable) {
  
  characters.filter(character => {
  if (character.house === selectedHouseVariable) {
    return character;
  }
})};




export const gryfinddorMembers = characters.filter(character => {
  if (character.house === 'Gryffindor') {
    return character;
  }
});

export const slytherinMembers = characters.filter(character => {
  if (character.house === 'Slytherin') {
    return character;
  }
});


export const hufflepuffMembers = characters.filter(character => {
  if (character.house === 'Hufflepuff') {
    return character;
  }
});

export const ravenclawMembers = characters.filter(character => {
  if (character.house === 'Ravenclaw') {
    return character;
  }
});



export const names = characters.map(character => character.name);

const hasPatronus = characters.filter(character => character.patronus);

export const patronus = hasPatronus.map(character => {
  const owner = character.name;
  const patronus = character.patronus;
  const ownerAndPatronus = [owner, patronus];
  return ownerAndPatronus;
});

