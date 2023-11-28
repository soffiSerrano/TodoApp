export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task: string) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId: number) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTask = (taskId: number) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});