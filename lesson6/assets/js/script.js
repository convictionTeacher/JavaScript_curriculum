/**
 * ===================================
 * JavaScript Script lesson6
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q1_1: "b",
  q1_2: "a",
  q2_1: "b",
  q2_2: "d",
  q3_1: "a",
  q3_2: "c",
  q4_1: "c",
  q4_2: "b",
  q5_1: "b",
  q5_2: "c",
  q6_1: "d",
  q6_2: "c",
  q7_1: "b",
  q7_2: "b",
  q8_1: "b",
  q8_2: "c",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: {
    inputs: [".js-blank--11-1", ".js-blank--11-2"],
    answers: ["0", "1"],
    validation: "default",
  },
  12: {
    inputs: [".js-blank--12-1", ".js-blank--12-2"],
    answers: ["length", "itemCount"],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--21-1", ".js-blank--21-2"],
    answers: ["push", "pop"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--22-1", ".js-blank--22-2"],
    answers: ["unshift", "shift"],
    validation: "default",
  },
  31: {
    inputs: [".js-blank--31-1", ".js-blank--31-2"],
    answers: ["splice", "1"],
    validation: "default",
  },
  32: {
    inputs: [".js-blank--32-1", ".js-blank--32-2"],
    answers: ["2", "0"],
    validation: "default",
  },
  41: {
    inputs: [".js-blank--41-1", ".js-blank--41-2"],
    answers: ["0", "length"],
    validation: "default",
  },
  42: {
    inputs: [".js-blank--42-1", ".js-blank--42-2"],
    answers: ["forEach", "orderId"],
    validation: "default",
  },
  51: {
    inputs: [".js-blank--51-1", ".js-blank--51-2"],
    answers: ["find", ">="],
    validation: "default",
  },
  52: {
    inputs: [".js-blank--52-1", ".js-blank--52-2"],
    answers: ["filter", "length"],
    validation: "default",
  },
  61: {
    inputs: [".js-blank--61-1", ".js-blank--61-2"],
    answers: ["map", "productName"],
    validation: "default",
  },
  62: {
    inputs: [".js-blank--62-1", ".js-blank--62-2"],
    answers: ["map", "500"],
    validation: "default",
  },
  71: {
    inputs: [".js-blank--71-1", ".js-blank--71-2"],
    answers: ["split", "join"],
    validation: "default",
  },
  72: {
    inputs: [".js-blank--72-1", ".js-blank--72-2"],
    answers: ["split", "2"],
    validation: "default",
  },
  81: {
    inputs: [".js-blank--81-1", ".js-blank--81-2"],
    answers: ["find", "email"],
    validation: "default",
  },
  82: {
    inputs: [".js-blank--82-1", ".js-blank--82-2"],
    answers: ["filter", "status"],
    validation: "default",
  },
};
