const goods = [
    {
      "name": "Sport Shoes",
      "description": "Comfortable running shoes with breathable material",
      "price": 75.99,
      "discount": 0.1,
      "sizes": [38, 39, 40, 41, 42, 43, 44, 45],
      "colors": ["black", "white", "blue", "red"]
    },
    {
      "name": "Casual T-Shirt",
      "description": "Cotton T-shirt with round neck and short sleeves",
      "price": 19.99,
      "discount": 0.2,
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "colors": ["white", "grey", "blue", "green"]
    },
    {
      "name": "Leather Jacket",
      "description": "Stylish leather jacket with zip closure",
      "price": 129.99,
      "discount": 0.15,
      "sizes": ["M", "L", "XL", "XXL"],
      "colors": ["black", "brown"]
    },
    {
      "name": "Jeans",
      "description": "Slim fit denim jeans with stretch fabric",
      "price": 49.99,
      "discount": 0.25,
      "sizes": [28, 30, 32, 34, 36, 38],
      "colors": ["blue", "black", "grey"]
    },
    {
      "name": "Summer Dress",
      "description": "Lightweight summer dress with floral print",
      "price": 39.99,
      "discount": 0.2,
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["red", "yellow", "blue", "white"]
    },
    {
      "name": "Wristwatch",
      "description": "Water-resistant wristwatch with leather strap",
      "price": 89.99,
      "discount": 0.05,
      "sizes": [],
      "colors": ["black", "brown", "blue"]
    },
    {
      "name": "Backpack",
      "description": "Durable backpack with multiple compartments",
      "price": 59.99,
      "discount": 0.1,
      "sizes": [],
      "colors": ["black", "grey", "green", "red"]
    },
    {
      "name": "Sunglasses",
      "description": "UV-protected sunglasses with polarized lenses",
      "price": 29.99,
      "discount": 0.3,
      "sizes": [],
      "colors": ["black", "brown", "blue"]
    }
  ]

// 1
let goodsNames = [];
goods.forEach(item => {
    goodsNames.push(item.name);
});
console.log(goodsNames);
console.log("\n=============================\n");

// 2
let pricesWithDiscount = [];
goods.forEach(item => {
  pricesWithDiscount.push(`${item.name} - ${Math.round((item.price - (item.price * item.discount)) * 100) / 100}`);
});
console.log(pricesWithDiscount);
console.log("\n=============================\n");

// 3
let unicSizes = [];
let notUnicSizes = [];
let unicColors = [];
let notUnicColors = [];
goods.forEach(item => {
    item.sizes.forEach(size => {
        if(!unicSizes.includes(size)){
            unicSizes.push(size);
        }else if(!notUnicSizes.includes(size)){
            notUnicSizes.push(size);
        }
    });
    item.colors.forEach(color => {
        if(!unicColors.includes(color)){
            unicColors.push(color);
        }else if(!notUnicColors.includes(color)){
            notUnicColors.push(color);
        }
    });
});
notUnicSizes.forEach(notUnicSize => {
    unicSizes.splice(unicSizes.indexOf(notUnicSize), 1);
});
notUnicColors.forEach(notUnicColor => {
    unicColors.splice(unicColors.indexOf(notUnicColor), 1);
});
console.log(unicSizes);
console.log(unicColors);
console.log("\n=============================\n");

// 4
let goodsWithoutSize = [];
goods.forEach(item => {
    if(item.sizes.length == 0){
        goodsWithoutSize.push(item.name);
        //goodsWithoutSize.push(item);
    }
});
console.log(goodsWithoutSize);
console.log("\n=============================\n");

// 5
let goodsWithBlack = [];
goods.forEach(item => {
    if(item.colors.includes("black")){
        goodsWithBlack.push(item.name);
        //goodsWithBlack.push(item);
    }
});
console.log(goodsWithBlack);
console.log("\n=============================\n");

// 6
let goodsSortByPrice = [];
goods.forEach(item => {
    if(item.price > 50){
        goodsSortByPrice.push(item.name);
        //goodsSortByPrice.push(item);
    }
});
console.log(goodsSortByPrice);
