//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};  */
import data from './data/potter/potter.js';

export const characters = data.map(character => character);

export const names = characters.map(character => character.name);

const hasPatronus = characters.filter(character => character.patronus);

export const patronus = hasPatronus.map(character => {
  const owner = character.name;
  const patronus = character.patronus;
  const ownerAndPatronus = [owner, patronus];
  return ownerAndPatronus;
});

