//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter(
    (character) => character.house === condition
  );
  return membersByHouse;
}

/* export function wandWood(dataToFilter) {
  return Object.entries(dataToFilter.wand)[0][1];
}

export function wandCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
} */

//Filtrar por el material/madera de la varita
export function filterWandByWood(dataToFilter) {
  return Object.entries(dataToFilter.wand)[0][1];
}

export function filterBywood(dataToFilter) {
  const hasWood = dataToFilter.filter((character) => character.wood);
  const woodAndInfo = hasWood.map((character) => {
    const wood = Object.entries(character.wood)[0][1];
    const owner = character.name;
    const image = Object.entries(character.wood)[2][1];
    const description = Object.entries(character.wood)[1][1];
    const allWood = [owner, wood, description, image];
    return allWood;
  });

  return woodAndInfo;
}

//Filtrar por el núcleo de la varita
/* export function filterWandByCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
} */

export function filterByCore(dataToFilter) {
  const hasCore = dataToFilter.filter((character) => character.core);
  const coreAndInfo = hasCore.map((character) => {
    const core = Object.entries(character.core)[1][1];
    const owner = character.name;
    const image = Object.entries(character.core)[2][1];
    const description = Object.entries(character.core)[1][1];
    const allPatronus = [owner, core, description, image];
    return allPatronus;
  });

  return coreAndInfo;
}

//Filtrar por el patronus. El resultado es un array con muchos array [nombre, patronus, descripción] - onlyPatronus(character); (después de un forEach)
export function patronusNameOnly(dataToFilter) {
  return Object.entries(dataToFilter.patronus)[0][1];
}

//Filtrar por el patronus (pero sin forEach previo) - filterByPatronus(charactersData);
export function filterByPatronus(dataToFilter) {
  const hasPatronus = dataToFilter.filter((character) => character.patronus);
  const patronusAndInfo = hasPatronus.map((character) => {
    const patronus = Object.entries(character.patronus)[0][1];
    const owner = character.name;
    const image = Object.entries(character.patronus)[2][1];
    const description = Object.entries(character.patronus)[1][1];
    const allPatronus = [owner, patronus, description, image];
    return allPatronus;
  });

  return patronusAndInfo;
}
