let cartIcon = document.getElementById("nav__cart");
console.log(cartIcon);

let cartSections = document.getElementById("cart__section");
console.log(cartSections);

// const cartContainer = document.querySelector(".cart__container");
// console.log(cartContainer);

// const subTotal = document.querySelector(".subtotals")


const cartButton = document.querySelectorAll(".black__button");
console.log(cartButton);

const counter = document.querySelector(".count");
console.log(counter);
let cartItems = [];

cartIcon.addEventListener("click", function () {
    // alert("hello")
    cartSections.classList.toggle("shop__cart");
});

function updateCartItems() {
    cartSections.innerHTML="";
    cartItems.map((pizzaItem) => {

        let cartProduct = document.createElement("div");
        cartProduct.classList.add("product");
      cartProduct.innerHTML = 
      `<div class="javascript__content">
      <img src="${pizzaItem.image}" width="100px">
          <h2> ${pizzaItem.name}</h2>
          <p> ${pizzaItem.price}</p>
          <div class="js__input__btn">
          <button class="decrement">-</button>
          <h4>1</h4>
          <button class="increment">+</button>
          </div>
          <p class="price">${pizzaItem.price}</p>
</div>

          `
         

          ;
          console.log(cartProduct);
          cartSections.append(cartProduct);
    });

    let subCart = document.createElement("div");
    // subcart.classList.add("total");
    subCart.innerHTML = `<div class="second">
    <h2>Total amount</h2>
    <p class="subtotal"></p>
    </div>`;
    cartSections.append(subCart);
updatePrices();
getSubTotals();

subCart.classList.contains(".second");
  }


for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function (e) {
    // alert ('hello')
    

    const pizzaImage =
      e.target.parentElement.parentElement.children[0].children[0].src;
    const pizzaName =
      e.target.parentElement.parentElement.children[1].children[0].textContent;
    const pizzaPrice =
      e.target.parentElement.parentElement.children[1].children[2].textContent.replace('Ksh.', '' );
    console.log(pizzaName);
    if (e.target.textContent.toLowerCase() === "add to cart") {
      // counter.textContent = Number(counter.textContent)+1;
      let pizzaItem = {
        image: pizzaImage,
        name: pizzaName,
        price: pizzaPrice,
      };
      console.log(e);

      cartItems.push(pizzaItem);
      counter.textContent = cartItems.length;
      console.log(cartItems);

      console.log(pizzaItem);

      // pizzaItem.image =e.target.parentElement.parentElement.children[3].textContent;
      e.target.textContent = "remove from cart";
      e.target.style.background = "red";
      updateCartItems();
      
    } else {
      // counter.textContent = Number(counter.textContent)-1;
      e.target.textContent = "add to cart";
      e.target.style.background = "black";
      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaName
      );
      console.log(indexToRemove);
      cartItems.splice(indexToRemove, 1);
      counter.textContent = cartItems.length;
      updateCartItems();
      
    }
    // counter.textContent = cartItems.length;

    //   cartItems.splice(indexToRemove, pizzaItems);
  });
}

cartSections.addEventListener("click", function(e){
  // alert(hello)
  if(e.target.classList.contains("increment")){
    const currentQuantity = e.target.previousElementSibling;

    currentQuantity.textContent++;

    console.log("adding items ");
    updatePrices();
    getSubTotals();
  }else if(e.target.classList.contains("decrement")){
    const currentQuantity = e.target.nextElementSibling;
    if(currentQuantity.textContent>1){
    currentQuantity.textContent--;
    }
    console.log("remove items");
    updatePrices()
    getSubTotals();
  }
})

function updatePrices(){
  let productItems = document.querySelectorAll(".product");
  console.log(productItems);
  for(i=0; i<productItems.length; i++){
let cartItemProduct = productItems[i];
const itemName = cartItemProduct.querySelector("h2");
const itemPrice = parseInt(itemName.nextElementSibling.textContent);
const itemQuantity = parseInt(itemName.nextElementSibling.nextElementSibling.children[1].textContent);
const productTotal = itemPrice * itemQuantity;
const totals = itemName.nextElementSibling.nextElementSibling.nextElementSibling;
totals.textContent = productTotal;
// console.log(totals);


  }

}
// updatePrices();
// getSubTotals();


function getSubTotals(){
  let subCounts =document.querySelectorAll(".price");
let subTotal = document.querySelector(".subtotal");
let subTotals =0;
  for(let i = 0; i<subCounts.length; i++){
 subTotals += parseInt(subCounts[i].textContent);
  }
  subTotal.textContent =subTotals;
  console.log(subTotals);
}

// end of add to cart
