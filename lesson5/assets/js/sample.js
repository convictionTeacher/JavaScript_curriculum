/**
 * Lesson5: ループ処理 - 解答例ファイル
 */
// ===================================
// L5-S1-1:
// for文を使って、1から5までの数字をコンソールへ出力する。
// 出力例：1 2 3 4 5
// ===================================
function L5_S1_1() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// ===================================
// L5-S1-2:
// for文を使って、9から1までカウントダウンを'.js-countDown-s1'要素のテキストに表示する。
// 出力例：987654321
// ===================================
function L5_S1_2() {
  const q1 = document.querySelector("#q1");
  const countDown = q1.querySelector(".js-countDown-s1");
  let result = "";
  for (let i = 9; i >= 1; i--) {
    result += i;
  }
  countDown.textContent = result;
}

// ===================================
// L5-S1-3:
// for文を使って1から10までの数字を順番に足し、合計を'.js-number-s1'要素のテキストへ出力する。
// 出力例：55
// ===================================
function L5_S1_3() {
  const q1 = document.querySelector("#q1");
  const numberElement = q1.querySelector(".js-number-s1");
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  numberElement.textContent = sum;
}

// ===================================
// L5-S2-1:
// すべての'.js-btn-s2'要素を全てまとめて取得して、for文で1つずつ取り出しコンソールに表示する。
// ===================================
function L5_S2_1() {
  const q2 = document.querySelector("#q2");
  const buttons = q2.querySelectorAll(".js-btn-s2");
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
  }
}

// ===================================
// L5-S2-2:
// for文を使ってすべての'.js-btn-s2'要素のテキストを「更新」に変更する。
// ===================================
function L5_S2_2() {
  const q2 = document.querySelector("#q2");
  const buttons = q2.querySelectorAll(".js-btn-s2");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "更新";
  }
}

// ===================================
// L5-S2-3:
// for文を使ってすべての'.js-btn-s2'要素にdisabled属性を付与する。
// ===================================
function L5_S2_3() {
  const q2 = document.querySelector("#q2");
  const buttons = q2.querySelectorAll(".js-btn-s2");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// ===================================
// L5-S3-1:
// while文を使って、0から10までの偶数のみを'.js-num-s3'要素のテキストに表示する。
// ===================================
function L5_S3_1() {
  const q3 = document.querySelector("#q3");
  const display = q3.querySelector(".js-num-s3");
  let num = 0;
  let result = "";
  while (num <= 10) {
    if (num % 2 === 0) {
      result += num + " ";
    }
    num++;
  }
  display.textContent = result;
}

// ===================================
// L5-S3-2:
// '.js-button-s3'要素をクリックしたら、prompt()で「文字を入力してください。」と表示する。
// while文を使って、文字が入力されるまで入力を求める。
// ===================================
function L5_S3_2() {
  const q3 = document.querySelector("#q3");
  const button = q3.querySelector(".js-button-s3");
  button.addEventListener("click", () => {
    let inputPrompt = "";
    while (inputPrompt === "") {
      inputPrompt = prompt("文字を入力してください。");
    }
  });
}

// ===================================
// L5-S4-1:
// do-while文を使って、1から5まで数字を'.js-num-s4'要素のテキストに表示する。
// ===================================
function L5_S4_1() {
  const q4 = document.querySelector("#q4");
  const display = q4.querySelector(".js-num-s4");
  let count = 1;
  let result = "";
  do {
    result += count + " ";
    count++;
  } while (count <= 5);
  display.textContent = result;
}

// ===================================
// L5-S4-2:
// '.js-button-s4'要素をクリックしたら、do-while文とconfirm()を使って「利用規約を確認しましたか？」と必ず1回表示する。
// OKボタンを押した場合は処理を終了し、キャンセルボタンを押した場合は、再度「利用規約を確認しましたか？」と表示する。
// ===================================
function L5_S4_2() {
  const q4 = document.querySelector("#q4");
  const button = q4.querySelector(".js-button-s4");
  button.addEventListener("click", () => {
    let checked;
    do {
      checked = confirm("利用規約を確認しましたか？");
    } while (checked === false);
  });
}

// ===================================
// L5-S5-1:
// 1から20までループし、偶数のみ表示する(continueを使用)。
// また、10より大きい数になったらループを終了する(breakを使用)。
// ===================================
function L5_S5_1() {
  let result = "";
  for (let i = 1; i <= 20; i++) {
    if (i > 10) {
      break;
    }
    if (i % 2 !== 0) {
      continue;
    }
    result += i + " ";
    console.log(i);
  }
}

// ===================================
// L5-S5-2:
// すべての'.js-item-s5'要素をループし、テキストが"特別"の要素を見つけたらループを終了し、「見つかりました」と画面に表示する(breakを使用)。
// ===================================
function L5_S5_2() {
  const q5 = document.querySelector("#q5");
  const items = q5.querySelectorAll(".js-item-s5");
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent === "特別") {
      console.log("見つかりました");
      break;
    }
  }
}

// ===================================
// L5-S6-1:
// ネストされたループを使って、九九表(1の段～9の段)を'.js-multiTable-s6'要素に表示する。
// ===================================
function L5_S6_1() {
  const q6 = document.querySelector("#q6");
  const display = q6.querySelector(".js-multiTable-s6");
  let result = "";
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      result += i + " × " + j + " = " + i * j + "<br>";
    }
    result += "<br>";
  }
  display.innerHTML = result;
}

