# Lesson6: 配列

## テーマカラー
青系（グレー寄り）
--color-primary: #7ab3d4
--color-primary-light: #ddeef7
--color-secondary: #6aa3c4
--color-base-5: #5a93b4
--color-base-10: #3a7399
--color-shadow: #7ab3d44d

## Step構成
Step1〜Step7: 出力予想・コード補完・提出課題
Step8: 総合演習（提出課題のみ）

---

━━━━━━━━━━━━━━━━━━━━
STEP1 配列作成・取得
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const fruits = ["りんご", "バナナ", "オレンジ"];
console.log(fruits[1]);

A) りんご
B) バナナ
C) オレンジ
D) undefined
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const colors = ["赤", "青", "黄", "緑"];
console.log(colors.length);

A) 3
B) 4
C) 5
D) undefined
正解：B

■ 穴埋め①
配列の2番目の要素を取得するコードの空欄を埋めてください。

const items = ["A", "B", "C"];
console.log(items[___]);

答え：1

■ 穴埋め②
配列の要素数を取得するコードの空欄を埋めてください。

const list = ["月", "火", "水", "木", "金"];
console.log(list.___);

答え：length

■ 実装①
'.js-fruitList-s1'に以下の配列を作成し、
最初の要素を'.js-firstFruit-s1'に表示する。
const fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];

■ 実装②
上記の配列の要素数を'.js-fruitCount-s1'に「全X種類」と表示する。

<div class="js-fruitList-s1"></div>
<p class="js-firstFruit-s1"></p>
<p class="js-fruitCount-s1"></p>

━━━━━━━━━━━━━━━━━━━━
STEP2 要素追加・削除
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const list = ["A", "B"];
list.push("C");
console.log(list.length);

A) 2
B) 3
C) ["A","B","C"]
D) "C"
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const items = ["X", "Y", "Z"];
const removed = items.pop();
console.log(removed);

A) "X"
B) "Y"
C) "Z"
D) undefined
正解：C

■ 穴埋め①
配列の末尾に要素を追加するコードの空欄を埋めてください。

const fruits = ["りんご", "バナナ"];
fruits.___("オレンジ");
console.log(fruits.length);

答え：push

■ 穴埋め②
配列の先頭に要素を追加するコードの空欄を埋めてください。

const numbers = [2, 3, 4];
numbers.___(1);
console.log(numbers[0]);

答え：unshift

■ 実装①
'.js-addBtn-s2'をクリックしたとき、
'.js-addInput-s2'の値を配列にpushして、
'.js-itemList-s2'にすべての要素を表示する。

■ 実装②
'.js-removeBtn-s2'をクリックしたとき、
配列の末尾をpopで削除して、
'.js-itemList-s2'の表示を更新する。

<input type="text" class="js-addInput-s2" placeholder="項目を入力" />
<button class="js-addBtn-s2">追加</button>
<button class="js-removeBtn-s2">末尾を削除</button>
<div class="js-itemList-s2"></div>

━━━━━━━━━━━━━━━━━━━━
STEP3 指定位置操作
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const items = ["A", "B", "C", "D"];
items.splice(1, 1);
console.log(items.length);

A) 4
B) 3
C) 2
D) 1
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const fruits = ["りんご", "バナナ", "ぶどう"];
fruits.splice(1, 0, "みかん");
console.log(fruits[1]);

A) りんご
B) バナナ
C) みかん
D) ぶどう
正解：C

■ 穴埋め①
インデックス2の要素を1つ削除するコードの空欄を埋めてください。

const list = ["A", "B", "C", "D"];
list.___(2, 1);
console.log(list.length);

答え：splice

■ 穴埋め②
インデックス1に新要素を挿入（削除なし）するコードの空欄を埋めてください。

const items = ["X", "Y", "Z"];
items.splice(1, ___, "新要素");
console.log(items[1]);

答え：0

■ 実装①
'.js-deleteBtn-s3'をクリックしたとき、
'.js-deleteIndex-s3'に入力されたインデックスの要素をspliceで削除して、
'.js-spliceList-s3'の表示を更新する。

