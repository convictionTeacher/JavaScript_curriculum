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
  q1_2: "b",
  q2_1: "b",
  q2_2: "c",
  q3_1: "b",
  q3_2: "c",
  q4_1: "b",
  q4_2: "c",
  q5_1: "c",
  q5_2: "c",
  q6_1: "b",
  q6_2: "c",
  q7_1: "b",
  q7_2: "c",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: {
    inputs: [".js-blank--11-1"],
    answers: ["1"],
    validation: "default",
  },
  12: {
    inputs: [".js-blank--12-1"],
    answers: ["length"],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--21-1"],
    answers: ["push"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--22-1"],
    answers: ["unshift"],
    validation: "default",
  },
  31: {
    inputs: [".js-blank--31-1"],
    answers: ["splice"],
    validation: "default",
  },
  32: {
    inputs: [".js-blank--32-1"],
    answers: ["0"],
    validation: "default",
  },
  41: {
    inputs: [".js-blank--41-1", ".js-blank--41-2"],
    answers: ["length", "i"],
    validation: "default",
  },
  42: {
    inputs: [".js-blank--42-1"],
    answers: ["forEach"],
    validation: "default",
  },
  51: {
    inputs: [".js-blank--51-1"],
    answers: ["includes"],
    validation: "default",
  },
  52: {
    inputs: [".js-blank--52-1"],
    answers: ["filter"],
    validation: "default",
  },
  61: {
    inputs: [".js-blank--61-1"],
    answers: ["map"],
    validation: "default",
  },
  62: {
    inputs: [".js-blank--62-1"],
    answers: ["item"],
    validation: "default",
  },
  71: {
    inputs: [".js-blank--71-1"],
    answers: ["join"],
    validation: "default",
  },
  72: {
    inputs: [".js-blank--72-1"],
    answers: ["split"],
    validation: "default",
  },
};
