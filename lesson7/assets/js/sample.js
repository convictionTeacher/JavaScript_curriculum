/**
 * Lesson7: 関数 - 解答例ファイル
 */

// ===================================
// L7-S1-1:
// 'function'キーワードを使って、コンソールに"Hello！"と出力する
// 関数を定義し、呼び出す。
// ===================================
function L7_S1_1() {
  function sayHello() {
    console.log("Hello！");
  }
  sayHello();
}
L7_S1_1();

// ===================================
// L7-S1-2:
// 'function'キーワードを使って、'.js-message-s1'要素に
// "関数を定義しました！"を表示する関数を定義し、呼び出す。
// ===================================
function L7_S1_2() {
  const q1 = document.querySelector("#q1");
  const message = q1.querySelector(".js-message-s1");
  function showWelcome() {
    message.textContent = "関数を定義しました！";
  }
  showWelcome();
}
L7_S1_2();

// ===================================
// L7-S2-1:
// '.js-runBtn-s2'をクリックしたとき、コンソールに
// "実行しました！"と出力する関数`run`を定義して呼び出す。
// ===================================
function L7_S2_1() {
  const q2 = document.querySelector("#q2");
  const runBtn = q2.querySelector(".js-runBtn-s2");
  function run() {
    console.log("実行しました！");
  }
  runBtn.addEventListener("click", () => {
    run();
  });
}
L7_S2_1();

// ===================================
// L7-S2-2:
// '.js-resetBtn-s2'をクリックしたとき、
// '.js-display-s2'要素のテキストを"初期状態"にリセットする
// 関数`resetDisplay`を定義して呼び出す。
// ===================================
function L7_S2_2() {
  const q2 = document.querySelector("#q2");
  const resetBtn = q2.querySelector(".js-resetBtn-s2");
  const display = q2.querySelector(".js-display-s2");
  function resetDisplay() {
    display.textContent = "初期状態";
  }
  resetBtn.addEventListener("click", () => {
    resetDisplay();
  });
}
L7_S2_2();

// ===================================
// L7-S3-1:
// 名前を受け取って'.js-greeting-s3'に"こんにちは、[名前]さん！"と
// 表示する関数を定義する。
// '.js-greetBtn-s3'をクリックしたとき、'.js-nameInput-s3'の値を
// 引数として渡して呼び出す。
// ===================================
function L7_S3_1() {
  const q3 = document.querySelector("#q3");
  const greetBtn = q3.querySelector(".js-greetBtn-s3");
  const nameInput = q3.querySelector(".js-nameInput-s3");
  const greeting = q3.querySelector(".js-greeting-s3");
  function showGreeting(name) {
    greeting.textContent = "こんにちは、" + name + "さん！";
  }
  greetBtn.addEventListener("click", () => {
    showGreeting(nameInput.value);
  });
}
L7_S3_1();

// ===================================
// L7-S3-2:
// 数値を受け取って2倍した結果を'.js-doubleResult-s3'に表示する
// 関数を定義する。
// '.js-calcBtn-s3'をクリックしたとき、'.js-numInput-s3'の値を
// 引数として渡して呼び出す。
// ===================================
function L7_S3_2() {
  const q3 = document.querySelector("#q3");
  const calcBtn = q3.querySelector(".js-calcBtn-s3");
  const numInput = q3.querySelector(".js-numInput-s3");
  const doubleResult = q3.querySelector(".js-doubleResult-s3");
  function doubleNum(num) {
    doubleResult.textContent = num * 2;
  }
  calcBtn.addEventListener("click", () => {
    doubleNum(Number(numInput.value));
  });
}
L7_S3_2();

// ===================================
// L7-S4-1:
// 2つの数値を受け取って合計を返す関数を定義する。
// '.js-sumBtn-s4'をクリックしたとき、'.js-numA-s4'と'.js-numB-s4'の値を
// 引数として渡して結果を'.js-sumResult-s4'に表示する。
// ===================================
function L7_S4_1() {
  const q4 = document.querySelector("#q4");
  const sumBtn = q4.querySelector(".js-sumBtn-s4");
  const numA = q4.querySelector(".js-numA-s4");
  const numB = q4.querySelector(".js-numB-s4");
  const sumResult = q4.querySelector(".js-sumResult-s4");
  function calcSum(a, b) {
    return a + b;
  }
  sumBtn.addEventListener("click", () => {
    const result = calcSum(Number(numA.value), Number(numB.value));
    sumResult.textContent = result;
  });
}
L7_S4_1();

// ===================================
// L7-S4-2:
// 価格（税抜）を受け取って税込価格（1.1倍）を返す関数を定義する。
// '.js-taxBtn-s4'をクリックしたとき、'.js-priceInput-s4'の値を
// 引数として渡して結果を'.js-taxResult-s4'に"X円"の形式で表示する。
// ===================================
function L7_S4_2() {
  const q4 = document.querySelector("#q4");
  const taxBtn = q4.querySelector(".js-taxBtn-s4");
  const priceInput = q4.querySelector(".js-priceInput-s4");
  const taxResult = q4.querySelector(".js-taxResult-s4");
  function calcTax(price) {
    return Math.round(price * 1.1);
  }
  taxBtn.addEventListener("click", () => {
    const result = calcTax(Number(priceInput.value));
    taxResult.textContent = result + "円";
  });
}
L7_S4_2();

// ===================================
// L7-S5-1:
// 名前と年齢を受け取り'.js-profileResult-s5'に
// "名前：[名前]、年齢：[年齢]歳"と表示する関数を定義する。
// '.js-profileBtn-s5'をクリックしたとき、'.js-nameInput-s5'と
// '.js-ageInput-s5'の値を引数として渡して呼び出す。
// ===================================
function L7_S5_1() {
  const q5 = document.querySelector("#q5");
  const profileBtn = q5.querySelector(".js-profileBtn-s5");
  const nameInput = q5.querySelector(".js-nameInput-s5");
  const ageInput = q5.querySelector(".js-ageInput-s5");
  const profileResult = q5.querySelector(".js-profileResult-s5");
  function showProfile(name, age) {
    profileResult.textContent = "名前：" + name + "、年齢：" + age + "歳";
  }
  profileBtn.addEventListener("click", () => {
    showProfile(nameInput.value, ageInput.value);
  });
}
L7_S5_1();

// ===================================
// L7-S5-2:
// 2つの数値を受け取って大きい方を返す関数を定義する。
// '.js-maxBtn-s5'をクリックしたとき、'.js-numX-s5'と'.js-numY-s5'の値を
// 引数として渡して'.js-maxResult-s5'に表示する。
// ===================================
function L7_S5_2() {
  const q5 = document.querySelector("#q5");
  const maxBtn = q5.querySelector(".js-maxBtn-s5");
  const numX = q5.querySelector(".js-numX-s5");
  const numY = q5.querySelector(".js-numY-s5");
  const maxResult = q5.querySelector(".js-maxResult-s5");
  function getMax(a, b) {
    if (a > b) return a;
    return b;
  }
  maxBtn.addEventListener("click", () => {
    const result = getMax(Number(numX.value), Number(numY.value));
    maxResult.textContent = result;
  });
}
L7_S5_2();

// ===================================
// L7-S6-1:
// 関数式を使って、コンソールに"関数式で定義しました！"を
// 出力する関数を変数`showMsg`に代入し、呼び出す。
// ===================================
function L7_S6_1() {
  const showMsg = function () {
    console.log("関数式で定義しました！");
  };
  showMsg();
}
L7_S6_1();

// ===================================
// L7-S6-2:
// 関数式を使って、入力文字列を大文字に変換して
// '.js-upperResult-s6'に表示する関数を変数`toUpper`に代入する。
// '.js-upperBtn-s6'をクリックしたとき、'.js-upperInput-s6'の値を
// 引数として渡して呼び出す。
// ===================================
function L7_S6_2() {
  const q6 = document.querySelector("#q6");
  const upperBtn = q6.querySelector(".js-upperBtn-s6");
  const upperInput = q6.querySelector(".js-upperInput-s6");
  const upperResult = q6.querySelector(".js-upperResult-s6");
  const toUpper = function (text) {
    return text.toUpperCase();
  };
  upperBtn.addEventListener("click", () => {
    upperResult.textContent = toUpper(upperInput.value);
  });
}
L7_S6_2();

// ===================================
// L7-S7-1:
// アロー関数を使って、コンソールに"アロー関数を使いました！"を
// 出力する関数を変数`sayArrow`に代入し、呼び出す。
// ===================================
function L7_S7_1() {
  const sayArrow = () => {
    console.log("アロー関数を使いました！");
  };
  sayArrow();
}
L7_S7_1();

// ===================================
// L7-S7-2:
// アロー関数を使って、数値を受け取って3倍した結果を
// '.js-tripleResult-s7'に表示する関数を変数`triple`に代入する。
// '.js-tripleBtn-s7'をクリックしたとき、'.js-tripleInput-s7'の値を
// 引数として渡して呼び出す。
// ===================================
function L7_S7_2() {
  const q7 = document.querySelector("#q7");
  const tripleBtn = q7.querySelector(".js-tripleBtn-s7");
  const tripleInput = q7.querySelector(".js-tripleInput-s7");
  const tripleResult = q7.querySelector(".js-tripleResult-s7");
  const triple = (n) => n * 3;
  tripleBtn.addEventListener("click", () => {
    tripleResult.textContent = triple(Number(tripleInput.value));
  });
}
L7_S7_2();

