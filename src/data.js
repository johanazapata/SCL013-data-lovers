//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter(
    (character) => character.house === condition
  );
  return membersByHouse;
}

//funciones para conocer la madera y el núcleo de cada varita (se interpola en un condicional con opciones "Información no disponible" o mostrar info)
 export function wandWood(characterToFilter) {
   return Object.entries(characterToFilter.wand);

} 

//return Object.entries(character.wand)[0][1];

export function wandCore(characterToFilter) {
  return Object.entries(characterToFilter.core);
} 


export function filterByWand(dataToFilter) {
  const hasWand = dataToFilter.filter((character) => character.wand);
  const wandAndInfo = hasWand.map((character) => {
    const wood = Object.entries(character.wand)[0][1];
    const owner = character.name;
    const image = Object.entries(character.wand)[2][1];
    const description = Object.entries(character.wand)[1][1];
    const allWand = [owner, wood, description, image];
    return allWand;
  });

  const willHaveCard = wandAndInfo.filter(wand => {
    if (wand[1] != "") {
      return wand;
    }
  });

  return willHaveCard;

}
//Filtrar por el núcleo de la varita
export function coreNameOnly(dataToFilter) {
  return Object.entries(dataToFilter.core)[0][1];
}


export function filterByCore(dataToFilter) {
  const hasCore = dataToFilter.filter((character) => character.core);
  const coreAndInfo = hasCore.map((character) => {
    const core = Object.entries(character.core)[0][1];
    const owner = character.name;
    const image = Object.entries(character.core)[2][1];
    const description = Object.entries(character.core)[1][1];
    const allCore = [owner, core, description, image];
    return allCore;
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
