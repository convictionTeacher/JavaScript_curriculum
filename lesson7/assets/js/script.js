/**
 * ===================================
 * JavaScript Script lesson7
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q1_1: "c", // 定義のみで呼び出しなし → なにも表示されない
  q1_2: "b", // showNum() → 42
  q2_1: "b", // greet() → こんにちは！
  q2_2: "c", // add() → result = 15
  q3_1: "b", // greet("田中") → こんにちは、田中さん！
  q3_2: "b", // double(5) → 10
  q4_1: "c", // add(3, 4) → 7
  q4_2: "b", // getMessage() → 完了しました
  q5_1: "b", // introduce("田中", 25) → 田中は25歳です。
  q5_2: "b", // max(8, 3) → 8
  q6_1: "b", // greet() → こんにちは！
  q6_2: "c", // add(2, 3) → 5
  q7_1: "c", // greet() → こんにちは！
  q7_2: "d", // double(6) → 12
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: { inputs: [".js-blank--1"], answers: ["function"], validation: "default" },
  12: { inputs: [".js-blank--2"], answers: ["score"], validation: "default" },
  21: { inputs: [".js-blank--3"], answers: ["showGreet"], validation: "default" },
  22: { inputs: [".js-blank--4"], answers: ["showMsg"], validation: "default" },
  31: { inputs: [".js-blank--5"], answers: ["name"], validation: "default" },
  32: { inputs: [".js-blank--6"], answers: ["length"], validation: "default" },
  41: { inputs: [".js-blank--7"], answers: ["return"], validation: "default" },
  42: { inputs: [".js-blank--8"], answers: ["result"], validation: "default" },
  51: { inputs: [".js-blank--9"], answers: ["time"], validation: "default" },
  52: { inputs: [".js-blank--10"], answers: ["*"], validation: "default" },
  61: { inputs: [".js-blank--11"], answers: ["function"], validation: "default" },
  62: { inputs: [".js-blank--12"], answers: ["double"], validation: "default" },
  71: { inputs: [".js-blank--13"], answers: ["=>"], validation: "default" },
  72: { inputs: [".js-blank--14"], answers: ["n"], validation: "default" },
};
