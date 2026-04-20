# Claude への指示（JavaScript カリキュラム制作用）

## 役割

あなたは JavaScript 初学者向けの講師です。

## 対象

- 社会人
- プログラミング未経験〜初級レベル

---

## Lesson 共通仕様【最重要】

### 基本方針

- 各 lesson は **問題（課題）内容以外はすべて共通仕様**とする
- lesson ごとに変更してよいのは以下のみ：
  - 課題のテーマ
  - 課題文の内容
  - 課題のテーマ色
  - デモコードおよび課題の中身

### lesson 間で統一する要素

#### 構造・UI

- ディレクトリ構造
- Step の構成（数は lesson ごとに異なる、最後の Step は必ず総合演習）
- 各 Step に含まれるタブ構成
  - 出力予想タブ
  - コード補完タブ
  - 提出課題タブ
- セクションの配置順序
- 見出し階層（h2 / h3 など）

#### 表現・ルール

- 説明文のトーン（社会人・初学者向け）
- 課題文の記載ルール（「何を実現するか」のみを記述）
- 課題番号の命名規則
- クラス名・id・data 属性の命名ルール
- 出力予想タブの問題文形式（「コンソールに...」または「ブラウザに...」）
- curriculum.js の役割および提出形式

#### 技術仕様

- 使用技術（Vanilla JavaScript / HTML / CSS）
- CSS 設計手法（FLOCSS と BEM）
- CSS ファイル構成（base.css / style.css）
- JavaScript ファイル構成（script.js / curriculum.js）
- JavaScript の記述方針および禁止事項
- コードブロックの改行ルール（読みやすさ重視）

### 禁止事項

- lesson ごとに UI 構成やタブ構成を変更すること
- **Step 数は都度指定される**ため、独自に変更しないこと
- lesson 固有の独自ルールを追加すること
- 課題以外の説明フローを独自に変更すること
- CSS 設計手法（FLOCSS / BEM）以外の命名規則を使用すること

### 例外対応

- lesson 構成や UI に変更が必要な場合は、**事前に明示的な確認を行うこと**
- 例外を設ける場合は、影響範囲（lesson / Step）を明確にすること

---

## ディレクトリ構造

### 全体構造

```
JavaScript_curriculum/
├── common/
│   └── assets/
│       ├── css/
│       │   ├── reset.css      # 全lesson共通のリセットCSS
│       │   ├── base.css       # 全lesson共通のCSS変数
│       │   └── style.css      # 全lesson共通のスタイル
│       └── js/
│           └── config.js      # 全lesson共通の関数群
└── lessonN/
    ├── index.html
    └── assets/
        ├── css/
        │   ├── base.css       # lessonのテーマカラー定義
        │   └── style.css      # lesson固有のスタイル
        └── js/
            ├── script.js      # 問題の正解データ
            └── curriculum.js  # 受講者の提出ファイル
```

### ディレクトリ構成の厳守事項

- 各 lesson は上記構造を厳守すること
- common ディレクトリは全 lesson で共有
- common ディレクトリの変更は全 lesson に影響するため、変更時は要注意

---

## ファイルごとの役割【重要】

### common ディレクトリのファイル

#### common/assets/css/reset.css

- **役割**: 全 lesson 共通のリセット CSS
- **内容**:
  - ブラウザのデフォルトスタイルのリセット
  - 基本的なフォント設定
  - box-sizing の統一
- **変更頻度**: ほぼ変更しない

#### common/assets/css/base.css

- **役割**: 全 lesson 共通の CSS 変数定義
- **内容**:
  - グレースケールカラー（--color-gray-1 〜 --color-gray-30）
  - 警告・エラーカラー（--color-error, --color-warning, --color-message）
  - フォントファミリー（--font-family, --font-family-mono）
  - フォントサイズ変数（--size-2xs 〜 --size-3xl）
  - アニメーション変数（--base-trans）
- **変更頻度**: ほぼ変更しない
- **注意**: ここにはテーマカラーは含まれない

