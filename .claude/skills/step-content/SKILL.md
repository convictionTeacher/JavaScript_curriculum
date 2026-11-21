---
name: step-content
description: JSカリキュラムの各Stepの中身（説明セクション・出力予想タブ・コード補完タブ・提出課題タブ・総合演習）を作る、または直すときに使う。各タブのルールとHTML構造を定める。
---

# 各 Step の中身の作り方

CLAUDE.md の「演習の難易度の段階」「課題文の記載ルール」と合わせて守ること。題材は Skill `practical-examples` を参照する。

#### 3. 出力予想タブ

- 結果を考えさせる
- 使用する関数や演算子は含めない
- いきなりでわかりづらい場合は.c-tab.-pointを使用する
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
    <div class="js-xxx-s1"></div>
    <!-- 課題2用の要素 -->
    <div class="js-yyy-s1"></div>
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
            <!-- デモ用 -->
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
          <!-- デモエリア -->
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
//
// ===================================
// L5-S8-2: 課題タイトル
// ===================================
// 課題: 詳細な課題説明。
```
