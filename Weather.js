/* expo install expo-linear-gradient
expo install prop-types
expo install axios
expo install expo-location */

import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
   
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#065509", "#1D8B15"],
        title: "번개",
        subtitle: "실내 운동을 추천합니다!"
    },
    Drizzle : {
        iconName:"weather-partly-rainy",
        gradient: ["#065509", "#1D8B15"],
        title: "이슬비",
        subtitle: "실내 운동을 추천합니다!"
    },
    Rain : {
        iconName:"weather-rainy",
        gradient: ["#065509", "#1D8B15"],
        title: "비",
        subtitle: "실내 운동을 추천합니다!"
    },
    Snow : {
        iconName:"weather-snowy",
        gradient: ["#065509", "#1D8B15"],
        title: "눈",
        subtitle: "실내 운동을 추천합니다!"
    },
    Clear : {
        iconName:"weather-sunny",
        gradient: ["#065509", "#1D8B15"],
        title: "맑음",
        subtitle: "운동하기 좋은 날씨네요!"
    },
    Clouds : {
        iconName:"weather-cloudy",
        gradient: ["#065509", "#1D8B15"],
        title: "구름",
        subtitle: "흐린 날씨도 운동하기 좋죠!"
    },
    Mist : {
        iconName:"weather-hail",
        gradient: ["#065509", "#1D8B15"],
        title: "안개",
        subtitle: "흐린 날씨도 운동하기 좋죠!"
    },
    Dust : {
        iconName:"weather-hail",
        gradient: ["#065509", "#1D8B15"],
        title: "먼지",
        subtitle: "실내 운동을 추천합니다!"
    },
};

export default function Weather({ temp, condition }) {
    return (
    // <View style={styles.container}>
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons style={styles.icon} name={weatherOptions[condition].iconName} color="white" size={100} />    
        <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    // </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Clear","Clouds","Mist","Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 40,
        color: "white",
        marginLeft:3
    },

    //icon:{
   //     marginLeft:"-10%"
   // },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        //alignItems:"center"
        marginLeft:'-45%'
    },
    title: {
       color: "white",
       fontSize: 45,
       fontWeight: "300",
       marginTop:30,
       marginBottom: 10,
       marginLeft:'7%'
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        marginBottom: 10,
        marginLeft:'7%'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
