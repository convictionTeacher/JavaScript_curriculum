/**
 * Lesson2: DOM操作 - 解答例ファイル
 */
// ===================================
// L2-S1-1:
// '#q1'要素を取得し、コンソールに表示する。
// ===================================
function L2_S1_1() {
  const parent = document.querySelector("#q1");
  console.log(parent);
}
L2_S1_1();
// ===================================
// L2-S1-2:
// '#q1'要素の中の'.js-item-s1'要素を取得し、コンソールに表示する。
// ===================================
function L2_S1_2() {
  const q1 = document.querySelector("#q1");
  const elem = q1.querySelector(".js-item-s1");
  console.log(elem);
}
L2_S1_2();
// ===================================
// L2-S1-3:
// '.js-container-s1'の中にある'.js-button-s1'をNodeListとしてすべて取得し、コンソールに表示する。

// L2-S1-4:
// L2-S1-3で取得した要素のうち2つ目の要素をNodeListのインデックス[]を使って指定し、コンソールに表示する。
// ===================================
function L2_S1_3_4() {
  const q1 = document.querySelector("#q1");
  const container = q1.querySelector(".js-container-s1");
  const buttons = container.querySelectorAll(".js-button-s1");
  console.log(buttons);
  console.log(buttons[1]);
}
L2_S1_3_4();
// ===================================
// L2-S2-1:
// '.js-header-s2'要素を取得し、要素のテキストを"明日の予定"という文字列に変更する。
// ===================================
function L2_S2_1() {
  const q2 = document.querySelector("#q2");
  const title = q2.querySelector(".js-header-s2");
  title.textContent = "明日の予定";
}
L2_S2_1();
// ===================================
// L2-S2-2:
// '.js-status-s2'要素を取得し、既存のテキストの末尾に"準備完了"という文字列を追加する。
// ===================================
function L2_S2_2() {
  const q2 = document.querySelector("#q2");
  const status = q2.querySelector(".js-status-s2");
  status.textContent += "準備完了";
}
L2_S2_2();
// ===================================
// L2-S3-1:
// '.js-submitBtn-old-s3'要素を取得し、class属性の値を"c-button-practice js-submitBtn-s3"に変更する。
// ===================================
function L2_S3_1() {
  const q3 = document.querySelector("#q3");
  const button = q3.querySelector(".js-submitBtn-old-s3");
  button.setAttribute("class", "c-button-practice js-submitBtn-s3");
}
L2_S3_1();
// ===================================
// L2-S3-2:
// '.js-cancelBtn-s3'要素を取得し、disabled属性を追加して無効化する。
// ===================================
function L2_S3_2() {
  const q3 = document.querySelector("#q3");
  const button = q3.querySelector(".js-cancelBtn-s3");
  button.setAttribute("disabled", true);
}
L2_S3_2();
// ===================================
// L2-S4-1:
// '.js-loginForm-s4'要素を取得して'.is-hidden'を削除しフォームを表示する。
// ===================================
function L2_S4_1() {
  const q4 = document.querySelector("#q4");
  const form = q4.querySelector(".js-loginForm-s4");
  form.classList.remove("is-hidden");
}
L2_S4_1();
// ===================================
// L2-S4-2:
// '.js-loginForm-s4'要素の中の'.js-loginBtn-s4'要素を取得して、'.is-active'を追加し色を変更する。
// ===================================
function L2_S4_2() {
  const q4 = document.querySelector("#q4");
  const form = q4.querySelector(".js-loginForm-s4");
  const button = form.querySelector(".js-loginBtn-s4");
  button.classList.add("is-active");
}
L2_S4_2();
// ===================================
// L2-S5-1:
// 新しいタスク"メール返信"を作成し、末尾に追加する。スタイルは既存のタスクと統一する。
// ===================================
function L2_S5_1() {
  const q5 = document.querySelector("#q5");
  const taskList = q5.querySelector(".js-taskForm-s5");
  const newTask = document.createElement("li");
  newTask.classList.add("p-practice__card");
  newTask.textContent = "メール返信";
  taskList.append(newTask);
}
L2_S5_1();
// ===================================
// L2-S5-2:
// '.js-taskForm-s5'内のすべてのli要素を取得する。
// 取得したli要素のうち打ち合わせタスクのみをインデックスを使って削除する。
// ===================================
function L2_S5_2() {
  const q5 = document.querySelector("#q5");
  const taskList = q5.querySelector(".js-taskForm-s5");
  const tasks = taskList.querySelectorAll("li");
  tasks[1].remove();
}
L2_S5_2();
// ===================================
// L2-S6-1:
// 'js-email-s6'要素の値を取得してコンソールに出力し、その後入力欄を空にする。
// ===================================
function L2_S6_1() {
  const q6 = document.querySelector("#q6");
  const emailInput = q6.querySelector(".js-email-s6");
  console.log(emailInput.value);
  emailInput.value = "";
}
L2_S6_1();
// ===================================
// L2-S6-2:
// 'js-agree-s6'要素を初期状態でチェック済みにし、チェック状態をコンソールに出力する。
// ===================================
function L2_S6_2() {
  const q6 = document.querySelector("#q6");
  const checkbox = q6.querySelector(".js-agree-s6");
  checkbox.checked = true;
  console.log(checkbox.checked);
}
L2_S6_2();
// ===================================
// L2-S7-1:
// '.js-target-s7'要素の親要素の、最初の子要素のテキストをコンソールに表示する。
// ===================================
function L2_S7_1() {
  const q7 = document.querySelector("#q7");
  const target = q7.querySelector(".js-target-s7");
  const parent = target.parentElement;
  const firstChild = parent.firstElementChild;
  console.log(firstChild.textContent);
}
L2_S7_1();
// ===================================
// L2-S7-2:
// '.js-target-s7'要素の、次の兄弟要素のテキストを"ニュース"へ変更する。
// ===================================
function L2_S7_2() {
  const q7 = document.querySelector("#q7");
  const target = q7.querySelector(".js-target-s7");
  const nextSibling = target.nextElementSibling;
  nextSibling.textContent = "ニュース";
}
L2_S7_2();
// ===================================
// L2-S8-1:
// '.js-user'のdata-user-idの値を取得し、コンソールに表示する。

