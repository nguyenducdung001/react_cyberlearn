import { startTransition } from "react";
import { ToDoListDarkTheme } from "./../../JSS_StyledComponents/Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "./../../JSS_StyledComponents/Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "./../../JSS_StyledComponents/Themes/ToDoListPrimaryTheme";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "./../types/ToDoListTypes";
import { arrTheme } from "./../../JSS_StyledComponents/Themes/ThemeManager";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "task-4", taskName: "task 4", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      // console.log("Todo", action.newTask);
      // Kiểm tra rỗng
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      // Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex((task) => {
        return task.taskName === action.newTask.taskName;
      });
      if (index !== -1) {
        alert("task name had already existed");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      state.taskList = taskListUpdate;
      return { ...state };
    }
    case change_theme: {
      let theme = arrTheme.find((theme) => theme.id == action.themeID);
      if (theme) {
        state.themeToDoList = { ...theme.theme };
      }
      return { ...state };
    }
    case done_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      // state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }
    case delete_task: {
      let taskListUpdate = [...state.taskList];

      taskListUpdate = taskListUpdate.filter(
        (task) => task.id !== action.taskId
      );

      return { ...state, taskList: taskListUpdate };
    }
    case edit_task: {
      return { ...state, taskEdit: action.task };
    }
    case update_task: {
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => {
        return task.id === state.taskEdit.id;
      });
      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
