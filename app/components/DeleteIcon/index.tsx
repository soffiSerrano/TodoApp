import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Puedes cambiar 'FontAwesome' por el conjunto de iconos que prefieras

const DeleteIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash-o" size={30} color="#900" /> 
    </TouchableOpacity>
  );
};

export default DeleteIcon;
