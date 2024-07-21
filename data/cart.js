export const cart = [];


export function addToCart(productId){

  let matchingItems;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId ){
        matchingItems = cartItem;
      }
    });
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);

    if(matchingItems){
      matchingItems.quantity += quantity;
    }
    else{
      cart.push({
        productId,
        quantity
      });
    }
}