#### common/assets/css/style.css

- **役割**: 全 lesson 共通のレイアウト・コンポーネントスタイル
- **内容**:
  - レイアウト（.l-wrapper, .l-header, .l-main, .l-footer）
  - コンポーネント（ボタン、タブ、カード、クイズ、コード補完など）
  - ユーティリティクラス（.u-mb-16, .u-ml-8, .u-hide など）
  - レスポンシブデザイン
- **変更頻度**: 機能追加時のみにし、都度確認する
- **注意**: 変更は全 lesson に影響する

#### common/assets/js/config.js

- **役割**: 全 lesson 共通の JavaScript 関数群
- **主な関数**:
  - `checkQuiz()` - 出力予想問題の答え合わせ
  - `checkBlank()` - コード補完問題の答え合わせ
  - `switchTab()` - タブ切り替え
  - `scrollToStep()` - ステップへスクロール
  - `copyToClipboard()` - クリップボードコピー
  - `showToast()` - トースト通知表示
  - `initializeCurriculum()` - 初期化処理
- **変更頻度**: 機能追加・バグ修正時のみにし、都度確認する
- **注意**: 受講者はこのファイルを使用しない

---

### 各 lesson のファイル

#### lessonN/index.html

- **役割**: 学習コンテンツのメインファイル
- **必須内容**:
  - `<head>` 内で CSS を以下の順で読み込む：
    ```html
    <link rel="stylesheet" href="../common/assets/css/reset.css" />
    <link rel="stylesheet" href="../common/assets/css/base.css" />
    <link rel="stylesheet" href="../common/assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/base.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    ```
  - `<body>` の最後で JavaScript を読み込む：
    ```html
    <script src="../common/assets/js/config.js"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/curriculum.js"></script>
    ```
  - Step1〜Step10 を含める
  - 各 Step に説明・出力予想・コード補完・提出課題を含める
- **命名規則**:
  - タイトル: `JavaScript練習 - Lesson[N]`
  - ページ内タイトル: `JavaScript Lesson[N]`
  - サブタイトル: 各 lesson のテーマに応じた説明文

#### lessonN/assets/css/base.css

- **役割**: その lesson のテーマカラー定義**のみ**
- **内容**:
  ```css
  :root {
    /* カラーパレット */
    --color-primary: #64e2b7; /* メインカラー */
    --color-primary-light: #d1fae5; /* ライトカラー */
    --color-secondary: #7ad9a7; /* セカンダリカラー */
    --color-base-5: #52d4a3; /* アクセントカラー */
    --color-base-10: #10b981; /* 強調カラー */
    --color-shadow: #64e2b74d; /* シャドウカラー */
  }
  ```
- **変更可能内容**: カラーコードのみ
- **注意**: レイアウトやサイズの定義は記述しない

#### lessonN/assets/css/style.css

- **役割**: その lesson でのみ使用する固有スタイル
- **記述内容**:
  - 課題で必要な特殊なスタイル
  - デモ用の固有スタイル
- **原則**: 最小限に留める
- **注意**: 共通化できるスタイルは common/assets/css/style.css へ

#### lessonN/assets/js/script.js

- **役割**: その lesson の問題の正解データを定義
- **必須内容**:

  ```javascript
  /**
   * 設定データ - 出力予想問題の正解
   */
  window.QUIZ_ANSWERS = {
    q1_1: "b", // Step1の問題1の正解は選択肢b
    q1_2: "a", // Step1の問題2の正解は選択肢a
    // ... 以下同様
  };

  /**
   * 設定データ - コード補完問題の正解
   */
  window.BLANK_ANSWERS = {
    11: {
      // Step1の問題1（stepFirst の 1問目）
      inputs: [".js-blank--1", ".js-blank--2"], // 入力欄のセレクタ
      answers: ["const", "100"], // 正解
      validation: "default", // 検証タイプ
    },
    // ... 以下同様
  };
  ```