■ 実装②
'.js-insertBtn-s3'をクリックしたとき、
'.js-insertIndex-s3'に入力されたインデックスに
'.js-insertInput-s3'の値をspliceで挿入して、
'.js-spliceList-s3'の表示を更新する。

<div class="js-spliceList-s3"></div>
<input type="number" class="js-deleteIndex-s3" placeholder="削除インデックス" />
<button class="js-deleteBtn-s3">削除</button>
<input type="number" class="js-insertIndex-s3" placeholder="挿入インデックス" />
<input type="text" class="js-insertInput-s3" placeholder="挿入する値" />
<button class="js-insertBtn-s3">挿入</button>

━━━━━━━━━━━━━━━━━━━━
STEP4 繰り返し処理
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

A) 0 1 2
B) 10 20 30
C) 3
D) [10, 20, 30]
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const fruits = ["りんご", "みかん", "ぶどう"];
fruits.forEach(function(item) {
  console.log(item);
});

A) fruits
B) 0 1 2
C) りんご みかん ぶどう
D) undefined
正解：C

■ 穴埋め①
for文で配列をループするコードの空欄を埋めてください。

const names = ["田中", "鈴木", "佐藤"];
for (let i = 0; i < names.___; i++) {
  console.log(names[___]);
}

答え：length, i

■ 穴埋め②
forEachで配列をループするコードの空欄を埋めてください。

const prices = [100, 200, 300];
prices.___(function(price) {
  console.log(price);
});

答え：forEach

■ 実装①
'.js-loopBtn-s4'をクリックしたとき、
以下の配列をfor文でループして、
各要素を'.js-loopResult-s4'に順番に追加表示する。
const members = ["山田", "田中", "鈴木", "佐藤", "高橋"];

■ 実装②
'.js-forEachBtn-s4'をクリックしたとき、
同じ配列をforEachでループして、
各要素の文字数を'.js-forEachResult-s4'に「山田：2文字」の形式で表示する。

<button class="js-loopBtn-s4">for文で表示</button>
<div class="js-loopResult-s4"></div>
<button class="js-forEachBtn-s4">forEachで表示</button>
<div class="js-forEachResult-s4"></div>

━━━━━━━━━━━━━━━━━━━━
STEP5 条件で探す・絞る
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const fruits = ["りんご", "バナナ", "みかん"];
console.log(fruits.includes("バナナ"));

A) "バナナ"
B) 1
C) true
D) false
正解：C

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const numbers = [3, 7, 12, 5, 9];
const result = numbers.find(function(n) {
  return n > 8;
});
console.log(result);

A) 3
B) 9
C) 12
D) true
正解：C

■ 穴埋め①
配列に要素が含まれるか確認するコードの空欄を埋めてください。

const tags = ["新着", "セール", "人気"];
console.log(tags.___("セール"));

答え：includes

■ 穴埋め②
条件に合う要素をすべて取り出すコードの空欄を埋めてください。

const prices = [500, 1200, 300, 800, 2000];
const expensive = prices.___(function(price) {
  return price >= 1000;
});
console.log(expensive);

答え：filter

■ 実装①
'.js-searchBtn-s5'をクリックしたとき、
'.js-searchInput-s5'の値が以下の配列に含まれるかincludesで確認し、
'.js-searchResult-s5'に「含まれています」または「含まれていません」と表示する。
const vegetables = ["キャベツ", "にんじん", "たまねぎ", "じゃがいも", "ほうれん草"];

■ 実装②
'.js-filterBtn-s5'をクリックしたとき、
以下の配列から価格が1000円以上の商品をfilterで絞り込み、
'.js-filterResult-s5'に商品名を表示する。
const products = [
  { name: "ノートPC", price: 89000 },
  { name: "マウス", price: 2500 },
  { name: "キーボード", price: 8000 },
  { name: "ケーブル", price: 800 },
  { name: "モニター", price: 45000 },
];

<input type="text" class="js-searchInput-s5" placeholder="野菜名を入力" />
<button class="js-searchBtn-s5">検索</button>
<p class="js-searchResult-s5"></p>
<button class="js-filterBtn-s5">1000円以上を絞り込む</button>
<div class="js-filterResult-s5"></div>

