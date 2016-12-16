/* eslint-disable */
'use strict'

const expect = require(`chai`).expect
const area = require(`../areaCalc.js`)
const poke = require(`../pokeSort.js`)

describe(`areaCalc`, () => {

  it(`correctly computes triangle with sides 3, 4, 5`, () => {
    expect(area.areaCalc(3, 4, 5)).to.eql(6)
  })

  it(`checks that all three integers make a triangle`, () => {
    expect(area.areaCalc(3, 4, 300000)).to.eql(`Not a triangle, ya dingus`)
  })
})

describe(`pokeSort`, () => {
  const pokeArray = [{
    id: 4,
    name: 'charmander',
    weight: 12.3
  }, {
    id: 1,
    name: 'bulbasaur',
    weight: 22.4
  }, {
    id: 7,
    name: 'squirtle',
    weight: 17.9
  }, {
    id: 144,
    name: 'articuno',
    weight: 60.2
  }]

  it(`should return array sorted by passed parameter`, () => {
    expect(poke.pokeSort(pokeArray, 'name')).to.eql([ { id: 144, name: 'articuno', weight: 60.2 },
  { id: 1, name: 'bulbasaur', weight: 22.4 },
  { id: 4, name: 'charmander', weight: 12.3 },
  { id: 7, name: 'squirtle', weight: 17.9 } ]
)
  })

  it(`sort by ascending id`, () => {
    expect(poke.pokeSort(pokeArray, 'id')).to.eql(
      [ { id: 1, name: 'bulbasaur', weight: 22.4 },
        { id: 4, name: 'charmander', weight: 12.3 },
        { id: 7, name: 'squirtle', weight: 17.9 },
        { id: 144, name: 'articuno', weight: 60.2 } ]
    )
  })
})
