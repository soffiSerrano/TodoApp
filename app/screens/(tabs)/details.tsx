import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;