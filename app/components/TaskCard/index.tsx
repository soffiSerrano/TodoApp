// components/TaskCard.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { TaskCardContainer,TaskButton } from './style';

interface TaskCardProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}


const TaskCard: React.FC<TaskCardProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <TaskCardContainer>
      <TaskText completed={completed}>{text}</TaskText>
      <TouchableOpacity onPress={onToggle}>
        <TaskButton>{completed ? 'Reopen' : 'Complete'}</TaskButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <TaskButton>Delete</TaskButton>
      </TouchableOpacity>
    </TaskCardContainer>
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



export default TaskCard;
