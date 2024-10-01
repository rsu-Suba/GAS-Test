let cellnum = 1;

async function fetchData(url, options) {
   try {
      const response = await fetch(url, options);
      const data = await response.json();
      //data.push(await response.json());
      if (options.method == "GET") {
         console.log(data);
         getSort(data);
      }
      document.getElementById("cellform").value = "";
   } catch (error) {
      console.error("Error:", error);
   }
}

function get() {
   document.getElementById("gettxt").textContent = "Load...";
   const options = {
      method: "GET",
   };
   const url = `https://script.google.com/macros/s/AKfycbxrHb3CB2P2fhTsF6YtCggz8pKiu9bJ1NFPF7i6yZ8YGgpt9Djx00G7c3_5pfA-uvqO/exec?sheetName=sheet1`;
   fetchData(url, options);
}

function post() {
   const url =
      "https://script.google.com/macros/s/AKfycbxrHb3CB2P2fhTsF6YtCggz8pKiu9bJ1NFPF7i6yZ8YGgpt9Djx00G7c3_5pfA-uvqO/exec";
   const options = {
      method: "POST",
      body: JSON.stringify({
         sheet: "sheet1",
         date: document.getElementById("form").postdate.value,
         time: document.getElementById("form").posttime.value,
         value: document.getElementById("form").postval.value,
      }),
   };
   document.getElementById("form").postval.value = "";
   document.getElementById("form").posttime.value = "";
   document.getElementById("form").postdate.value = "";
   fetchData(url, options);
}

function getSort(datejson) {
   let nums = [];
   let dates = [];
   let values = [];
   let sortDates = datejson.date.filter(function (x, i, self) {
      return self.indexOf(x) === i;
   });
   for (let i = 0; i < sortDates.length; i++) {
      let num = [];
      for (let j = 0; j < datejson.date.length; j++) {
         if (datejson.date[j] === sortDates[i]) {
            num.push(j);
         }
      }
      nums.push(num);
   }
   console.log(nums);
   for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        console.log(nums[i][j]);
        value = {
            time: datejson.time[nums[i][j]],
            value: datejson.value[nums[i][j]],
        }
        values.push(value);
    }
    dates.push({
        date: sortDates[i],
        value: values
    });
    values = [];
 }
   console.log(dates);
}
