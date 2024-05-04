# Modify nested state

Use `require("immer").produce` for easy object selection and change

```bash
return produce(state, (draft) => {
    draft.address.street = action.payload;
});
```

# Middleware

```bash
const reduxLoger = require("redux-logger");
const logger = reduxLoger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const store = createStore(rootReduce, applyMiddleware(logger));
```