// ===================================
// L5-S6-2:
// ネストされたループを使って、以下のような三角形を'.js-triangle-s6'要素に表示する。
// *
// **
// ***
// ****
// *****
// ===================================
function L5_S6_2() {
  const q6 = document.querySelector("#q6");
  const display = q6.querySelector(".js-triangle-s6");
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    result += "<br>";
  }
  display.innerHTML = result;
}

// ===================================
// L5-S7-1:
// すべての'.js-item-s7'要素を、ループを使ってコンソールに表示する。
// ===================================
function L5_S7_1() {
  const q7 = document.querySelector("#q7");
  const items = q7.querySelectorAll(".js-item-s7");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

// ===================================
// L5-S7-2:
// すべての'.js-button-s7'要素のテキストを「完了」に変更して、画面に表示する。
// ===================================
function L5_S7_2() {
  const q7 = document.querySelector("#q7");
  const buttons = q7.querySelectorAll(".js-button-s7");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "完了";
  }
}

// ===================================
// L5-S8-1:
// すべての'.js-card-s8'要素の個数をカウントして、'.js-cardCount-s8'要素に表示する。
// ===================================
function L5_S8_1() {
  const q8 = document.querySelector("#q8");
  const cards = q8.querySelectorAll(".js-card-s8");
  const display = q8.querySelector(".js-cardCount-s8");
  display.textContent = `カード数: ${cards.length}個`;
}

// ===================================
// L5-S8-2:
// すべての'.js-item-s8'要素をループし、偶数番目の要素に'active'クラスを追加する。
// ===================================
function L5_S8_2() {
  const q8 = document.querySelector("#q8");
  const items = q8.querySelectorAll(".js-item-s8");
  for (let i = 0; i < items.length; i++) {
    if ((i + 1) % 2 === 0) {
      items[i].classList.add("active");
    }
  }
}

// ===================================
// L5-S9-1:
// '.js-button-s9'（送信ボタン）をクリックしたときに処理を開始する。
// for文を使って、3つの'.js-input-s9'要素を上から順に確認する。
// もし値が空（""）だったら、その入力欄に'is-active'を追加する。
// '.js-error-s9'要素から'u-hide'を削除して表示し、残りの項目はチェックせずに終了する。
// ===================================
function L5_S9_1() {
  const q9_1 = document.querySelector("#q9_1");
  const submitBtn = q9_1.querySelector(".js-button-s9");
  const inputs = q9_1.querySelectorAll(".js-input-s9");
  const errorMessage = q9_1.querySelector(".js-error-s9");

  submitBtn.addEventListener("click", () => {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("is-active");
        errorMessage.classList.remove("u-hide");
        break;
      }
    }
  });
}

// ===================================
// L5-S9-2:
// すべての'.js-button-s9'要素をループで処理し、以下の処理を実行する。
// ・すべてのボタンのテキストを「処理済み」に変更する
// ・3番目以降のボタンに'is-disabled'クラスを追加する
// ・処理したボタンの総数を'.js-buttonCount-s9'要素に「ボタン総数：X個」と表示する
// ・'is-disabled'クラスが付いているボタンの個数を'.js-disabledCount-s9'要素に「無効：X個」と表示する
// ===================================
function L5_S9_2() {
  const q9_2 = document.querySelector("#q9_2");
  const buttons = q9_2.querySelectorAll(".js-button-s9");
  let disabledCount = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "処理済み";
    if (i >= 2) {
      buttons[i].classList.add("is-disabled");
      disabledCount++;
    }
  }

  const buttonCountDisplay = q9_2.querySelector(".js-buttonCount-s9");
  const disabledCountDisplay = q9_2.querySelector(".js-disabledCount-s9");
  buttonCountDisplay.textContent = `ボタン総数：${buttons.length}個`;
  disabledCountDisplay.textContent = `無効：${disabledCount}個`;
}

// ===================================
// L5-S9-3:
// ネストされたループを使って、3の段(3×1から3×9まで)を「3 × 1 = 3」の形式で'.js-table3-s9'要素に表示する。
// 同様に5の段(5×1から5×9まで)を'.js-table5-s9'要素に、7の段(7×1から7×9まで)を'.js-table7-s9'要素に表示する。
// 1の段から9の段まですべての計算を行い、積が30以上になる計算式のみを「X × Y = Z」の形式で抽出し、
// '.js-over30-s9'要素に表示する(最初の10個まで表示し、10個見つかったらループを終了する)。
// ===================================
function L5_S9_3() {
  const q9_3 = document.querySelector("#q9_3");
  const area3 = q9_3.querySelector(".js-table3-s9");
  const area5 = q9_3.querySelector(".js-table5-s9");
  const area7 = q9_3.querySelector(".js-table7-s9");
  const area30 = q9_3.querySelector(".js-over30-s9");

  let result3 = "";
  let result5 = "";
  let result7 = "";
  let result30 = "";
  let count30 = 0;

  // 3の段
  for (let i = 1; i <= 9; i++) {
    result3 += `3 × ${i} = ${3 * i}<br>`;
  }
  area3.innerHTML = result3;

  // 5の段
  for (let i = 1; i <= 9; i++) {
    result5 += `5 × ${i} = ${5 * i}<br>`;
  }
  area5.innerHTML = result5;

  // 7の段
  for (let i = 1; i <= 9; i++) {
    result7 += `7 × ${i} = ${7 * i}<br>`;
  }
  area7.innerHTML = result7;

  // 積が30以上の計算式
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      const product = i * j;
      if (product >= 30) {
        result30 += `${i} × ${j} = ${product}<br>`;
        count30++;
        if (count30 >= 10) {
          break;
        }
      }
    }
    if (count30 >= 10) {
      break;
    }
  }
  area30.innerHTML = result30;
}
