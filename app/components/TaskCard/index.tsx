import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface TaskCardProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <Task>
      <TaskText completed={completed}>{text}</TaskText>
      <TouchableOpacity onPress={onToggle}>
        <TaskButton>{completed ? 'Reopen' : 'Complete'}</TaskButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <TaskButton>Delete</TaskButton>
      </TouchableOpacity>
    </Task>
  );
};

const Task = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const TaskText = styled.Text<{ completed: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.completed ? '#888' : '#000')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const TaskButton = styled.Text`
  color: #900;
  margin-left: 10px;
`;

export default TaskCard;
