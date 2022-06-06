import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const PushUp = ({navigation}) => {
  const [start,setStart]=useState(false);
  const[reset,setReset] = useState(false);
  
  toggleStopwatch=()=>{
    setStart(!start);
    setReset(false);
  }
  resetStopwatch=()=>{
    setStart(false);
    setReset(true);
  }

  return (<View style={styles.container}>
     <View style={styles.head}><AntDesign onPress={() => navigation.goBack()} name="left" size={24}/>
</View>
    <View style={styles.work}>
    <Image style={styles.image} source={require('./image/situp.jpg')}/>
    <Text style={styles.text}>윗몸일으키기</Text>
    <Text style={styles.text2}>남은 시간</Text>
    <Stopwatch laps msecs  start={start}
        reset={reset}
        options={options}
        getTime={(time) => {}} />
    <Text style={styles.text2}>시작 버튼을 눌러 측정을 시작하세요.</Text>
    <TouchableHighlight onPress={toggleStopwatch} style={styles.btn}>
        <Text style={styles.text3}>{!start ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetStopwatch} style={styles.btn}>
        <Text style={styles.text3}>Reset</Text>
      </TouchableHighlight>
    </View>

  
  </View>);
}

export default PushUp;


const options = {
  text: {
    fontSize: 50,
    marginTop:'5%'
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#CFE3D0" ,
      paddingHorizontal: 20,
      alignItems:"center"
    },
    head:{
        marginTop:'15%',
        width:'90%'
    },

    text:{
        fontSize:25,

        marginTop:"5%",
        //textAlign: "center"
    },

    text2:{
      color:'grey',
      fontSize:20,
      marginTop:'20%'
    },

    image:{
      width: 70,
      height: 70,
      marginTop:'20%'
    },

    time:{
      marginTop:'8%',
      fontSize:50,
    },

    workIcon:{
      //marginLeft:"10%",
      marginTop:'25%'

  },

  work:{
    alignItems:'center'
  },

  btn:{
    backgroundColor:"#065509",
    width: 270,
    height:'10%',
    alignItems:'center',
    paddingVertical:'5%',
    marginTop:'10%',
    borderRadius:15
  },

  text3:{
    color:'white',
    textAlign:'center',
    fontSize:30
  }

});
