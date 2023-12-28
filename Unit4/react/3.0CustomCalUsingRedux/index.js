import Store  from "./Store.js";
import { reducer } from "./reducer.js";

const store = new Store( {count : 10},reducer);

let counter = document.getElementById("counterValue");
let inc = document.getElementById("incrementValue");
let dec = document.getElementById("decrementValue");
 let x = document.getElementById("xValue");
counter.innerText = store.getState().count;

inc.addEventListener("click", function () {
  store.dispatch({
    type: "INCREMENT",
  });
  counter.innerText = store.getState().count;
});

dec.addEventListener("click", function () {
  store.dispatch({
    type: "DECREMENT",
  });
  counter.innerText = store.getState().count;
});

// let value = 12;
// let add = document.getElementById("addValue");
// let x = document.getElementById("xValue");
// let minus = document.getElementById("minusValue");

// counter.innerText = store.getState().count;

//  Plain Way Doing Counter Feature
// inc.addEventListener("click", function () {
//   counter.innerHTML = value++;
// });

// dec.addEventListener("click", function () {
//   counter.innerHTML = value--;
// });
