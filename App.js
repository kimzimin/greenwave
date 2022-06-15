/*깔았던 패키지 총 정리
  npm i @react-navigation/native react-native-screens react-native-safe-area-context react-native-paper
  npm i @react-navigation/native-stack react-native-appearance react-native-gesture-handler react-native-reanimated
  npm i @react-native-community/masked-view @react-navigation/stack @react-navigation/bottom-tabs react-native-vector-icons
  npm install date-fns react-native-calendars --save
  npm i -D @types/react-native-vector-icons
  npx react-native link react-native-vector-icons react-native-appearance
*/

/*수정 사항
1. Calendar를 bottomtap으로 빼고 exercise 삭제 (or map 삭제하고 운동 추천으로 변경?...최소한 유튜브 연결이나....)
2. 일정 관리 및 데이터베이스에 기록 저장 해결
3. 달리기 map 기능 구현 및 기록 측정
*/

import React,{useCallback} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
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
            let iconName;

            if (route.name === 'Main') {
              iconName = 'home-outline';
            } else if (route.name === 'Map') {
              iconName = "navigate-outline";
            } else if (route.name === 'Exercise') {
              iconName = "play-circle";
            } else {
              iconName = 'stats-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }}), {headerShown: false}}>
          <Tab.Screen name = "Main" component = {Main}/>
          <Tab.Screen name = "Map" component = {Map}/>
          <Tab.Screen name = "Checklist" component = {CheckList}/>
          <Tab.Screen name = "Stat" component = {CalendarScreen}/>
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
    </Stack.Navigator>
    </NavigationContainer>);
}

export default App;
