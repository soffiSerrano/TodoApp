import styled from 'styled-components/native';

export const TaskCardContainer = styled.View`
  background-color: #FFB6C1; 
  padding: 16px;
  margin: 8px 0 8px 0 ;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TaskButton = styled.Text`
  color: #900;
  margin-left: 10px;
`;

export const TaskText = styled.Text<{ completed: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.completed ? '#888' : '#000')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;
