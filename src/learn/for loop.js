// #048 - Loop - For =============================================
/* 

for ( [1] [2] [3] ){
    // Block of code
}

1. Start
2. Condation
3. Action after code
 */

for ( let i = 0 ;i < 10 ; i++) {
    console.log(i)
}

let myFriends = ["Ahmed","Omar","Osama"];
let mylist = [1,2,"Ahmed","Omar",2,342.3,"Osama"];
let myNames = [];

for (let i = 0; i  < myFriends.length; i++){
console.log(myFriends[i]);
}

for (let i = 0; i < mylist.length ; i++ ){
    if (typeof mylist[i] === 'string'){
        myNames.push(mylist[i]);
    }

}
console.log(myNames);

// Break , Continue, Label (Main,Nested => break nestedLoop , break mainLoop)
let products = ["keyboard","Mouse",1,2,3,4,"Pen",5,6,"Pad","Monitor"];
let colors   = ["Red","Green","Blue"];
let models   = [2021,2022];

for (let i = 0 ; i < products.length; i ++){
    console.log("##########");
    if (products[i] === 6){
        break
    }
    if (typeof products[i] ==="number"){
        continue;
    }
    console.log(`Product: ${products[i]}`);
    console.log("Colors:")
    for (let l = 0 ; l < colors.length ; l++ ){
        console.log(` - ${colors[l]}`);
    }
    console.log("Models:")
    for (let m = 0 ; m <models.length; m++){
        console.log(` -- ${models[m]}`);
    }
}

// Advanced Example | for(;;){}
let productsNew = ["keyboard","Mouse","Pen","Pad","Monitor","iphone"];
let x = 0;
for(;;){
    console.log(productsNew[x]);
    x += 2;
    if (x === productsNew.length) break;
}

// Products Practice

let showProduct = ["keyboard","Mouse","Pen","Pad","Monitor","iphone"];
let showColors  = ["Red","Green","Blue"];
let showCount   = 3;

document.write(`<h1>Show ${showCount} Products </h1>`);

for (let i = 0 ; i < showCount ; i++){
    document.write(`<h3>[${i+1}] ${showProduct[i]}</h3>`)
    for (let y = 0 ; y < showColors.length; y++){
        // document.write(`<h5> ${showColors[y]}</h5>`)
    }
    document.write(showColors.join(" | "))
}

// While Loop #054
console.log("========== While Loop ==========")

let whileProduct = ["keyboard","Mouse","Pen","Pad","Monitor","iphone"];

let index = 0;

while (index < whileProduct.length){
    console.log(whileProduct[index]);
    index++;
    if (index === 4){
        break;
    }
}

// While Loop #055
console.log("========== Do While ==========")
/*
do {

} while (){

}
*/
