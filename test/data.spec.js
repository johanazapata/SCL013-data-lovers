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
