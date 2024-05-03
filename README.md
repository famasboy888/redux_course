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

## How state is handled:

![image](https://github.com/famasboy888/redux_course/assets/23441168/86d760ab-d5c4-4c7b-a142-05cdc5c8b9f7)

## Redux Pattern:
1) Define a store
2) Create initial state object
3) Create reducer
4) Create action creator
5) Subscribe to store
6) Dispatch actions
7) Unsubscibe to changes
