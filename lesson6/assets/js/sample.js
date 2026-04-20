/**
 * Lesson6: 配列 - 解答例ファイル
 */

// ===================================
// L6-S1-1:
// ===================================
function L6_S1_1() {
  const q1 = document.querySelector("#q1");
  const fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];
  const firstFruit = q1.querySelector(".js-firstFruit-s1");
  firstFruit.textContent = fruits[0];
}
L6_S1_1();

// ===================================
// L6-S1-2:
// ===================================
function L6_S1_2() {
  const q1 = document.querySelector("#q1");
  const fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];
  const fruitCount = q1.querySelector(".js-fruitCount-s1");
  fruitCount.textContent = "全" + fruits.length + "種類";
}
L6_S1_2();

// ===================================
// L6-S2-1:
// ===================================
function L6_S2_1() {
  const q2 = document.querySelector("#q2");
  const list = [];
  const addBtn = q2.querySelector(".js-addBtn-s2");
  const addInput = q2.querySelector(".js-addInput-s2");
  const itemList = q2.querySelector(".js-itemList-s2");

  function renderList() {
    itemList.textContent = "";
    list.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      itemList.appendChild(p);
    });
  }

  addBtn.addEventListener("click", () => {
    if (addInput.value) {
      list.push(addInput.value);
      addInput.value = "";
      renderList();
    }
  });

  window._s2List = list;
  window._s2Render = renderList;
}
L6_S2_1();

// ===================================
// L6-S2-2:
// ===================================
function L6_S2_2() {
  const q2 = document.querySelector("#q2");
  const removeBtn = q2.querySelector(".js-removeBtn-s2");

  removeBtn.addEventListener("click", () => {
    if (window._s2List && window._s2List.length > 0) {
      window._s2List.pop();
      window._s2Render();
    }
  });
}
L6_S2_2();

// ===================================
// L6-S3-1:
// ===================================
function L6_S3_1() {
  const q3 = document.querySelector("#q3");
  const weekdays = ["月曜", "火曜", "水曜", "木曜", "金曜"];
  const spliceList = q3.querySelector(".js-spliceList-s3");
  const deleteBtn = q3.querySelector(".js-deleteBtn-s3");
  const deleteIndex = q3.querySelector(".js-deleteIndex-s3");

  function renderSpliceList() {
    spliceList.textContent = "";
    weekdays.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      spliceList.appendChild(p);
    });
  }

  renderSpliceList();

  deleteBtn.addEventListener("click", () => {
    const idx = parseInt(deleteIndex.value);
    if (!isNaN(idx) && idx >= 0 && idx < weekdays.length) {
      weekdays.splice(idx, 1);
      renderSpliceList();
    }
  });

  window._s3Days = weekdays;
  window._s3Render = renderSpliceList;
}
L6_S3_1();

// ===================================
// L6-S3-2:
// ===================================
function L6_S3_2() {
  const q3 = document.querySelector("#q3");
  const insertBtn = q3.querySelector(".js-insertBtn-s3");
  const insertIndex = q3.querySelector(".js-insertIndex-s3");
  const insertInput = q3.querySelector(".js-insertInput-s3");

  insertBtn.addEventListener("click", () => {
    const idx = parseInt(insertIndex.value);
    const val = insertInput.value;
    if (!isNaN(idx) && val && window._s3Days) {
      window._s3Days.splice(idx, 0, val);
      insertInput.value = "";
      window._s3Render();
    }
  });
}
L6_S3_2();

// ===================================
// L6-S4-1:
// ===================================
function L6_S4_1() {
  const q4 = document.querySelector("#q4");
  const members = ["山田", "田中", "鈴木", "佐藤", "高橋"];
  const loopBtn = q4.querySelector(".js-loopBtn-s4");
  const loopResult = q4.querySelector(".js-loopResult-s4");

  loopBtn.addEventListener("click", () => {
    loopResult.textContent = "";
    for (let i = 0; i < members.length; i++) {
      const p = document.createElement("p");
      p.textContent = members[i];
      loopResult.appendChild(p);
    }
  });
}
L6_S4_1();

