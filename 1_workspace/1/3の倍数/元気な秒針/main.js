let count = 0
const countUp = function() {
  count += 1
}

const genkiFunction = function(number) {
  setInterval(countUp, 1000)
  while (count <= number) {
    if (count % 3 === 0) {
      console.log(`${count}!!!!!`)
    } else {
      console.log(count)
    }
    setInterval(countUp, 1000)
  }
}
