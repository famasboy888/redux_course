# Combine reducers

We can create multiple reduces. We pass reducers as objects this method to use multiple reducers.

```bash
const rootReduce = redux.combineReducers({
    cakeReducer: cakeReducer,
    iceCreamReducer: iceCreamReducer
})
```
