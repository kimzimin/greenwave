import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Start({navigation}) {
 
    return (<View style={styles.container}>
     <View style={styles.head}><AntDesign onPress={() => navigation.goBack()} name="left" size={24}/>
    <Text style={styles.text}>운동 시작</Text></View>
    <Text style={{...styles.text2,marginTop:'30%'}}> 운동을 선택하면 </Text><Text style={styles.text2}>타이머 화면으로 이동합니다.</Text>
    <TouchableOpacity><MaterialCommunityIcons style={styles.icon} name="timer-settings-outline" size={60} color="#065509" /></TouchableOpacity>
    <View style={styles.work}>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'15%'}} name="arm-flex" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('PushUp')}><Text style={{...styles.workText, marginTop:'-10%'}}>팔굽혀펴기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-8%'}} name="right" size={24} color="black" /></TouchableOpacity>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'15%'}} name="human" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('SitUp')}><Text style={{...styles.workText, marginTop:'-10%'}}>윗몸일으키기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-8%'}} name="right" size={24} color="black" /></TouchableOpacity>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'15%'}} name="run" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('Running')}><Text style={{...styles.workText, marginTop:'-10%'}}>3km 달리기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-8%'}} name="right" size={24} color="black" /></TouchableOpacity></View>
    

    
    </View>);
  }
  
  export default Start;

  
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

    icon:{
        marginTop:'10%'
    },

    text:{
        fontSize:25,
        marginTop:'-9%',
        marginLeft:'35%',
        //marginTop:"15%",
        //textAlign: "center"
    },

    text2:{
        fontSize:20,
        color:'gray',
        
    },

    work:{
        backgroundColor:"white" ,
        marginTop:"33%",
        width:'113%',
        height:'50%',
        borderRadius:40
    },

    workText:{
        marginLeft:'30%',
        fontSize:20,
      
    },

    workIcon:{
        marginLeft:"10%"

    },

    arrow:{
        marginLeft:'85%'
    }
});