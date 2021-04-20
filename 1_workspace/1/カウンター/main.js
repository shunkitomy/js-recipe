plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function() {
  count -= 1

  display.textContent = count
}
doubleButton.onclick = function() {
  count *= 2

  display.textContent = count
}
