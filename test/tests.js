/* eslint-disable */
'use strict'

const expect = require(`chai`).expect
const lib = require(`../`)

describe(`areaCalc`, () => {

  it(`correctly computes triangle with sides 3, 4, 5`, () => {
    expect(lib.areaCalc(3, 4, 5)).to.eql(6)
  })

  it(`checks that all three integers make a triangle`, () => {
    expect(lib.areaCalc(3, 4, 300000)).to.eql(`Not a triangle, ya dingus`)
  })
})

describe(`name of function`, () => {

  it(`saying what function should do`, () => {
    expect(lib.nameOfFunction(params)).to.eql(theReturn)
  })

  it(`correctly computes 1! = 1`, () => {
    expect(lib.factorial(1)).to.eql(1)
  })
})
