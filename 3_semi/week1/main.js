const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")
const button4 = document.getElementById("choice-4")
const display = document.getElementById("display")
const addButton = document.createElement.apply("input")

const quiz = {
  text: "このプロ野球チームの本拠地はどこでしょう？",
  image: "http://www.lumirs.com/lmr/wp-content/uploads/2017/08/8.png",
  buttons: [
    {
      text: "東京",
      display: "残念！東京はヤクルトと巨人です",
    },
    {
      text: "福岡",
      display: "残念！福岡はソフトバンクです",
    },
    {
      text: "北海道",
      display: "正解！北海道日本ハムファイターズ！",
    },
    {
      text: "仙台",
      display: "残念！仙台は楽天です",
    },
  ],
}

for (let i = 0; i < quiz.buttons.length; i++) {
  addButton.type = "button"
  addButton.value = quiz.buttons.text
}

const reloadQuiz = function() {
  quizText.textContent = "Q." + quiz.text
  quizImage.src = "./image/" + quiz.image

  button1.textContent = quiz.buttons[0].text
  button2.textContent = quiz.buttons[1].text
  button3.textContent = quiz.buttons[2].text
  button4.textcontent = quiz.buttons[3].text
}

const button = function(buttonNumber) {
  display.textContent = quiz.buttons[buttonNumber].display
}

button1.onclick = function() {
  button(0)
}
button2.onclick = function() {
  button(1)
}
button3.onclick = function() {
  button(2)
}
button4.onclick = function() {
  button(3)
}

reloadQuiz()
