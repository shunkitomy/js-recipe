const likeThree = function(number) {
  for (let n = 1; n <= number; n++) {
    let str = String(n)
    if (str.includes("3")) {
      console.log(`${n}!!!!!`)
    } else {
      console.log(n)
    }
  }
}
