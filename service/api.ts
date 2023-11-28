// services/api.ts
import { Platform } from 'react-native';

export const BASE_URL = Platform.OS === 'android' ?  'http://0.0.0.0:3030' : 'https://localhost:3030/';

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error; 
  }
};