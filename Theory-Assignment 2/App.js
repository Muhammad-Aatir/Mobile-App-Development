import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BigBoxes from './Components/BigBoxes';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.Title}> Ludo Dashboard Design</Text>
       <BigBoxes></BigBoxes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title:{
    fontWeight:'bold',
    fontSize:30,
    fontStyle:'italic',
    color:'wheat'
  }
});
