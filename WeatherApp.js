import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "6b9bee25c4a927cb5517caf8ca1f246b";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: { main : {temp}, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading:false, 
      condition: weather[0].main,
      temp
    })
    // console.log(data);
  };
  getLocation = async() => {
    try {
      //await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("실패", "위치 정보를 찾을 수 없습니다.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
