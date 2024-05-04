const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Virtus",
  address: {
    street: "7th Circle",
    city: "Sunny Village",
    state: "SAS",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const NAME_UPDATED = "NAME_UPDATED";

const updateName = (name) => {
  return {
    type: NAME_UPDATED,
    payload: name,
  };
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    case NAME_UPDATED:
      return produce(state, (draft) => {
        draft.name = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(stateReducer);

console.log("Initial store", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated store", store.getState());
});

store.dispatch(updateStreet("123 Sesame St."));

store.dispatch(updateName("Ay lmao"));

unsubscribe();
