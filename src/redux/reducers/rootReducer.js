import { combineReducers } from "redux";
import ToDoListReducer from "./TodoListReducer";
import FakeBookReducer from "./FakeBookReducer";

export const rootReducer = combineReducers({
  ToDoListReducer,
  FakeBookReducer,
});