// L2-S8-2:
// L2-S8-1で取得したdata-user-idの値と同一のid属性の値を持つ要素を取得し、data-nameを"田中茉莉"へ変更する。
// ===================================
function L2_S8_1_2() {
  const q8 = document.querySelector("#q8");
  const user = q8.querySelector(".js-user-s8");
  const userId = user.dataset.userId;
  console.log(userId);
  const targetElement = document.querySelector(`#${userId}`);
  targetElement.dataset.name = "田中茉莉";
}
L2_S8_1_2();
// ===================================
// L2-S9-1:
// 新しくDocumentFragmentを作成し、'.p-practice__card'をもつli要素を1つ作成する。（テキストは"HOME"）
// 作成したli要素をDocumentFragmentに追加する。

// L2-S9-2:
// L2-S9-1で作成したDocumentFragmentを、'.js-template-s9'要素の中身（content）に追加する。

// L2-S9-3:
// '.js-template-s9'要素の中身を複製し、'.js-navList-s9'要素の配下に追加する。
// ===================================
function L2_S9_1_2_3() {
  const q9 = document.querySelector("#q9");
  const fragment = document.createDocumentFragment();
  const homeElement = document.createElement("li");
  homeElement.classList.add("p-practice__card");
  homeElement.textContent = "HOME";
  fragment.append(homeElement);
  const template = document.querySelector(".js-template-s9");
  template.content.append(fragment);
  const clone = template.content.cloneNode(true);
  const navList = q9.querySelector(".js-navList-s9");
  navList.append(clone);
}
L2_S9_1_2_3();
// ===================================
// L2-S10-1:
// ① '.js-name-s10'要素のテキストを"田中祐美"に変更する。
// ② '.js-status-s10'要素のテキストを"承認済み"へ変更する。
// ③ ②で変更した'.js-status-s10'要素の親要素のdata-role属性値を"member"へ変更し、'.is-active'を追加する。
// ===================================
function L2_S10_1() {
  const q10_1 = document.querySelector("#q10_1");
  const nameElement = q10_1.querySelector(".js-name-s10");
  nameElement.textContent = "田中祐美";
  const statusElement = q10_1.querySelector(".js-status-s10");
  statusElement.textContent = "承認済み";
  const parent = nameElement.closest(".p-practice__card"); // const parent = statusElement.parentElement;でも可
  parent.dataset.role = "member";
  parent.classList.add("is-active");
}
L2_S10_1();
// ===================================
// L2-S10-2:
// ① '.js-link-s10'要素のhref属性の値を"https://www.google.com/"に変更する。
// ② 属性にtarget="_blank"を追加し別タブで開くように設定する。
// ③ '.-disabled'を削除しボタンを有効化する。
// ④ '.js-link-s10'要素から最も近い親要素'.p-practice__card'要素を取得し、その親要素内の最後の子要素を削除する。
// ===================================
function L2_S10_2() {
  const q10_2 = document.querySelector("#q10_2");
  const link = q10_2.querySelector(".js-link-s10");
  link.setAttribute("href", "https://www.google.com/");
  link.setAttribute("target", "_blank");
  link.classList.remove("-disabled");
  const card = link.closest(".p-practice__card");
  card.lastElementChild.remove();
}
L2_S10_2();
// ===================================
// L2-S10-3:
// ① 初期表示時に、data-icon="javascript"を持つラジオボタンを選択状態にする。
// ② '.js-container-s10'の子要素から、現在チェックされている入力要素を取得する。
// ③ その選択された要素のテキストを'.js-result-s10'要素に表示する。
// ===================================
function L2_S10_3() {
  const q10_3 = document.querySelector("#q10_3");
  const jsInput = q10_3.querySelector('[data-icon="javascript"]');
  jsInput.checked = true;
  const container = q10_3.querySelector(".js-container-s10");
  const checkedInput = container.querySelector("input:checked");
  const result = q10_3.querySelector(".js-result-s10");
  result.textContent = checkedInput.value;
}
L2_S10_3();
