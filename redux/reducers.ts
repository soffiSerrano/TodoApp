import {LOAD_TASKS,ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./action";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Task[] = [];

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_TASKS:
      return action.payload;
    case ADD_TASK:
      return [
        ...state,
        { id: state.length + 1, text: action.payload, completed: false },
      ];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

export default todoReducer;
