---
name: lesson-files
description: JSカリキュラムのlessonを新規作成・修正するとき、またはcommon/やlessonN/内のファイル（index.html・base.css・style.css・script.js・curriculum.js・sample.js・config.js）を編集するときに使う。各ファイルの役割と必須の記述形式を定める。
---

# ファイルごとの役割と記述形式

CLAUDE.md の「Lesson 共通仕様」「ディレクトリ構造」と合わせて守ること。lesson4 以降は lesson3 を複製して作る。

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
  - 指定された数の Step を含める（Step 数は現状から増やさない）
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
      // Step1の問題1（s1 の 1問目）
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
  //
  // L1-S1-2:
  // ①手順が複数ある場合は、行頭に①②…と番号を振る。
  // ②複数行の場合は改行して記載する。
  // ===================================
  function L1_S1() {}
  L1_S1();

  // ===================================
  // L1-S8-1:（最後の Step＝総合演習は課題ごとに関数を分ける）
  // 課題の説明文を断定形で記載する。
  // ===================================
  function L1_S8_1() {}
  L1_S8_1();
  ```

- **記述ルール**:
  - 通常の Step は Step ごとに 1 つの関数にまとめる（`function LX_SY() {}`）。同じ Step の課題は 1 つの区切り線の中に `//` の空行をはさんで並べる
  - 最後の Step（総合演習）は課題ごとに関数を分ける（`function LX_SY_Z() {}`）
  - 関数定義の直後に呼び出し（`LX_SY();`）を書く
  - 課題番号の形式: `// LX-SY-Z:` (コロン必須)
  - 区切り線: `// ===` で関数ごとに囲む
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
