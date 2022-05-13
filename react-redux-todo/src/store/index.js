import { createStore } from "redux";

function reducer(state = [], action) {
  switch (action.type) {
    case "add":
      return state.concat({ payload: action.todo, isCompleted: false });
    case "toggleComplete":
      return state.filter((todo, i) => {
        if (i === action.index) {
          todo.isCompleted = action.isChecked;
        }
        return todo;
      });
    case "delete":
      return state.filter((todo, i) => i !== action.index);
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
