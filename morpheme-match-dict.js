module.exports = [
  {
    message:
      "格助詞の「で」の使用はやめてください．参考: https://scrapbox.io/iplab-tsukuba/%E3%81%A7",
    tokens: [
      {
        surface_form: "で",
        pos: "助詞",
        pos_detail_1: "格助詞",
        pos_detail_2: "一般",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "で",
        reading: "デ",
        pronunciation: "デ",
      },
    ],
  },
  {
    message: "助動詞の「だ」は．使わないでください．修正例: 「である」",
    tokens: [
      {
        surface_form: "だ",
        pos: "助動詞",
        pos_detail_1: "*",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "特殊・ダ",
        conjugated_form: "基本形",
        basic_form: "だ",
        reading: "ダ",
        pronunciation: "ダ",
      },
    ],
  },
  {
    message: "並立助詞の「や」は．使わないでください．",
    tokens: [
      {
        surface_form: "や",
        pos: "助詞",
        pos_detail_1: "並立助詞",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "や",
        reading: "ヤ",
        pronunciation: "ヤ",
      },
    ],
  },
];
