import React from 'react';
import { View, Text, Button } from 'react-native';
import TaskList from '../../components/TaskList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TaskList/>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;