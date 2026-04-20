/**
 * Lesson3: イベントリスナー - 解答例ファイル
 */
// ===================================
// L3-S1-1:
// '.js-click-s1'要素にクリックイベントを追加する。
// クリック時に'.js-display-s1'要素のテキストを「ファイルを選択しました。」に変更する。
// ===================================
function L3_S1_1() {
  const q1 = document.querySelector("#q1");
  const button = q1.querySelector(".js-click-s1");
  const display = q1.querySelector(".js-display-s1");

  button.addEventListener("click", function () {
    display.textContent = "ファイルを選択しました。";
  });
}
L3_S1_1();
// ===================================
// L3-S1-2:
// '.js-click-s1'要素にアロー関数を使用し、ダブルクリックイベントを追加する。
// ダブルクリック時に'.js-display-s1'要素のテキストを「ファイルを開きました。」に変更する。
// ===================================
function L3_S1_2() {
  const q1 = document.querySelector("#q1");
  const button = q1.querySelector(".js-click-s1");
  const display = q1.querySelector(".js-display-s1");
  button.addEventListener("dblclick", () => {
    display.textContent = "ファイルを開きました。";
  });
}
L3_S1_2();
// ===================================
// L3-S3-1:
// '.js-input-s3'要素に文字を入力したら、その内容を'.js-message-s3'要素のテキストにリアルタイムで反映する。
// ===================================
function L3_S3_1() {
  const q3 = document.querySelector("#q3");
  const input = q3.querySelector(".js-input-s3");
  const message = q3.querySelector(".js-message-s3");
  input.addEventListener("input", () => {
    message.textContent = input.value;
  });
}
L3_S3_1();
// ===================================
// L3-S3-2:
// '.js-input-s3'要素にマウスをのせたら'.js-status-s3'要素のテキストに「入力中...」、離れたときは「待機中」を表示する。
// ===================================
function L3_S3_2() {
  const q3 = document.querySelector("#q3");
  const input = q3.querySelector(".js-input-s3");
  const status = q3.querySelector(".js-status-s3");
  input.addEventListener("mouseenter", () => {
    status.textContent = "入力中...";
  });
  input.addEventListener("mouseleave", () => {
    status.textContent = "待機中";
  });
}
L3_S3_2();
// ===================================
// L3-S4-1:
// '.js-event-s4'要素をクリック時に発生するイベントオブジェクトを使用し、クリックされたボタンに'.is-active'クラスを付与する。
// テキストを「電源ON状態」に変更する。（スタイルは実装済み。）
// ===================================
function L3_S4_1() {
  const q4 = document.querySelector("#q4");
  const eventElement = q4.querySelector(".js-event-s4");
  eventElement.addEventListener("click", (e) => {
    const target = e.target;
    target.classList.add("is-active");
    target.textContent = "電源ON状態";
  });
}
L3_S4_1();
// ===================================
// L3-S4-2:
// '.js-key-s4'要素でキーボードのキーを押下時に、イベントオブジェクトを使用して押されたキー名を'.js-key-s4'要素自身に表示する。
// ===================================
function L3_S4_2() {
  const q4 = document.querySelector("#q4");
  const keyElement = q4.querySelector(".js-key-s4");
  keyElement.addEventListener("keydown", (e) => {
    keyElement.value = e.key;
  });
}
L3_S4_2();
// ===================================
// L3-S5-1:
// '.js-outer-s5'要素または'.js-inner-s5'要素がクリックされたときに、'.js-log-s5'要素の中にクリックログをpタグとして追加する。
// '.js-outer-s5'要素をクリックした場合："パネルをクリック"と表示する。
// .'js-inner-s5'要素をクリックした場合："オプションを選択"と表示する。

