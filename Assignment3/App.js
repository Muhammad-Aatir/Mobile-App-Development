import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Design from './Components/Design';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSProvider from './Components/LoginSProvider';
import SignupSP from './Components/SignupSP';
import CustomerApp from './Components/CustomerApp';
import SignupCS from './Components/SignupCS';
import ServiceProviderApp from './Components/ServiceProviderApp'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer style={styles.container}>
        
        <Stack.Navigator initialRouteName='Home'
            options={ {headerStyle: {
              backgroundColor: 'blue',}}}>  
        <Stack.Screen name="Home" component={Design} 
              options={ {headerStyle: {
                backgroundColor: 'darksalmon',}}}
        
        />
        <Stack.Screen name="Service Provider" component={Screen2} />
        <Stack.Screen name="Customer" component={Screen3} />
        <Stack.Screen name="Login" component={LoginSProvider} />
        <Stack.Screen name="Signup" component={SignupSP} />
        <Stack.Screen name="CustomerApp" component={CustomerApp} />
        <Stack.Screen name="CustomerSignup" component={SignupCS} />
        <Stack.Screen name="ServiceProviderApp" component={ServiceProviderApp} />
        </Stack.Navigator>
      </NavigationContainer>

  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'burlywood',
    
  },
});
