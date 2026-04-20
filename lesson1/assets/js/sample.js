/**
 * Lesson1: 変数・データ型・演算子 - 解答例ファイル
 */
// ===================================
// L1-S1-1:
// 変数'companyName'に文字列"株式会社テクノロジー"を保存し、コンソールに表示する。
// ===================================
function L1_S1_1() {
  let companyName = "株式会社テクノロジー";
  console.log(companyName);
}
L1_S1_1();
// ===================================
// L1-S1-2:
// 変数'welcomeMessage'に文字列"ようこそ、弊社のサイトへ"を保存し、コンソールに表示する。
// 'welcomeMessage'に文字列"会社概要"を代入しコンソールへ表示する。
// ===================================
function L1_S1_2() {
  let welcomeMessage = "ようこそ、弊社のサイトへ";
  console.log(welcomeMessage);
  welcomeMessage = "会社概要";
  console.log(welcomeMessage);
}
L1_S1_2();
// ===================================
// L1-S2-1:
// 変数'score'に数値85を保存し、コンソールに表示する。
// ===================================
function L1_S2_1() {
  let score = 85;
  console.log(score);
}
L1_S2_1();
// ===================================
// L1-S2-2:
// 変数名'count'に数値300を保存し、コンソールに表示する。
// 'count'に数値100を再代入しコンソールに表示する。
// ===================================
function L1_S2_2() {
  let count = 300;
  console.log(count);
  count = 100;
  console.log(count);
}
L1_S2_2();
// ===================================
// L1-S3-1:
// 変数'message'に文字列で自由な文章を保存し、データ型と値をコンソールに表示する。
// ===================================
function L1_S3_1() {
  let message = "こんにちは";
  console.log(typeof message);
  console.log(message);
}
L1_S3_1();
// ===================================
// L1-S3-2:
// 変数'score'に数値を保存し、データ型と値をコンソールに表示する。
// ===================================
function L1_S3_2() {
  let score = 95;
  console.log(typeof score);
  console.log(score);
}
L1_S3_2();
// ===================================
// L1-S4-1:
// 変数'isActive'にtrue、変数'isComplete'にfalseを保存し、それぞれデータ型と値をコンソールに表示する。
// ===================================
function L1_S4_1() {
  const isActive = true;
  const isComplete = false;
  console.log(typeof isActive, isActive);
  console.log(typeof isComplete, isComplete);
}
L1_S4_1();
// ===================================
// L1-S4-2:
// 変数'initValue'に数値456を保存し、データ型と値をコンソールに表示する。
// 文字列に変換して変数に再代入し、データ型と値をコンソールに表示する。
// ===================================
function L1_S4_2() {
  let initValue = 456;
  console.log(typeof initValue, initValue);
  initValue = String(initValue);
  console.log(typeof initValue, initValue);
}
L1_S4_2();
// ===================================
// L1-S5-1:
// 商品価格1200円、送料500円をそれぞれ変数に保存し、商品価格と送料を合計する。
// その金額に、消費税10%をかけた金額を計算してコンソールに表示する。
// ===================================
function L1_S5_1() {
  const price = 1200;
  const shipping = 500;
  const subtotal = price + shipping;
  const total = subtotal * 1.1;
  console.log(total);
}
L1_S5_1();
// ===================================
// L1-S5-2:
// 数値23を変数に保存し、その23を3で割った余りを計算してコンソールに表示する。
// ===================================
function L1_S5_2() {
  let num = 23;
  let result = num % 3;
  console.log(result);
}
L1_S5_2();
// ===================================
// L1-S6-1:
// 変数に数値100を代入後、代入演算子で50を加算、20を減算し、各段階でコンソールに表示する。
// ===================================
function L1_S6_1() {
  let value = 100;
  console.log(value);
  value += 50;
  console.log(value);
  value -= 20;
  console.log(value);
}
L1_S6_1();
// ===================================
// L1-S6-2:
// 変数に数値200を代入後、代入演算子で1.5倍、2で割り、各段階でコンソールに表示する。
// ===================================
function L1_S6_2() {
  let value = 200;
  console.log(value);
  value *= 1.5;
  console.log(value);
  value /= 2;
  console.log(value);
}
L1_S6_2();
// ===================================
// L1-S7-1:
// 自分の名前と苗字をそれぞれ変数に保存し、結合してフルネームをコンソールに表示する。
// ===================================
function L1_S7_1() {
  const firstName = "太郎";
  const lastName = "山田";
  const fullName = lastName + firstName;
  console.log(fullName);
}
L1_S7_1();
// ===================================
// L1-S7-2:
// 文字列"リンゴ"と数値100をそれぞれ変数に保存し、"リンゴの値段は100円です。"とコンソールに表示する。
// ===================================
function L1_S7_2() {
  let fruit = "リンゴ";
  let price = 100;
  console.log(fruit + "の値段は" + price + "円です。");
}
L1_S7_2();
// ===================================
// L1-S9-1:
// "ワイヤレスイヤホン"、8980、15を変数に保存する。
// テンプレートリテラルで"商品: ワイヤレスイヤホン、価格: 8980円、在庫: 15個"の形式でコンソールに表示する。
// ===================================
function L1_S9_1() {
  const productName = "ワイヤレスイヤホン";
  const price = 8980;
  const stock = 15;
  console.log(`商品: ${productName}、価格: ${price}円、在庫: ${stock}個`);
}
L1_S9_1();
// ===================================
// L1-S9-2:
// "浜田 純"、28、"エンジニア"を変数に保存する。
// テンプレートリテラルで"こんにちは！私は浜田 純です。28歳のエンジニアです。"の形式でコンソールに表示する。
// ===================================
function L1_S9_2() {
  const name = "浜田 純";
  const age = 28;
  const job = "エンジニア";
  console.log(`こんにちは！私は${name}です。${age}歳の${job}です。`);
}
L1_S9_2();
// ===================================
// L1-S10-1:
// ① ユーザー名"向井莉菜"、年齢25、ログイン状態false、ポイント1500をそれぞれ変数に保存する。
// ② 年齢を26に更新、ログイン状態をtrueに変更、ポイントに代入演算子を使用して500を加算する。
// ③ テンプレートリテラルを使用して更新前後の情報を指定した形式でコンソールに表示する。（）内には各値のデータ型を表示する。
// ===================================
function L1_S10_1() {
  const userName = "向井莉菜";
  let age = 25;
  let isLoggedIn = false;
  let point = 1500;
  console.log(`before: ${userName}、${age}歳、ログイン: ${isLoggedIn}、ポイント: ${point}`);
  age = 26;
  isLoggedIn = true;
  point += 500;
  console.log(`after: ${userName} (${typeof userName})、${age}歳 (${typeof age})、ログイン: ${isLoggedIn} (${typeof isLoggedIn})、ポイント: ${point} (${typeof point})`);
}
L1_S10_1();
// ===================================
// L1-S10-2:
// ① 国語85点、数学92点、英語78点をそれぞれ変数に保存する。
// ② 合計点と平均点を計算する。<br />
// ③ テンプレートリテラルを使用して科目別成績、合計得点、平均得点を指定した形式でコンソールに表示。
// ===================================
function L1_S10_2() {
  const japanese = 85;
  const math = 92;
  const english = 78;
  const total = japanese + math + english;
  const average = total / 3;
  console.log(`科目別成績: 国語: ${japanese}点、数学: ${math}点、英語: ${english}点`);
  console.log(`合計得点: ${total}点`);
  console.log(`平均得点: ${average}点`);
}
L1_S10_2();
// ===================================
// L1-S10-3:
// ① 商品名"ノートPC"、現在の在庫数50、補充目標数100をそれぞれ変数に保存する。
// ② 販売により在庫を35減らし、その後在庫を補充目標数になるように代入演算子を用いて補充する。
// ③ テンプレートリテラルを使用して各段階の在庫状況を指定した形式でコンソールに表示する。
// ===================================
function L1_S10_3() {
  const productName = "ノートPC";
  const targetStock = 100;
  let stock = 50;

  console.log(`商品名: ${productName}`);
  console.log(`初期在庫: ${stock}個`);
  stock -= 35;
  console.log(`販売後在庫: ${stock}個`);
  const replenishCount = targetStock - stock;
  stock += replenishCount;
  console.log(`補充必要数: ${replenishCount}個`);
  console.log(`補充後在庫: ${stock}個`);
}
L1_S10_3();