// ===================================
// L6-S4-2:
// ===================================
function L6_S4_2() {
  const q4 = document.querySelector("#q4");
  const members = ["山田", "田中", "鈴木", "佐藤", "高橋"];
  const forEachBtn = q4.querySelector(".js-forEachBtn-s4");
  const forEachResult = q4.querySelector(".js-forEachResult-s4");

  forEachBtn.addEventListener("click", () => {
    forEachResult.textContent = "";
    members.forEach((member) => {
      const p = document.createElement("p");
      p.textContent = member + "：" + member.length + "文字";
      forEachResult.appendChild(p);
    });
  });
}
L6_S4_2();

// ===================================
// L6-S5-1:
// ===================================
function L6_S5_1() {
  const q5 = document.querySelector("#q5");
  const vegetables = ["キャベツ", "にんじん", "たまねぎ", "じゃがいも", "ほうれん草"];
  const searchBtn = q5.querySelector(".js-searchBtn-s5");
  const searchInput = q5.querySelector(".js-searchInput-s5");
  const searchResult = q5.querySelector(".js-searchResult-s5");

  searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value;
    if (vegetables.includes(keyword)) {
      searchResult.textContent = "含まれています";
    } else {
      searchResult.textContent = "含まれていません";
    }
  });
}
L6_S5_1();

// ===================================
// L6-S5-2:
// ===================================
function L6_S5_2() {
  const q5 = document.querySelector("#q5");
  const products = [
    { name: "ノートPC", price: 89000 },
    { name: "マウス", price: 2500 },
    { name: "キーボード", price: 8000 },
    { name: "ケーブル", price: 800 },
    { name: "モニター", price: 45000 },
  ];
  const filterBtn = q5.querySelector(".js-filterBtn-s5");
  const filterResult = q5.querySelector(".js-filterResult-s5");

  filterBtn.addEventListener("click", () => {
    filterResult.textContent = "";
    const expensive = products.filter((product) => product.price >= 1000);
    expensive.forEach((product) => {
      const p = document.createElement("p");
      p.textContent = product.name;
      filterResult.appendChild(p);
    });
  });
}
L6_S5_2();

// ===================================
// L6-S6-1:
// ===================================
function L6_S6_1() {
  const q6 = document.querySelector("#q6");
  const goods = [
    { name: "コーヒー", price: 500 },
    { name: "サンドイッチ", price: 650 },
    { name: "サラダ", price: 480 },
  ];
  const mapBtn = q6.querySelector(".js-mapBtn-s6");
  const mapResult = q6.querySelector(".js-mapResult-s6");

  mapBtn.addEventListener("click", () => {
    mapResult.textContent = "";
    const taxed = goods.map((item) => ({
      name: item.name,
      price: Math.round(item.price * 1.1),
    }));
    taxed.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item.name + "：" + item.price + "円";
      mapResult.appendChild(p);
    });
  });
}
L6_S6_1();

// ===================================
// L6-S6-2:
// ===================================
function L6_S6_2() {
  const q6 = document.querySelector("#q6");
  const tasks = ["資料作成", "メール返信", "打ち合わせ", "報告書提出"];
  const labelBtn = q6.querySelector(".js-labelBtn-s6");
  const labelResult = q6.querySelector(".js-labelResult-s6");

  labelBtn.addEventListener("click", () => {
    labelResult.textContent = "";
    const labeled = tasks.map((task) => "【完了】" + task);
    labeled.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      labelResult.appendChild(p);
    });
  });
}
L6_S6_2();

// ===================================
// L6-S7-1:
// ===================================
function L6_S7_1() {
  const q7 = document.querySelector("#q7");
  const breadcrumb = ["ホーム", "カテゴリ", "商品一覧", "商品詳細"];
  const joinBtn = q7.querySelector(".js-joinBtn-s7");
  const joinResult = q7.querySelector(".js-joinResult-s7");

  joinBtn.addEventListener("click", () => {
    joinResult.textContent = breadcrumb.join(" / ");
  });
}
L6_S7_1();

