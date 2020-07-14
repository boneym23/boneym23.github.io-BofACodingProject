"use strict"

let groceries = {};

let showGroceryList = function(){
    //defining grocerieslist to map through groceries object
    let groceriesList = groceries.map((grocery) => {

        let category = grocery.category.toUpperCase();
        let item = grocery.item;
        let brand = grocery.brand;
        let type = grocery.type;
        let qty = grocery.qty;

        //creating the div from iterated values

        return `
        <div class = "wrapper">
            <div tabindex=0 aria-label=" This item is ${item} from category ${category}. ${type} from ${brand}. Total quantity ${qty}" class="card">
                <h2 class= "accent quantity">QTY: ${qty}</h2>
                <div class="item">
                    <h3 class="line">${item}</h3>
                    <p>${brand}` + ` ` + `${type}</p>
                </div>
                <h4 class= "accent category">${category}</h4>
            </div>
        </div>
        `
    });

    document.querySelector('.groceryList').innerHTML = groceriesList.join('\n') //joining everything after mapping
}

//Fetching the local .json file

fetch("json/groceries.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
    .then(results => results.json())
    .then(data => {
        groceries = data;  //storing fetched data in local variable
        showGroceryList();
    });