- **検証タイプ**:
  - `default`: 完全一致
  - `flexible_quote`: 引用符を `"` `'` `` ` `` のいずれでも正解
  - `template_literal`: `` ` `` のみ正解
  - `multiple_valid`: 複数の正解を許可
  - `flexible_event`: `event` を `e` に置き換えても正解
- **注意**: common/assets/js/config.js の関数がこのデータを使用する

#### lessonN/assets/js/curriculum.js

- **役割**: 受講者が実際にコードを書いて提出するファイル
- **記述形式**【厳守】:

  ```javascript
  /**
   * LessonN: [テーマ名] - 課題提出用ファイル
   */

  // ===================================
  // L1-S1-1:
  // 課題の説明文を断定形で記載する。
  // 複数行の場合は改行して記載する。
  // ===================================
  function L1_S1_1() {}

  // ===================================
  // L1-S1-2:
  // 課題の説明文を断定形で記載する。
  // ===================================
  function L1_S1_2() {}
  ```

- **記述ルール**:
  - 各課題を関数形式で定義（`function LX_SY_Z() {}`）
  - 課題番号の形式: `// LX-SY-Z:` (コロン必須)
  - 区切り線: `// ===` で各課題を囲む
  - 説明文は断定形（「〜する。」）
  - クラス名・変数名は`'`(シングルクォート)で囲む
  - 文字列は`"`(ダブルクォート)で囲む
  - 複数行の説明は`//`で継続

- **注意**: 受講者はこのファイルのみ編集する

#### lessonN/assets/js/sample.js

- **役割**: curriculum.js の解答例を記載したファイル
- **内容**: curriculum.js と同じ構造で、関数内に解答コードを記載
- **読み込み**: index.html で読み込むが、削除しても問題ないようにする
- **JavaScript 読み込み順**:
  ```html
  <script src="../common/assets/js/config.js"></script>
  <script src="assets/js/script.js"></script>
  <script src="assets/js/curriculum.js"></script>
  <script src="assets/js/sample.js"></script>
  <!-- 解答例（削除可能） -->
  ```
- **注意**:
  - ファイルが存在しない場合でも動作に影響しない
  - 受講者には配布しない（講師用）
  - curriculum.js と同じ関数名を使用することで上書きされる

---

## 課題番号の命名規則【厳守】

### 形式

```
L[lesson番号]-S[step番号]-[課題番号]
```

### 例

- `L1-S1-1`
- `L2-S3-2`
- `L10-S9-3`

### ルール

- lesson / step / 課題番号はゼロ埋めしない
- 半角英数字のみ
- ハイフン区切り

---

## Step 番号の英語表記ルール【厳守】

HTML の id / class 名で使用する Step 番号の英語表記：

| Step 番号 | 英語表記     | 使用例              |
| --------- | ------------ | ------------------- |
| Step1     | `stepFirst`  | `.js-button-s1`     |
| Step2     | `stepSecond` | `.js-item-s2`       |
| Step3     | `stepThird`  | `.js-title-s3`      |
| Step4     | `stepFour`   | `.js-input-s4`      |
| Step5     | `stepFive`   | `.js-list-s5`       |
| Step6     | `stepSix`    | `.js-card-s6`       |
| Step7     | `stepSeven`  | `.js-link-s7`       |
| Step8     | `stepEight`  | `.js-form-s8`       |
| Step9     | `stepNine`   | `.js-menu-s9`       |
| Step10    | `stepTen`    | `.js-container-s10` |
| Step11    | `stepEleven` | `.js-form-s11`      |
| Step12    | `stepTwelve` | `.js-item-s12`      |

**注意**: 上記は主要な Step 番号の例です。lesson ごとに Step 数は異なります。

### 使用場面

- HTML の class 名: `.js-xxx-stepFirst`
- HTML の id 名: `#title-stepFirst`
- JavaScript の問題番号: `11` (Step1 の 1 問目), `32` (Step3 の 2 問目)

### 注意事項

