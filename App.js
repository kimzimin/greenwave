	/*깔았던 패키지 총 정리
  npm i @react-navigation/native react-native-screens react-native-safe-area-context react-native-paper
  npm i @react-navigation/native-stack react-native-appearance react-native-gesture-handler react-native-reanimated
  npm i @react-native-community/masked-view @react-navigation/stack @react-navigation/bottom-tabs react-native-vector-icons
  npm install date-fns react-native-calendars --save
  npm i -D @types/react-native-vector-icons
  npx react-native link react-native-vector-icons react-native-appearance
*/

import React,{useCallback} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from "react-native-vector-icons/Ionicons";
import Main from "./Main.js";
import Map from "./Map.js";
import CalendarScreen from "./Calendar.js";
import Home from './Home';
import SignupScreen from './SignUp';
import PushUp from './PushUp';
import SitUp from './SitUp';
import Start from './Start';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import LoginScreen from './Login';
const Stack = createNativeStackNavigator();

const MainCalendar = createNativeStackNavigator();

function MainCalendarScreen() {
  return (
    <MainCalendar.Navigator screenOptions={{headerShown: false}}>
      <MainCalendar.Screen name="Main" component={Main} />
      <MainCalendar.Screen name="Calendar" component={CalendarScreen} />
    </MainCalendar.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabScreen() {
    return (
        <Tab.Navigator initialRouteName="MainScreen" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MainScreen') {
              iconName = 'home-outline';
            } else if (route.name === 'Map') {
              iconName = "navigate-outline";
            } else if (route.name === 'Exercise') {
              iconName = "play-circle";
            } else {
              iconName = 'stats-chart-outline';
            }

            return <Ionicon name={iconName} size={size} color={color} />;
          }}), {headerShown: false}}>
          <Tab.Screen name = "MainScreen" component = {MainCalendarScreen}/>
          <Tab.Screen name = "Map" component = {Map}/>
          <Tab.Screen name = "Exercise" component = {Map}/>
          <Tab.Screen name = "Stat" component = {Map}/>
        </Tab.Navigator>);
}

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Tab" component={TabScreen}/>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Start" component={Start}/>
      <Stack.Screen name="PushUp" component={PushUp} />
	<Stack.Screen name="SitUp" component={SitUp} />
    </Stack.Navigator>
    </NavigationContainer>);
}

export default App;
