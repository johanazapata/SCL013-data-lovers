import { filterByHouse } from "../src/data.js";
import { filterByPatronus } from "../src/data.js";
import { charactersData } from "../src/data/potter/potter.js";
import { filterByWand } from "../src/data.js";

describe("filterByHouse", () => {
  test("is a function", () => {
    expect(typeof filterByHouse).toBe("function");
  });
});

test("Returns patronus name, owner and description", () => {
  expect(filterByPatronus(dataToFilter)).toContain("stag");
});

test("función que muestre los personajes de cada casa", () => {
  const data = [
    { name: "Harry Potter" },
    { name: "Hermione Granger" },
    { name: "Ron Weasly" },
  ];

  const showHouseMembers = ["Harry Potter", "Hermione Granger", "Ron Weasly"];
  expect(houseMembers(data, "Gryffindor")).toEqual(showHouseMembers);
});

import { filterByHouse } from "../src/data.js";
import { filterByPatronus } from "../src/data.js";

describe("filterByHouse", () => {
  test("is a function", () => {
    expect(typeof filterByHouse).toBe("function");
  });
});

describe("Patronus filter-function", () => {
  test("Should return patronus name, owner, description and image by data given", () => {
    const dataToFilter = [
      {
        name: "Harry Potter",

        patronus: {
          name: "Ciervo",
          descripcion:
            "El Patronus de Harry tiene la forma de Animagus al igual que el Patronus de su padre. Aprendió a conjurarlo a una edad excepcionalmente temprana.",
          image: "./Imagenes/ciervo.jpg",
        },
      },
    ];

    const output = [
      [
        "Harry Potter",
        "Ciervo",
        "El Patronus de Harry tiene la forma de Animagus al igual que el Patronus de su padre. Aprendió a conjurarlo a una edad excepcionalmente temprana.",
        "./Imagenes/ciervo.jpg",
      ],
    ];

    expect(filterByPatronus(dataToFilter)).toEqual(output);
  });
});
