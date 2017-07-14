// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1() {
  let total = 0
  for (p in data) {
    (total += data[p].price);
  }
  let avg = total / data.length;
  console.log(avg.toFixed(2));
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let items = []
  for (p in data) {
    if (data[p].price >= 14.00 && data[p].price <= 18.00) {
      items.push(data[p].title);
    }
  }
  console.log(items);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  for (c in data) {
    if (data[c].currency_code === "GBP") {
      console.log(data[c].title, data[c].price, "pounds");
    }
  }
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4() {
  let wooditems = []
  for (w in data) {
    if (data[w].materials) {
      let materials = data[w].materials;
      for (i in materials) {
        if (materials[i] === "wood") {
          wooditems.push(data[w].title);
        }
      }
    }
  }
  console.log(wooditems);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
// function question5 () {
//   data.forEach(function(item){
//     if (item.materials.length >= 8){
//       console.log(item.title + item.materials.length + item.materials.map(function(material){ return material }))
//     }
//
//   })

function question5() {
  data.forEach(function(item) {
    if (item.materials.length > 8) {
      console.log(item.title, item.quantity, item.materials.forEach(function(material) {
        console.log(material)
      }));
    }
  });
  //
  // }
  // for(i in data){
  //   if(data[i].materials){
  //     let materials = data[i].materials;
  //     for(n in materials){
  //       if (materials[n]){
  //         let materialsnumber = materials[n].length;
  //         for(x in materialsnumber){
  //           if(materialsnumber[x] >= 8){
  //             console.log(data[i].title, materials[n].length, materials[n]);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let sellerMade = 0
  data.forEach(function(sellers) {
    if (sellers.who_made === "i_did") {
      sellerMade++
    }

  });
  console.log(sellerMade + " items were made by sellers");
}
