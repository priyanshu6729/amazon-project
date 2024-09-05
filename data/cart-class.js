class Cart{
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage = function(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

   if(!this.cartItems){
    this.cartItems=
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
      
  }

  saveToStore(){
    localStorage.setItem(this.#localStorageKey,JSON.
      stringify(this.cartItems));
  }

  addToCart(productId){
 
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);
  
      let matchingItems;
  
        this.cartItems.forEach((cartItem) => {
          if(productId === cartItem.productId ){
            matchingItems = cartItem;
          }
        });
  
        if(matchingItems){
          matchingItems.quantity += quantity;
        }
        else{
          this.cartItems.push({
            productId,
            quantity,
            deliveryOptionId:'1'
          });
        }
  
      this.saveToStore();
  }

  removeFromCart(productId){
    const newCart = [];
  
    this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
  
    this.cartItems = newCart;
  
    this.saveToStore();
  }

  updateDeliveryOption
 (productId, deliveryOptionId) {
   let matchingItems;
 
   this.cartItems.forEach((cartItem) => {
     if(productId === cartItem.productId){
       matchingItems = cartItem;
     }
   });
 
   matchingItems.deliveryOptionId = deliveryOptionId;
 
   this.saveToStore();
  }


}



const cart = new Cart();
const businessCart = new Cart();

console.log(businessCart instanceof Cart);

console.log(cart);
console.log(businessCart);

