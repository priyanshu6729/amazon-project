export let cart;

loadFromStorage();

export  function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'))
 || 
    [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1',
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2',
      }
    ];
}


function saveToStore(){
  localStorage.setItem('cart',JSON.
    stringify(cart));
}


export function addToCart(productId){

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);

    let matchingItems;

      cart.forEach((cartItem) => {
        if(productId === cartItem.productId ){
          matchingItems = cartItem;
        }
      });

      if(matchingItems){
        matchingItems.quantity += quantity;
      }
      else{
        cart.push({
          productId,
          quantity,
          deliveryOptionId:'1'
        });
      }

    saveToStore();
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveToStore();
}

export function updateDeliveryOption
(productId, deliveryOptionId) {
  let matchingItems;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItems = cartItem;
    }
  });

  matchingItems.deliveryOptionId = deliveryOptionId;

  saveToStore();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',() => {
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}