//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter(
    (character) => character.house === condition
  );
  return membersByHouse;
}

export function wandWood(dataToFilter) {
  return Object.entries(dataToFilter.wand)[0][1];
}

export function wandCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
}

//Filtrar por el material/madera de la varita
export function filterWandByWood(dataToFilter) {
  const wandsAndOwner = dataToFilter.map((character) => {
    const material = Object.entries(character.wand)[0][1];
    const owner = character.name;
    const allWands = [owner, material];
    return allWands;
  });

  return wandsAndOwner;
}

//Filtrar por el núcleo de la varita
export function filterWandByCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
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
    const image = Object.entries(character.patronus)[2][1];
    const allPatronus = [owner, patronus, description, image];
    return allPatronus;
  });

  return patronusAndInfo;
}