━━━━━━━━━━━━━━━━━━━━
STEP6 配列変換（map）
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const nums = [1, 2, 3];
const doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled[2]);

A) 3
B) 6
C) [2, 4, 6]
D) 2
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const names = ["田中", "鈴木"];
const greetings = names.map(function(name) {
  return "こんにちは、" + name;
});
console.log(greetings[0]);

A) "田中"
B) "こんにちは"
C) "こんにちは、田中"
D) undefined
正解：C

■ 穴埋め①
mapで各要素を変換するコードの空欄を埋めてください。

const prices = [100, 200, 300];
const taxed = prices.___(function(price) {
  return price * 1.1;
});
console.log(taxed[0]);

答え：map

■ 穴埋め②
mapで文字列を加工するコードの空欄を埋めてください。

const items = ["りんご", "バナナ", "みかん"];
const labeled = items.map(function(item) {
  return "商品：" + ___;
});
console.log(labeled[1]);

答え：item

■ 実装①
'.js-mapBtn-s6'をクリックしたとき、
以下の配列をmapで変換して各価格を1.1倍（税込み）にし、
'.js-mapResult-s6'に「商品名：税込価格円」の形式で表示する。
const goods = [
  { name: "コーヒー", price: 500 },
  { name: "サンドイッチ", price: 650 },
  { name: "サラダ", price: 480 },
];

■ 実装②
'.js-labelBtn-s6'をクリックしたとき、
以下の配列をmapで変換して、
各要素に「【完了】」を先頭に付けた新しい配列を作り、
'.js-labelResult-s6'に一覧表示する。
const tasks = ["資料作成", "メール返信", "打ち合わせ", "報告書提出"];

<button class="js-mapBtn-s6">税込価格を表示</button>
<div class="js-mapResult-s6"></div>
<button class="js-labelBtn-s6">完了ラベルを付ける</button>
<div class="js-labelResult-s6"></div>

━━━━━━━━━━━━━━━━━━━━
STEP7 文字列・配列変換（join / split）
━━━━━━━━━━━━━━━━━━━━

■ 出力予想①
コンソールに表示される内容として正しいものを選んでください。

const words = ["JavaScript", "は", "楽しい"];
console.log(words.join(""));

A) "JavaScript,は,楽しい"
B) "JavaScriptは楽しい"
C) 3
D) ["JavaScript","は","楽しい"]
正解：B

■ 出力予想②
コンソールに表示される内容として正しいものを選んでください。

const text = "りんご,バナナ,みかん";
const fruits = text.split(",");
console.log(fruits.length);

A) 1
B) 2
C) 3
D) "りんご"
正解：C

■ 穴埋め①
配列を区切り文字で結合するコードの空欄を埋めてください。

const tags = ["初心者", "JavaScript", "プログラミング"];
const result = tags.___("・");
console.log(result);

答え：join

■ 穴埋め②
文字列を区切り文字で分割するコードの空欄を埋めてください。

const csv = "東京,大阪,名古屋";
const cities = csv.___(",");
console.log(cities[0]);

答え：split

■ 実装①
'.js-joinBtn-s7'をクリックしたとき、
以下の配列をjoinで「 / 」区切りの文字列に変換して、
'.js-joinResult-s7'に表示する。
const breadcrumb = ["ホーム", "カテゴリ", "商品一覧", "商品詳細"];

■ 実装②
'.js-splitBtn-s7'をクリックしたとき、
'.js-splitInput-s7'に入力されたカンマ区切りの文字列をsplitで配列に変換して、
各要素を'.js-splitResult-s7'にリスト表示する。

<button class="js-joinBtn-s7">パンくずリストを表示</button>
<p class="js-joinResult-s7"></p>
<input type="text" class="js-splitInput-s7" placeholder="例：りんご,バナナ,みかん" />
<button class="js-splitBtn-s7">分割して表示</button>
<div class="js-splitResult-s7"></div>