- **必ず上記の英語表記を使用すること**
- `step1`, `step-1`, `stepOne` などは使用禁止
- キャメルケース（stepFirst）を厳守
- **Step 数は lesson ごとに異なる**（都度確認すること）

---

## 各 Lesson の構成

### Step 構成

- **Step 数は固定ではない**（lesson ごとに異なる）
- Step 数は都度指定される（例: Step1〜Step8、Step1〜Step10 など）
- **最後の Step は必ず総合演習**とする
- 例: Step が 8 つの場合、Step8 が総合演習
- 例: Step が 10 の場合、Step10 が総合演習

### 各 Step の内容

#### 1. Step タイトル

- 学ぶ内容が一目でわかるタイトル

#### 2. 説明セクション

- 概念の説明
- 社会人・初学者向けの表現
- 専門用語には補足を入れる

#### 3. 出力予想タブ

- 結果を考えさせる
- 正解・解説を必ず用意する
- コードは記載しない
- **問題文の形式**（必ず以下のいずれかを使用）:
  - 「コンソールに表示される内容として正しいものを選んでください。」
  - 「ブラウザに表示される内容として正しいものを選んでください。」
- **問題数**: 全 Step は 2 問、最後の Step は出題なし

#### 4. コード補完タブ

- 一部が欠けたコードを提示
- 学習テーマ以外は記述済みにする
- 提出課題と同一の完成コードは書かせない
- **問題数**: 全 Step は 2 問、最後の Step は出題なし

##### コード補完の空欄ルール【重要】

- **各空欄には1単語のみを入力させる**
- **1単語とは**: メソッド名、プロパティ名、変数名、数値、演算子、キーワードなど
- **NG例（複数単語）**:
  - `let i = 0` （複数単語を含む）
  - `i * i` （演算子を含む式）
  - `document.querySelectorAll('.card')` （複数の要素を含む）
  - `i <= 3` （比較演算子を含む式）
- **OK例（1単語）**:
  - `0` （数値）
  - `5` （数値）
  - `querySelector` （メソッド名）
  - `length` （プロパティ名）
  - `break` （キーワード）
  - `continue` （キーワード）
  - `i` （変数名）

##### コード補完のHTML構造【必須】

```html
<div class="p-blank__item js-blankItem">
  <h4 class="c-title-question">Q1: 問題文</h4>
  <div class="c-code -blank">
    for (let i = <label for="blank-511" class="c-label-input">ラベル説明</label> <input type="text" class="c-input js-blank--51-1" id="blank-511" placeholder="①" />; i &lt;
    <label for="blank-512" class="c-label-input">ラベル説明</label>
    <input type="text" class="c-input js-blank--51-2" id="blank-512" placeholder="②" />; i++) {<br />
    &nbsp;&nbsp;console.log(i);<br />
    }
  </div>
  <div class="p-result u-mb-10 js-blank-result--51">
    <span class="js-blank-message--51 u-color-message u-hide">すべての空欄を埋めてください</span>
    <span class="js-blank-correct--51 u-color-normal u-hide">〇 正解！</span>
    <span class="js-blank-incorrect--51 u-color-warning u-hide">
      ✕ 不正解。<br />
      正解は ①0 ②5 です。<br />
      詳しい解説をここに記載する。
    </span>
  </div>
  <button data-blank-id="51" class="c-btn">答えを確認</button>
</div>
```

**構造の重要ポイント**:

- 各入力欄の前に `<label>` タグで説明を追加
- 各入力欄に固有のIDを付与（形式: `blank-XYZ`）
- 不正解メッセージには正解と詳しい解説を含める
- 空欄は2つまで（1問につき2つの空欄）

#### 5. 提出課題タブ

- 受講者が完成形のコードを書く唯一の場所
- 課題内容は curriculum.js に記載する
- 命名規則・課題文ルールを厳守する

##### ライブデモエリア【重要】

