//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter((character) => {
    if (character.house === condition) {
      return character;
    }
  });
  return membersByHouse;
}

/* export const names = characters.map(character => character.name);

const hasPatronus = characters.filter(character => character.patronus);

export const patronus = hasPatronus.map(character => {
  const owner = character.name;
  const patronus = character.patronus;
  const ownerAndPatronus = [owner, patronus];
  return ownerAndPatronus;
});
 */
