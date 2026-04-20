/**
 * ===================================
 * JavaScript Script lesson5
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q1_1: "c",
  q1_2: "b",
  q2_1: "b",
  q2_2: "b",
  q3_1: "d",
  q3_2: "a",
  q4_1: "b",
  q4_2: "c",
  q5_1: "a",
  q5_2: "b",
  q6_1: "c",
  q6_2: "b",
  q7_1: "a",
  q7_2: "c",
  q8_1: "b",
  q8_2: "a",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: {
    inputs: [".js-blank--11-1", ".js-blank--11-2"],
    answers: ["0", "5"],
    validation: "default",
  },
  12: {
    inputs: [".js-blank--12-1", ".js-blank--12-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--21-1", ".js-blank--21-2"],
    answers: ["length", "i"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--22-1", ".js-blank--22-2"],
    answers: ["i", "i++"],
    validation: "default",
  },
  31: {
    inputs: [".js-blank--31-1", ".js-blank--31-2"],
    answers: ["length", "i"],
    validation: "default",
  },
  32: {
    inputs: [".js-blank--32-1", ".js-blank--32-2"],
    answers: ["1", "5"],
    validation: "default",
  },
  41: {
    inputs: [".js-blank--41-1", ".js-blank--41-2"],
    answers: ["0", "3"],
    validation: "default",
  },
  42: {
    inputs: [".js-blank--42-1", ".js-blank--42-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  51: {
    inputs: [".js-blank--51-1", ".js-blank--51-2"],
    answers: ["break", "continue"],
    validation: "default",
  },
  52: {
    inputs: [".js-blank--52-1", ".js-blank--52-2"],
    answers: ["7", "continue"],
    validation: "default",
  },
  61: {
    inputs: [".js-blank--61-1", ".js-blank--61-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  62: {
    inputs: [".js-blank--62-1", ".js-blank--62-2"],
    answers: ["1", "i"],
    validation: "default",
  },
  71: {
    inputs: [".js-blank--71-1", ".js-blank--71-2"],
    answers: ["fruits.length", "fruits[i]"],
    validation: "flexible_quote",
  },
  72: {
    inputs: [".js-blank--72-1", ".js-blank--72-2"],
    answers: ["0", "i"],
    validation: "default",
  },
  81: {
    inputs: [".js-blank--81-1", ".js-blank--81-2"],
    answers: ["length", "count"],
    validation: "default",
  },
  82: {
    inputs: [".js-blank--82-1", ".js-blank--82-2"],
    answers: ["i", "add"],
    validation: "default",
  },
};