- **必ず「ライブデモ」というエリアを用意する**
- 受講者が実際に出力を確認できる場所を提供
- このエリアで処理結果を視覚的に確認できるようにする
- **できるだけいろいろなバリエーションや内容のものを用意する**
  - ボタン、テキスト、カード、リスト、フォームなど
  - 様々な UI 要素を組み合わせる
- **重要**: 勝手に新しい素材を作らない
  - 既存の HTML 要素を活用する
  - 新しい素材が必要な場合は事前に確認する

**HTML構造（必須）**:

```html
<div class="p-practice">
  <h2 class="c-title-lesson">タイトル</h2>
  <div class="p-practice__inner">
    <!-- 課題1用の要素 -->
    <div class="js-xxx-stepFirst"></div>
    <!-- 課題2用の要素 -->
    <div class="js-yyy-stepFirst"></div>
  </div>
</div>

<div class="p-task">
  <div class="p-task__item">
    <span class="c-tag js-tooltip" data-tooltip="問題番号をコピー" data-copy>L5-S1-1</span>
    <span class="u-flex-1">課題1の説明文</span>
  </div>
  <div class="p-task__item">
    <span class="c-tag js-tooltip" data-tooltip="問題番号をコピー" data-copy>L5-S1-2</span>
    <span class="u-flex-1">課題2の説明文</span>
  </div>
</div>
```

**重要な構造ルール**:

- **1つの提出課題タブにつき、ライブデモエリア（`.p-practice`）は1つのみ**
- `.p-practice__inner` の中に、2問分の操作対象要素を配置
- `.p-task` 内に2つの `.p-task__item` を記載（課題1と課題2）
- 各 `.p-task__item` には課題番号（`.c-tag`）と説明文を含める
- 受講者は1つのライブデモエリアで2つの課題の結果を確認できる

##### 課題の方針

- **重要**: できるだけ画面に処理結果を表示し、受講者が変化を感じやすい内容にする
  - 例: 要素のテキストを変更、要素の表示/非表示、スタイルの変更など
  - コンソール出力だけでなく、視覚的な変化を伴う課題を優先
- **問題数**: 全 Step は 2 問、最後の Step は 3〜5 問

※ 各 Step には上記内容を切り替える **タブ UI** が存在する前提とする。

### 最後の Step（総合演習）

- **必ず総合演習**とする
- それまでの Step の内容を組み合わせた実践的な課題
- 出力予想・コード補完タブは不要（提出課題タブのみ）
- 提出課題は 3〜5 問程度
- 実務に近いシナリオを使用する
- 画面への変化を伴う課題を中心に構成

#### 総合演習のHTML構造【厳守】

**重要**: 総合演習（最後のStep）は、通常のStepとは異なる構造を使用する。

**通常のStep（Step1〜Step7など）の構造**:

- 1つの`.p-practice`ブロック（ライブデモエリア）を最初に配置
- その後に`.p-task`内に複数の`.p-task__item`を配置
- 各`.p-task__item`は課題番号と説明文のみ

**総合演習の構造**:

- `.p-practice`ブロックは各課題に埋め込む
- 各課題（`.p-task__item`）内に専用のデモエリアを配置
- より複雑で実践的な課題内容

**HTML構造（必須）**:

```html
<div class="p-section__tab js-tab-content is-active" data-tab-content="task">
  <div class="p-desc">
    <p class="c-text">提出課題です。curriculum.jsファイルに実装してください。</p>
  </div>

  <div class="p-task">
    <!-- 課題1 -->
    <div class="p-task__item">
      <span class="c-tag js-tooltip" data-tooltip="問題番号をコピー" data-copy>L5-S8-1</span>
      <div class="p-task__contents u-flex-1">
        <strong>課題タイトル</strong>
        <div class="p-practice u-mt-8">
          <h2 class="c-title-lesson">デモタイトル</h2>
          <div class="p-practice__inner u-gap-12">
            <!-- デモ用のHTML要素 -->
            <div class="p-practice__card">
              <p>表示内容：<span class="js-result-stepEight">-</span></p>
            </div>
          </div>
        </div>
        <p>
          課題の詳細説明（複数行）。<br />
          処理の流れを段階的に記述。<br />
          必要なデータ配列などを提示。<br />
          const data = [...];
        </p>
      </div>
    </div>

    <!-- 課題2 -->
    <div class="p-task__item">
      <span class="c-tag js-tooltip" data-tooltip="問題番号をコピー" data-copy>L5-S8-2</span>
      <div class="p-task__contents u-flex-1">
        <strong>課題タイトル</strong>
        <div class="p-practice u-mt-8">
          <!-- 課題2専用のデモエリア -->
        </div>
        <p>課題の詳細説明。</p>
      </div>
    </div>

    <!-- 課題3以降も同様 -->
  </div>
</div>
```

