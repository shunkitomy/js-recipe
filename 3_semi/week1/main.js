const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")
const button4 = document.getElementById("choice-4")
const button５ = document.getElementById("choice-５")

const display = document.getElementById("display")

button1.onclick = function() {
  display.textContent = "シーズンはまだ始まったばかり！"
}
button2.onclick = function() {
  display.textContent = "強すぎ"
}
button3.onclick = function() {
  display.textContent = "僕も日ハムファンです！"
}
button4.onclick = function() {
  display.textContent = "なんですかー？？"
}
button5.onclick = function() {
  display.textContent = "野球面白いよ！"
}
