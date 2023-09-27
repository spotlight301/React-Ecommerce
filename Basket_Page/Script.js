import {ItemsData} from './menuData.js';
console.log(ItemsData);
function displayItems() {
    var mobile = document.getElementById('mobile');
    var laptop = document.getElementById('laptop');
    var clothes = document.getElementById('clothes');

    const mobileData = ItemsData.filter(item => item.category == 'mobile');
    console.log(mobileData);

    const laptopData = ItemsData.filter(item => item.category == 'laptop');
    console.log(laptopData);

    const clothesData = ItemsData.filter(item => item.category == 'clothes');
    console.log(clothesData);

    mobileData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa-regular fa-heart add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemBrand = document.createElement('p');
        itemBrand.setAttribute('id', 'item-brand');
        itemBrand.innerText ='Brand : '+ item.brand;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemBrand)
        itemCard.appendChild(itemPrice)

        mobile.appendChild(itemCard);


    })


    laptopData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa-regular fa-heart add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemBrand = document.createElement('p');
        itemBrand.setAttribute('id', 'item-brand');
        itemBrand.innerText ='Brand : '+ item.brand;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemBrand)
        itemCard.appendChild(itemPrice)

        laptop.appendChild(itemCard);


    })


    clothesData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa-regular fa-heart add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemBrand = document.createElement('p');
        itemBrand.setAttribute('id', 'item-brand');
        itemBrand.innerText ='Brand : '+ item.brand;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = ' Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemBrand)
        itemCard.appendChild(itemPrice)
        clothes.appendChild(itemCard);


    })
}
displayItems();
const categoryListData = [...new Map(ItemsData.map(item => [item['category'], item])).values()];
console.log(categoryListData);

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart);

});
var cartData = [];
function addToCart() {

    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = ItemsData.find(element => element.name == itemToAdd);
    console.log(itemObj);
    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
        console.log(cartData)
    }
    else if (index > -1) {
        alert('added to cart');
        document.getElementById('cart-plus').innerText = '' + cartData.length;
    }
    document.getElementById('cart-plus').innerText = '' + cartData.length ;

    totalAmount();
    cartItems();

}
function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    cartData.map(item => {
        var tableRow = document.createElement('tr');
        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        

        var rowData3 = document.createElement('td');

        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerHTML = '-';
        var span = document.createElement('span');
        span.innerHTML = item.quantity;

        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerHTML = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.brand;

        var rowData5 = document.createElement('td');
        rowData5.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
        tableRow.appendChild(rowData5);

        tableBody.appendChild(tableRow);

    })
  
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem);
    });

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem);
      
    });
}
var currPrice = 0;
function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);
    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity += 1;
    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1) )/ (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;
    totalAmount();
    cartItems();
}
var flag = false;
function decrementItem() {
    let itemToDec = this.parentNode.previousSibling.innerText;
    console.log(itemToDec );
    let decObj = cartData.find(element => element.name == itemToDec);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj.price* (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price=currPrice*decObj.quantity;
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length ;


        if (cartData.length < 1 && flag) {
            document.getElementById('items').classList.toggle('items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item i cart");
        }
    }
    totalAmount();
    cartItems();
}
function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-price').innerText = 'Total Price :' + sum;
}
var flag = false;
document.getElementById('cart-plus').addEventListener('click', cartToggle);
function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('items').classList.toggle('items');
        // document.getElementById('category-list').classList.toggle('items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else {
        alert("Currently no items in cart");
    }

}