**構造の重要ポイント**:

1. `.p-task`の中に複数の`.p-task__item`を配置
2. 各`.p-task__item`は以下を含む：
   - `.c-tag`: 課題番号（L5-S8-1など）
   - `.p-task__contents u-flex-1`: 課題内容のラッパー
   - `<strong>`: 課題のタイトル
   - `.p-practice u-mt-8`: その課題専用のライブデモエリア
   - `<p>`: 詳細な課題説明（`<br />`で改行）
3. デモエリアは各課題ごとに独立して配置
4. 課題説明は複数行にわたり、具体的な処理内容を段階的に記述

**curriculum.jsの記述**:

```javascript
// ===================================
// L5-S8-1: 課題タイトル
// ===================================
// 課題: 詳細な課題説明。
//       複数行にわたる説明。
//       必要なデータ配列の提示。
//       const data = [...];
// ここにコードを書いてください。

// ===================================
// L5-S8-2: 課題タイトル
// ===================================
// 課題: 詳細な課題説明。
// ここにコードを書いてください。
```

---

## 課題文の記載ルール【最重要】

### 基本方針

- **「何を実現するか」のみを書く**
- 実装方法やメソッド名は書かない
- **画面に視覚的な変化を伴う課題を優先**する
  - テキストの変更、要素の表示/非表示、スタイルの変更など
  - コンソール出力のみの課題は最小限にする

### クォートの使い分けルール【厳守】

**問題文内でのクォートの使い分け**:

- **クラス名や id 名**: シングルクォート（`'`）で囲む
  - 例: `'.js-addButton-stepFirst'`
  - 例: `'#title-stepFirst'`
- **文字列（単語など）**: ダブルクォート（`"`）で囲む
  - 例: `"送信完了"`
  - 例: `"株式会社テクノロジー"`

**正しい例**:

```javascript
// L2-S3-1: '.js-submitBtn-stepThird' の要素を取得し、
// 表示テキストを "送信完了" に変更してください。
```

**間違った例**:

```javascript
// ❌ クラス名がダブルクォート
// L2-S3-1: ".js-submitBtn-stepThird" の要素を取得し、

// ❌ 文字列がシングルクォート
// 表示テキストを '送信完了' に変更してください。
```

### 禁止例

- `querySelector` / `append` / `addEventListener` などの記載
- `textContent` / `innerHTML` などのプロパティ名

### OK 例

**画面への変化を伴う課題（推奨）**:

```javascript
// L2-S3-1: '.js-submitBtn-stepThird' の要素を取得し、
// 表示テキストを "送信完了" に変更してください。
// ここにコードを書いてください。
```

**コンソール出力のみの課題（最小限にする）**:

```javascript
// L1-S1-1: 変数 companyName に文字列 "株式会社テクノロジー" を保存し、
// コンソールに表示してください。
// ここにコードを書いてください。
```

---

## HTML / CSS / JavaScript 設計原則

### HTML

#### クラス名の命名規則【厳守】

**重要**: `.js-` で始まるクラス名は**ページ内で絶対に重複させない**

