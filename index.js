const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

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

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
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

//Holds application state
const store = createStore(reducer);

//Access state via store.getState()
console.log("initial state:", store.getState());

//Subscribe first
const unsubscribe = store.subscribe(() => {
  console.log("updated state:", store.getState());
});

//Allows state to be updated via Dispatch(action)
// console.log("Orders");
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));

// console.log("After restock");
// store.dispatch(restockCake(20));

//Use bind action creators like this
const action = redux.bindActionCreators({orderCake, restockCake}, store.dispatch)

action.orderCake(2);
action.restockCake(3)

//Unsubscribe
unsubscribe();
