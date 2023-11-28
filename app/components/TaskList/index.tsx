// components/TaskList.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import TaskCard from '../TaskCard';
import { addTask, deleteTask, toggleTask } from '../../../redux/action';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.todos);
  const [newTaskText, setNewTaskText] = useState('');

  const handleDelete = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      dispatch(addTask(newTaskText));
      setNewTaskText('');
    }
  };

  return (
    <Container>
      <TextInput
        placeholder="New Task"
        value={newTaskText}
        onChangeText={(text) => setNewTaskText(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      {tasks.map((task: any) => (
        <TaskCard
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => handleToggle(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
`;

export default TaskList;