- **必須**: 課題対象要素には `.js-` プレフィックスを付与
- **必須**: Step 番号を含めて重複を回避
- **形式**: `.js-[要素名]-step[英語表記]`
- **命名ルール**:
  - **キャメルケースで 2 単語まで**にする
  - 例: `addButton`, `resultText`, `userInput` など
  - ❌ 3 単語以上は避ける: `addNewUserButton`
- **例**:
  - ✅ 正しい: `.js-addButton-stepFirst`, `.js-resultText-stepSecond`
  - ❌ 間違い: `.js-button`, `.js-button`（重複している）
  - ❌ 間違い: `.js-add-new-user-button-stepFirst`（3 単語以上）
- **理由**: JavaScript で要素を特定する際に、重複があると意図しない要素を取得してしまう

#### id 属性の使用

- 必要最小限にする
- Step 番号を含める（例：`#title-stepFirst`, `#form-stepSecond`）

### CSS

#### CSS 設計手法

**FLOCSS と BEM を使用する**

- **FLOCSS（Foundation / Layout / Object / Component / Project / Utility）**
  - `l-` : Layout（レイアウト）
  - `c-` : Component（再利用可能なコンポーネント）
  - `p-` : Project（プロジェクト固有のスタイル）
  - `u-` : Utility（汎用的なヘルパークラス）
  - `is-`, `has-` : State（状態を表すクラス）

- **BEM（Block Element Modifier）**
  - Block: `.block`
  - Element: `.block__element`
  - Modifier: `.block__element--modifier`

#### クラス名の例

```css
/* Layout */
.l-wrapper {
}
.l-header {
}
.l-main {
}

/* Component */
.c-button {
}
.c-card {
}
.c-title {
}

/* Project */
.p-section {
}
.p-quiz {
}
.p-task {
}

/* Utility */
.u-mb-16 {
}
.u-ml-8 {
}
.u-hide {
}

/* State */
.is-active {
}
.is-hidden {
}
.is-disabled {
}
```

#### 状態クラス

- `.is-active` : アクティブ状態
- `.is-hidden` : 非表示状態
- `.is-disabled` : 無効状態
- `.is-show` : 表示状態
- JavaScript で切り替える前提

### JavaScript

- 1 課題 1 概念
- 初学者が理解できる複雑さに留める
- `console.log` を積極的に使用
- 外部ライブラリ（jQuery 等）は使用禁止

#### DOM 取得の方針【重要】

- **できるだけクラス名で取得（querySelector）させる**
- id での取得（getElementById）は最小限にする
- 理由: クラス名での取得は実務でより頻繁に使用される

**推奨**:

```javascript
const button = document.querySelector(".js-addButton-stepFirst");
```

**最小限にする**:

```javascript
const button = document.getElementById("addButton-stepFirst");
```

#### コードブロックの記述ルール

- **読みやすさを重視**する
- 適切な箇所で改行する
- インデントを正しく使用する

**良い例**:

```javascript
const button = document.querySelector(".js-addButton-stepFirst");
button.addEventListener("click", function () {
  const result = document.querySelector(".js-resultText-stepFirst");
  result.textContent = "クリックされました";
});
```

**悪い例**:

```javascript
const button = document.querySelector(".js-addButton-stepFirst");
button.addEventListener("click", function () {
  const result = document.querySelector(".js-resultText-stepFirst");
  result.textContent = "クリックされました";
});
```

---

## テーマ設計

### lesson テーマ例

- **lesson1**：変数・データ型・演算子
- **lesson2**：DOM 操作
- **lesson3**：イベント
- **lesson4**：条件分岐
- **lesson5**：ループ
- **lesson6**：配列
- **lesson7**：関数

### テーマの順序

- 前の lesson で学んだ内容を前提としてよい
- 新しい概念は 1 つずつ導入
- 段階的に複雑さを増していく

### lesson テーマカラー一覧

各 lesson のテーマカラーは `lessonN/assets/css/base.css` に定義する。

