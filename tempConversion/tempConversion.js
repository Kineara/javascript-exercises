const ftoc = function(num) {
  let fTemp = num;
  let cTemp = (fTemp - 32) * (5/9)
  return Math.round(cTemp * 10) / 10;
}

const ctof = function(num) {
  let cTemp = num;
  let fTemp = (cTemp * (9/5)) + 32
  return Math.round(fTemp * 10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