// ===================================
// L7-S8-1:
// const members = ["田中", "鈴木", "佐藤", "高橋", "伊藤"]; を使用してください。
// '.js-memberBtn-s8'をクリックしたとき、forEachとアロー関数を使って
// 配列をループし、各メンバーを'.js-memberList-s8'に一覧表示する。
// ===================================
function L7_S8_1() {
  const q8_1 = document.querySelector("#q8_1");
  const memberBtn = q8_1.querySelector(".js-memberBtn-s8");
  const memberList = q8_1.querySelector(".js-memberList-s8");
  const members = ["田中", "鈴木", "佐藤", "高橋", "伊藤"];
  memberBtn.addEventListener("click", () => {
    memberList.textContent = "";
    members.forEach((member) => {
      const p = document.createElement("p");
      p.textContent = member;
      memberList.appendChild(p);
    });
  });
}
L7_S8_1();

// ===================================
// L7-S8-2:
// const items = [{ name: "コーヒー", price: 500 }, { name: "ケーキ", price: 800 },
// { name: "サンドイッチ", price: 650 }]; を使用してください。
// '.js-saleBtn-s8'をクリックしたとき、mapとアロー関数を使って
// 各価格を10%引きに変換し、'.js-saleList-s8'に「商品名：価格円」の形式で表示する。
// ===================================
function L7_S8_2() {
  const q8_2 = document.querySelector("#q8_2");
  const saleBtn = q8_2.querySelector(".js-saleBtn-s8");
  const saleList = q8_2.querySelector(".js-saleList-s8");
  const items = [
    { name: "コーヒー", price: 500 },
    { name: "ケーキ", price: 800 },
    { name: "サンドイッチ", price: 650 },
  ];
  saleBtn.addEventListener("click", () => {
    saleList.textContent = "";
    const discounted = items.map((item) => ({
      name: item.name,
      price: Math.round(item.price * 0.9),
    }));
    discounted.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item.name + "：" + item.price + "円";
      saleList.appendChild(p);
    });
  });
}
L7_S8_2();

// ===================================
// L7-S8-3:
// const students = [{ name: "田中", score: 72 }, { name: "鈴木", score: 45 },
// { name: "佐藤", score: 88 }, { name: "高橋", score: 55 },
// { name: "伊藤", score: 91 }]; を使用してください。
// '.js-passBtn-s8'をクリックしたとき、filterとアロー関数を使って
// 60点以上の生徒を絞り込み、'.js-passList-s8'に「名前（点数点）」の形式で表示する。
// ===================================
function L7_S8_3() {
  const q8_3 = document.querySelector("#q8_3");
  const passBtn = q8_3.querySelector(".js-passBtn-s8");
  const passList = q8_3.querySelector(".js-passList-s8");
  const students = [
    { name: "田中", score: 72 },
    { name: "鈴木", score: 45 },
    { name: "佐藤", score: 88 },
    { name: "高橋", score: 55 },
    { name: "伊藤", score: 91 },
  ];
  passBtn.addEventListener("click", () => {
    passList.textContent = "";
    const passed = students.filter((student) => student.score >= 60);
    passed.forEach((student) => {
      const p = document.createElement("p");
      p.textContent = student.name + "（" + student.score + "点）";
      passList.appendChild(p);
    });
  });
}
L7_S8_3();

// ===================================
// L7-S8-4:
// アロー関数を使って、数値が偶数かどうかを返す関数`isEven`を定義する。
// '.js-evenBtn-s8'をクリックしたとき、1から20までの数をループし、
// `isEven`がtrueを返す数のみを'.js-evenList-s8'に表示する。
// ===================================
function L7_S8_4() {
  const q8_4 = document.querySelector("#q8_4");
  const evenBtn = q8_4.querySelector(".js-evenBtn-s8");
  const evenList = q8_4.querySelector(".js-evenList-s8");
  const isEven = (n) => n % 2 === 0;
  evenBtn.addEventListener("click", () => {
    evenList.textContent = "";
    for (let i = 1; i <= 20; i++) {
      if (isEven(i)) {
        const p = document.createElement("p");
        p.textContent = i;
        evenList.appendChild(p);
      }
    }
  });
}
L7_S8_4();