| lesson  | テーマ         | メインカラー | カラー系統         |
| ------- | -------------- | ------------ | ------------------ |
| lesson1 | 変数・データ型 | `#64e2b7`    | 緑系               |
| lesson2 | DOM 操作       | `#c1a3e8`    | 紫系               |
| lesson3 | イベント       | （未定）     | 水色系             |
| lesson4 | 条件分岐       | （未定）     | オレンジ系         |
| lesson5 | ループ         | （未定）     | ピンク系           |
| lesson6 | 配列           | （未定）     | 青系（グレー寄り） |
| lesson7 | 関数           | （未定）     | 肌色系             |

**注意**: 各 lesson は視覚的に区別できるよう、異なる色系統を使用すること。

---

## 品質チェック項目

### 作成後の確認事項

- [ ] ディレクトリ構造は正しいか
- [ ] 指定された Step 数が揃っているか（最後の Step は総合演習）
- [ ] 課題番号は命名規則通りか（L[N]-S[N]-[N]）
- [ ] Step 番号の英語表記が正しいか（stepFirst, stepSecond...）
- [ ] **`.js-` で始まるクラス名がページ内で重複していないか【重要】**
- [ ] クラス名はキャメルケースで2単語までになっているか
- [ ] すべての課題対象要素に Step 番号を含むクラス名が付いているか
- [ ] CSS クラス名が FLOCSS と BEM に準拠しているか
- [ ] HTML の head 内で CSS/JS の読み込み順序が正しいか
- [ ] curriculum.js に提出コメントがあるか
- [ ] 各課題に「ここにコードを書いてください。」があるか
- [ ] HTML の要素に適切なクラス名・id が付いているか
- [ ] script.js に QUIZ_ANSWERS と BLANK_ANSWERS が定義されているか
- [ ] base.css にテーマカラーが定義されているか
- [ ] 初期状態でエラーが出ないか
- [ ] **ライブデモエリアが用意されているか【重要】**
- [ ] ライブデモエリアで様々なバリエーションのUI要素が用意されているか
- [ ] 勝手に新しい素材を作成していないか（既存要素を活用しているか）
- [ ] 出力予想タブの問題文が「コンソールに表示される...」または「ブラウザに表示される...」の形式か
- [ ] 提出課題は画面に処理結果を表示する内容になっているか
- [ ] 課題の指示が明確で理解しやすいか（メソッド名を書いていないか）
- [ ] **問題文内のクォートが正しいか（クラス名/id名はシングル、文字列はダブル）【重要】**
- [ ] DOM取得はできるだけquerySelectorを使用しているか
- [ ] 変数名やクラス名が意味のある名前か
- [ ] サンプルコードが動作するか
- [ ] コードブロックは読みやすく適切に改行されているか
- [ ] 難易度が適切か（易しすぎず、難しすぎず）
- [ ] 各タブの問題数が適切か（最後の Step を除く各 Step は 2 問ずつ）

### レビュー観点

- 初学者が一人で理解できる内容か
- 社会人が共感できるシナリオか
- 前の lesson との整合性はあるか
- 次の lesson への橋渡しができているか

---

## その他ルール

### ファイルの文字コード

- **UTF-8** を使用

### 改行コード

- **LF**（Unix）を推奨

### インデント

- スペース（2 or 4）で統一
- タブは使用しない

### コメントの言語

- 日本語で記載
- わかりやすく丁寧に

---

## 更新履歴

### 大きな変更の記録方法

- 変更日時と変更内容を記録する
- 変更対象の lesson / Step を明記する
- 影響範囲を明確にする

### 記録例

```markdown
## 更新履歴

### 2025-01-01

- **対象**: 全 lesson
- **変更内容**: common/assets/js/config.js にタブ切り替え機能を追加
- **影響範囲**: すべての lesson でタブ UI が動作するようになった

### 2024-12-15

- **対象**: lesson1 / Step3
- **変更内容**: 課題文をメソッド名を含まない形式に変更
- **影響範囲**: lesson1 の Step3 の提出課題タブ
```

---
