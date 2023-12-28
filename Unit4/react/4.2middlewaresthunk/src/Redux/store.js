import { applyMiddleware, legacy_createStore as createStore , compose } from "redux";
import { counterReducer } from "./reducer";

export const middleware1 = (store) => (next) => (action) => {
  console.log("inside middleware1", action);
  next(action);
};
export const middleware2 = (store) => (next) => (action) => {
  //action.payload = 3;
  console.log("inside middleware1", action);
  next(action);
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middlewares = [middleware1, middleware2];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

export const store = createStore(counterReducer, enhancer);

store.subscribe(() => {
  console.log("current store is", store.getState());
});

//createStore(reducer,initialState - optional,storeEnhancer - optional);

// createStore(reudcer,redux-devtool...)

/*
  function sum(a){
    return function(b){
        return function(c){
            let ans =a+b+c
            console.log(ans)
        }
    }
  }

  sum(1)(2)(3)
*/
