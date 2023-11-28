import { StyleSheet, Text, View } from 'react-native';
import StartPage from './app/screens';
export default function App() {
  return (
    <StartPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

