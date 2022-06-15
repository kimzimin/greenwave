/*깔았던 패키지 총 정리
  npm i @react-navigation/native react-native-screens react-native-safe-area-context react-native-paper
  npm i @react-navigation/native-stack react-native-appearance react-native-gesture-handler react-native-reanimated
  npm i @react-native-community/masked-view @react-navigation/stack @react-navigation/bottom-tabs react-native-vector-icons
  npm install date-fns react-native-calendars --save
  npm i -D @types/react-native-vector-icons
  npx react-native link react-native-vector-icons react-native-appearance
  npm install react-moda
*/

import React,{useCallback} from 'react';
import {NavigationContainer, useNavigation, Icon} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from "./Main.js";
import Map from "./Map.js";
import CalendarScreen from "./Calendar.js";
import Home from './Home';
import SignupScreen from './SignUp';
import PushUp from './PushUp';
import SitUp from './SitUp';
import CheckList from './CheckList.js';
import LoginScreen from './Login';
import Start from './Start';
import AddToDoModal from './AddToDoModal.js';
import WeatherApp from './WeatherApp'
import Record from './Record';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function TabScreen() {
    return (
        <Tab.Navigator initialRouteName="MainScreen" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            return 
          }}), {headerShown: false}}>
          <Tab.Screen name = "Main" component = {Main}
          options={{ tabBarIcon: ({color, size})=> ( <Ionicons name="home-outline" color = {color} size={size}/>),}}/>
         
          <Tab.Screen name = "Checklist" component = {CheckList}
          options={{ tabBarIcon: ({color, size})=> ( <Ionicons name="checkmark-sharp" color = {color} size={size}/>),}}/>
          <Tab.Screen name = "Stat" component ={Record}
          options={{ tabBarIcon: ({color, size})=> ( <Ionicons name="body-sharp" color = {color} size={size}/>),}}/>
           <Tab.Screen name = "Weather" component = {WeatherApp}
          options={{ tabBarIcon: ({color, size})=> ( <Ionicons name="cloud-outline" color = {color} size={size}/>),}}/>
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
      <Stack.Screen name="PushUp" component={PushUp} />
      <Stack.Screen name="SitUp" component={SitUp} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="WeatherApp" component={WeatherApp} />
<Stack.Screen name="AddToDoModal" component={AddToDoModal} />
      <Stack.Screen name="record" component={record} />
    </Stack.Navigator>
    </NavigationContainer>);
}

export default App;