// ===================================
// L6-S7-2:
// ===================================
function L6_S7_2() {
  const q7 = document.querySelector("#q7");
  const splitBtn = q7.querySelector(".js-splitBtn-s7");
  const splitInput = q7.querySelector(".js-splitInput-s7");
  const splitResult = q7.querySelector(".js-splitResult-s7");

  splitBtn.addEventListener("click", () => {
    splitResult.textContent = "";
    const items = splitInput.value.split(",");
    items.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item.trim();
      splitResult.appendChild(p);
    });
  });
}
L6_S7_2();

// ===================================
// L6-S8-1:
// ===================================
function L6_S8_1() {
  const q8_1 = document.querySelector("#q8_1");
  let cart = ["ノートPC", "マウス"];
  const cartInput = q8_1.querySelector(".js-cartInput-s8");
  const addCartBtn = q8_1.querySelector(".js-addCartBtn-s8");
  const removeCartBtn = q8_1.querySelector(".js-removeCartBtn-s8");
  const cartList = q8_1.querySelector(".js-cartList-s8");
  const cartCount = q8_1.querySelector(".js-cartCount-s8");

  function renderCart() {
    cartList.textContent = "";
    cart.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      cartList.appendChild(p);
    });
    cartCount.textContent = cart.length + "点";
  }

  renderCart();

  addCartBtn.addEventListener("click", () => {
    if (cartInput.value) {
      cart.push(cartInput.value);
      cartInput.value = "";
      renderCart();
    }
  });

  removeCartBtn.addEventListener("click", () => {
    if (cart.length > 0) {
      cart.pop();
      renderCart();
    }
  });
}
L6_S8_1();

// ===================================
// L6-S8-2:
// ===================================
function L6_S8_2() {
  const q8_2 = document.querySelector("#q8_2");
  const products = ["ノートPC", "マウス", "キーボード", "モニター", "スピーカー", "ウェブカメラ", "USBハブ"];
  const keywordBtn = q8_2.querySelector(".js-keywordBtn-s8");
  const keywordInput = q8_2.querySelector(".js-keywordInput-s8");
  const keywordResult = q8_2.querySelector(".js-keywordResult-s8");

  keywordBtn.addEventListener("click", () => {
    if (products.includes(keywordInput.value)) {
      keywordResult.textContent = "見つかりました";
    } else {
      keywordResult.textContent = "該当なし";
    }
  });
}
L6_S8_2();

// ===================================
// L6-S8-3:
// ===================================
function L6_S8_3() {
  const q8_3 = document.querySelector("#q8_3");
  const items = [
    { name: "ノートPC", price: 89000 },
    { name: "マウス", price: 2500 },
    { name: "キーボード", price: 8000 },
    { name: "モニター", price: 45000 },
    { name: "スピーカー", price: 12000 },
  ];
  const calcBtn = q8_3.querySelector(".js-calcBtn-s8");
  const totalPrice = q8_3.querySelector(".js-totalPrice-s8");
  const maxPrice = q8_3.querySelector(".js-maxPrice-s8");

  calcBtn.addEventListener("click", () => {
    let total = 0;
    let maxItem = items[0];
    items.forEach((item) => {
      total += item.price;
      if (item.price > maxItem.price) {
        maxItem = item;
      }
    });
    totalPrice.textContent = "合計：" + total + "円";
    maxPrice.textContent = "最高額：" + maxItem.name + "（" + maxItem.price + "円）";
  });
}
L6_S8_3();

// ===================================
// L6-S8-4:
// ===================================
function L6_S8_4() {
  const q8_4 = document.querySelector("#q8_4");
  let tags = [];
  const tagInput = q8_4.querySelector(".js-tagInput-s8");
  const addTagBtn = q8_4.querySelector(".js-addTagBtn-s8");
  const tagMessage = q8_4.querySelector(".js-tagMessage-s8");
  const tagList = q8_4.querySelector(".js-tagList-s8");

  addTagBtn.addEventListener("click", () => {
    const newTag = tagInput.value.trim();
    if (!newTag) return;

    if (tags.includes(newTag)) {
      tagMessage.textContent = "すでに追加されています";
      return;
    }

    tags.push(newTag);
    tagMessage.textContent = "";
    tagInput.value = "";
    tagList.textContent = tags.join("　#");
  });
}
L6_S8_4();