// L3-S5-2:
// '.js-inner-s5'要素をクリック時に、外側（パネル側）の処理が実行されないように修正する。
// ===================================
function L3_S5_1_2() {
  const q5 = document.querySelector("#q5");
  const outer = q5.querySelector(".js-outer-s5");
  const inner = q5.querySelector(".js-inner-s5");
  const log = q5.querySelector(".js-log-s5");
  outer.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "パネルをクリック";
    log.append(p);
  });
  inner.addEventListener("click", (e) => {
    e.stopPropagation();
    const p = document.createElement("p");
    p.textContent = "オプションを選択 ";
    log.append(p);
  });
}
L3_S5_1_2();
// ===================================
// L3-S6-1:
// '.js-form-s6'要素を押下(フォーム送信)時にpreventDefault()で送信を止める。
// その後'.js-message-s6'要素に「送信前チェック中…」と表示する。
//
// L3-S6-2:
// L3-S6-1でフォーム送信を止める。
// 3秒後に"送信完了"と表示してフォームを送信する。
// ===================================
function L3_S6_1_2() {
  const q6 = document.querySelector("#q6");
  const form = q6.querySelector(".js-form-s6");
  const message = q6.querySelector(".js-message-s6");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "送信前チェック中…";

    setTimeout(() => {
      message.textContent = "送信完了";
      form.submit();
    }, 3000);
  });
}
L3_S6_1_2();
// ===================================
// L3-S8-1:
// '.js-menu-s8'要素にトグルイベントを委譲で設定する。
// '.js-item-s8'要素をクリック時にその要素に'.is-active'をトグルして切り替える。
// （今回はif文での対象判定は不要。）
// ===================================
function L3_S8_1() {
  const q8 = document.querySelector("#q8");
  const list = q8.querySelector(".js-menu-s8");
  list.addEventListener("click", (e) => {
    e.target.classList.toggle("is-active");
  });
}
L3_S8_1();
// ===================================
// L3-S8-2:
// '.js-add-s8'要素にクリックイベントを委譲で設定する。
// その要素をクリック時に'.js-menu-s8'要素の中に'.js-newItem-s8'を持つ新しいli要素の「ジュース」を追加する。
// デザインは他のカードと統一する。
// ===================================
function L3_S8_2() {
  const q8 = document.querySelector("#q8");
  const addButton = q8.querySelector(".js-add-s8");
  const list = q8.querySelector(".js-menu-s8");
  addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.classList.add("p-practice__card", "js-itemThird");
    newItem.textContent = "ジュース";
    list.append(newItem);
  });
}
L3_S8_2();
// ===================================
// L3-S9-1:
// ①.js-nameInput-s9要素のテキストに名前、.js-ageInput-s9要素のテキストに年齢を入力し.js-register-s9要素をクリックする。
// ②入力内容を.js-userResult-s9要素に「名前: [入力した名前], 年齢: [入力した年齢]歳」の形式で表示する。
// ===================================
function L3_S9_1() {
  const q9_1 = document.querySelector("#q9_1");
  const nameInput = q9_1.querySelector(".js-nameInput-s9");
  const ageInput = q9_1.querySelector(".js-ageInput-s9");
  const registerBtn = q9_1.querySelector(".js-register-s9");
  const userInfo = q9_1.querySelector(".js-userResult-s9");
  registerBtn.addEventListener("click", () => {
    userInfo.textContent = `名前: ${nameInput.value}, 年齢: ${ageInput.value}歳`;
  });
}
L3_S9_1();
// ===================================
// L3-S9-2:
// ①.js-numLeft-s9、.js-numRight-s9要素に数値を入力する。
// ②.js-addBtn-s9、.js-subtractBtn-s9、.js-multiplyBtn-s9、.js-divideBtn-s9要素をクリックで各計算を実行する。
// ③結果を.js-calcResult-s9要素のテキストに計算結果を表示する。
// ===================================
function L3_S9_2() {
  const q9_2 = document.querySelector("#q9_2");
  const numLeftInput = q9_2.querySelector(".js-numLeft-s9");
  const numRightInput = q9_2.querySelector(".js-numRight-s9");
  const addBtn = q9_2.querySelector(".js-addBtn-s9");
  const subtractBtn = q9_2.querySelector(".js-subtractBtn-s9");
  const multiplyBtn = q9_2.querySelector(".js-multiplyBtn-s9");
  const divideBtn = q9_2.querySelector(".js-divideBtn-s9");
  const calcResult = q9_2.querySelector(".js-calcResult-s9");

  addBtn.addEventListener("click", () => {
    const result = Number(numLeftInput.value) + Number(numRightInput.value);
    calcResult.textContent = `${result}`;
  });

  subtractBtn.addEventListener("click", () => {
    const result = Number(numLeftInput.value) - Number(numRightInput.value);
    calcResult.textContent = `${result}`;
  });

  multiplyBtn.addEventListener("click", () => {
    const result = Number(numLeftInput.value) * Number(numRightInput.value);
    calcResult.textContent = `${result}`;
  });

  divideBtn.addEventListener("click", () => {
    const result = Number(numLeftInput.value) / Number(numRightInput.value);
    calcResult.textContent = `${result}`;
  });
}
L3_S9_2();
// ===================================
// L3-S9-3:
// ①.js-colorInput-s9の値が変更されたとき、.js-targetBox-s9の背景色をインラインスタイルを使用して選択した色に変更する。
// ②背景色を変更したとき、.js-currentColor-s9に現在の色のHEXコードを表示する。
// ③.js-resetBtn-s9をクリックしたとき、背景色を初期状態（#ffffff）に戻す。
// ④リセット時は.js-colorInput-s9 の値、.js-targetBox-s9の背景色、.js-currentColor-s9の表示をすべて初期状態にする。
// ===================================
function L3_S9_3() {
  const q9_3 = document.querySelector("#q9_3");
  const colorInput = q9_3.querySelector(".js-colorInput-s9");
  const targetBox = q9_3.querySelector(".js-targetBox-s9");
  const resetBtn = q9_3.querySelector(".js-resetBtn-s9");
  const currentColor = q9_3.querySelector(".js-currentColor-s9");

  const defaultColor = colorInput.value;
  currentColor.textContent = `${defaultColor}`;

  colorInput.addEventListener("input", () => {
    const color = colorInput.value;
    targetBox.style.backgroundColor = color;
    currentColor.textContent = `${color}`;
  });

  resetBtn.addEventListener("click", () => {
    colorInput.value = defaultColor;
    targetBox.style.backgroundColor = defaultColor;
    currentColor.textContent = `${defaultColor}`;
  });
}
L3_S9_3();
// ===================================
// L3-S9-4:
// ①.js-textInput-s9要素にテキストを入力のたびに.js-charCount-s9要素のテキストに文字数を表示する。
// ②.js-clearBtn-s9要素をクリックでテキストエリアを空にし、.js-charCount-s9要素のテキストを「0」に更新する。
// ===================================
function L3_S9_4() {
  const root = document.querySelector("#q9_4");
  const textInput = root.querySelector(".js-textInput-s9");
  const charCount = root.querySelector(".js-charCount-s9");
  const clearBtn = root.querySelector(".js-clearBtn-s9");

  textInput.addEventListener("input", () => {
    charCount.textContent = `${textInput.value.length}`;
  });

  clearBtn.addEventListener("click", () => {
    textInput.value = "";
    charCount.textContent = "0";
  });
}
L3_S9_4();
