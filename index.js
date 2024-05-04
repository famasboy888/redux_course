const redux = require("redux");
const reduxLoger = require("redux-logger");

const logger = reduxLoger.createLogger();

const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};


const rootReduce = redux.combineReducers({
    cakeReducer: cakeReducer,
    iceCreamReducer: iceCreamReducer
})

//Holds application state
const store = createStore(rootReduce, applyMiddleware(logger));

//Access state via store.getState()
console.log("initial state:", store.getState());

//Subscribe first
const unsubscribe = store.subscribe(() => {

});

//Allows state to be updated via Dispatch(action)
// console.log("Orders");
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));

// console.log("After restock");
// store.dispatch(restockCake(20));

//Use bind action creators like this
const action = redux.bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

action.orderCake(2);
action.restockCake(3);
action.orderIceCream(4);
action.restockIceCream(2);

//Unsubscribe
unsubscribe();
