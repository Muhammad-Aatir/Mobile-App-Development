import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PrayerTimes from "./Components/PrayerTimes";
import Loca from "./Components/Loca";
const Tab = createBottomTabNavigator();
export default function App() {
  return;
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,

        tabBarStyle: {
          height: 55,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "tan",
          position: "absolute",
          borderTopWidth: 0,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
        },
      })}
    >
      <Tab.Screen name="Azan Timing" component={PrayerTimes}></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
