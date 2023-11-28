export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = (tasks: any[]) => ({
  type: LOAD_TASKS,
  payload: tasks,
});

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