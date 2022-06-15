import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const Start = ({navigation}) => {
  
  

  return (<View style={styles.container}>
     <View style={styles.head}><AntDesign onPress={() => navigation.goBack()} name="left" size={24}/>
</View>
    <View style={styles.work}>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'10%'}} name="run" size={64} color="#065509" />
    <Text style={styles.text}>3km 뜀걸음</Text>

    
    <Text style={styles.text2}>시작 버튼을 누르면 즉시 측정을 시작합니다.</Text>
    <TouchableHighlight onPress={() => navigation.navigate('Map')} style={styles.btn}>
        <Text style={styles.text3}>시작</Text>
      </TouchableHighlight>
  
    </View>

  
  </View>);
}

export default Start;


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
      marginTop:'5%'
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
    height:'12%',
    alignItems:'center',
    paddingVertical:'5%',
    marginTop:'100%',
    borderRadius:15
  },

  text3:{
    color:'white',
    textAlign:'center',
    fontSize:30
  }

});
