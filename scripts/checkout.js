import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts , loadProductsFetch } from '../data/products.js';
import {renderCheckoutHeader} from '../scripts/checkout/checkoutHeader.js';
import {loadCart, loadCartFetch} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

renderCheckoutHeader();

async function loadPage(){
 try  {
  //throw 'error1';
  await Promise.all([
    loadProductsFetch(),
    loadCartFetch()
  ]);

 } catch (error) {
  console.log('Unexpected Error Occurred!!! Please try again later.'); 
 }

renderOrderSummary();
renderPaymentSummary();

}
loadPage();


// Promise.all([
//   await loadProductsFetch(),
//   await new Promise((resolve)=>{
//     loadCart(() => {
//       resolve();
//     });  
//   }),


//   renderOrderSummary(),
//   renderPaymentSummary()
// ]);

/*
new Promise((resolve) => {
  loadProducts(()=>{
    resolve();
  });

}).then(()=>{
  return new Promise((resolve)=>{
    loadCart(() => {
      resolve();
    });  
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})*/



// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });


