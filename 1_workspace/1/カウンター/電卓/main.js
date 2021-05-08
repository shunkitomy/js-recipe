function update(x) {
  // input tag を更新する関数
  document.querySelector("input").value = x
}

function append(x) {
  // 数字ボタンが押されたので数字を後ろに追加する
  document.querySelector("input").value += x
}

//if(数字)->append
//if(演算子)->inputを記憶して非表示->次の演算子の手前までreinput->inputとreinputで計算
