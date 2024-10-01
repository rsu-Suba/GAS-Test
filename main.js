async function fetchData(url, options) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("ready");
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function get() {
    // GASのurlにクエリパラメータ（?sheetName=シート名&cell=セル名）を付ける
const url =
"https://script.google.com/macros/s/AKfycbxrHb3CB2P2fhTsF6YtCggz8pKiu9bJ1NFPF7i6yZ8YGgpt9Djx00G7c3_5pfA-uvqO/exec?sheetName=sheet1&cell=B3";
const options = {
method: "GET",
headers: {
  "Content-Type": "application/json",
},
};
fetchData(url, options);

  }

  function post() {
    // GASのurl
const url = "https://script.google.com/macros/s/AKfycbxrHb3CB2P2fhTsF6YtCggz8pKiu9bJ1NFPF7i6yZ8YGgpt9Djx00G7c3_5pfA-uvqO/exec";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    sheet: "sheet1",
    cell: "a4",
    value: "値",
  }),
};
fetchData(url, options);

  }