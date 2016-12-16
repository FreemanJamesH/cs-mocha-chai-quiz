module.exports = {

  areaCalc(x, y, z) {
    let p = ((x + y + z) / 2)

    return (Math.sqrt(p * (p - x) * (p - y) * (p - z)))
  }
}