━━━━━━━━━━━━━━━━━━━━
STEP8 総合演習
━━━━━━━━━━━━━━━━━━━━
出力予想・コード補完なし。提出課題のみ。

■ 実装①（カート管理）
以下の初期データを使って、
・'.js-addCartBtn-s8'をクリックしたとき、'.js-cartInput-s8'の値をpushしてカートに追加し'.js-cartList-s8'に一覧表示する
・'.js-removeCartBtn-s8'をクリックしたとき、末尾の商品をpopで削除して'.js-cartList-s8'を更新する
・'.js-cartCount-s8'に常に現在のカート内の商品数を「X点」と表示する
let cart = ["ノートPC", "マウス"];

■ 実装②（キーワード検索）
以下の配列から'.js-keywordInput-s8'に入力されたキーワードをincludesで検索し、
'.js-keywordBtn-s8'クリックで該当する商品名を'.js-keywordResult-s8'に表示する。
見つからない場合は「該当なし」と表示する。
const products = ["ノートPC", "マウス", "キーボード", "モニター", "スピーカー", "ウェブカメラ", "USBハブ"];

■ 実装③（価格集計）
以下の配列をforEachで処理して、
'.js-calcBtn-s8'クリックで合計金額を計算し'.js-totalPrice-s8'に「合計：X円」と表示する。
また最も高い商品名と価格を'.js-maxPrice-s8'に「最高額：商品名（X円）」と表示する。
const items = [
  { name: "ノートPC", price: 89000 },
  { name: "マウス", price: 2500 },
  { name: "キーボード", price: 8000 },
  { name: "モニター", price: 45000 },
  { name: "スピーカー", price: 12000 },
];

■ 実装④（タグ管理）
'.js-tagInput-s8'に入力したタグを'.js-addTagBtn-s8'でpushして追加する。
'.js-tagList-s8'にjoinで「 #」区切りで一覧表示する。
重複するタグはincludesで確認して追加しない。
追加できない場合は'.js-tagMessage-s8'に「すでに追加されています」と表示する。

---

## script.js 正解データ

### QUIZ_ANSWERS
q1_1: "b"（fruits[1] = バナナ）
q1_2: "b"（colors.length = 4）
q2_1: "b"（push後のlength = 3）
q2_2: "c"（pop() = "Z"）
q3_1: "b"（splice後のlength = 3）
q3_2: "c"（splice挿入後のfurits[1] = "みかん"）
q4_1: "b"（for + 配列 = 10 20 30）
q4_2: "c"（forEach = りんご みかん ぶどう）
q5_1: "c"（includes = true）
q5_2: "c"（find > 8 の最初 = 12）
q6_1: "b"（doubled[2] = 6）
q6_2: "c"（greetings[0] = "こんにちは、田中"）
q7_1: "b"（join("") = "JavaScriptは楽しい"）
q7_2: "c"（split後のlength = 3）

### BLANK_ANSWERS
11: inputs:[".js-blank--11-1"], answers:["1"], validation:"default"
12: inputs:[".js-blank--12-1"], answers:["length"], validation:"default"
21: inputs:[".js-blank--21-1"], answers:["push"], validation:"default"
22: inputs:[".js-blank--22-1"], answers:["unshift"], validation:"default"
31: inputs:[".js-blank--31-1"], answers:["splice"], validation:"default"
32: inputs:[".js-blank--32-1"], answers:["0"], validation:"default"
41: inputs:[".js-blank--41-1",".js-blank--41-2"], answers:["length","i"], validation:"default"
42: inputs:[".js-blank--42-1"], answers:["forEach"], validation:"default"
51: inputs:[".js-blank--51-1"], answers:["includes"], validation:"default"
52: inputs:[".js-blank--52-1"], answers:["filter"], validation:"default"
61: inputs:[".js-blank--61-1"], answers:["map"], validation:"default"
62: inputs:[".js-blank--62-1"], answers:["item"], validation:"default"
71: inputs:[".js-blank--71-1"], answers:["join"], validation:"default"
72: inputs:[".js-blank--72-1"], answers:["split"], validation:"default"
