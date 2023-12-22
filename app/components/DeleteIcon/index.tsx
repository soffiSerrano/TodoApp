import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeleteIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash-o" size={23} color="#900" /> 
    </TouchableOpacity>
  );
};

export default DeleteIcon;
