import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';
import Appbutton from './Components/Appbutton';
import WelcomeScreen from './Components/WelcomeScreen';

export default function App(title,onPress) {
  return (
   <WelcomeScreen></WelcomeScreen>
   
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
