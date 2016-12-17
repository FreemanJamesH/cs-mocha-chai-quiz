'use strict';

const pokeSort = (array, sortBy) => {
  const properties = [];
  const sortedPokeObjects = [];

  array.forEach((ele) => { properties.push(ele[sortBy]); });
  sortBy === `name` ? properties.sort() : properties.sort((a, b) => a - b);

  for (let j = 0; j < properties.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k][sortBy] === properties[j]) {
        sortedPokeObjects.push(array.splice(k, 1)[0]);
      }
    }
  }

  return sortedPokeObjects;
};

const pokeArray = [{
  id: 4,
  name: `charmander`,
  weight: 12.3,
}, {
  id: 1,
  name: `bulbasaur`,
  weight: 22.4,
}, {
  id: 7,
  name: `squirtle`,
  weight: 17.9,
}, {
  id: 144,
  name: `articuno`,
  weight: 60.2,
}];

// console.log(pokeSort(pokeArray, `weight`));

module.exports = { pokeSort, pokeArray };
