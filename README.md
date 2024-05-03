# Redux Course

## 3 Core Concepts of Redux:

Cake shop Example:

| Entity     | Activity                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------ |
| Customer   | Order Cake                                                                                 |
| Shopkeeper | Check if there is specific cake, Box the cake, Print receipt for cake                      |
| Store      | Is where the cakes are stored     |


| Cake Shop Scenario | Redux   | Purpose                             |
| ------------------ | ------- | ----------------------------------- |
| Shop               | Store   | Hold the state of the application   |
| Cake ordered       | Action  | Describes what happened             |
| Shopkeeper         | Reducer | Handles action and describe how to update state |
