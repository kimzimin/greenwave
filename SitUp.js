import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function SitUp({navigation}) {
 
  return (<View style={styles.container}>
     <View style={styles.head}><AntDesign onPress={() => navigation.goBack()} name="left" size={24}/>
</View>
    <View style={styles.work}>
    <Image style={styles.image} source={require('./image/situp.jpg')}/>
    <Text style={styles.text}>윗몸일으키기</Text>
    <Text style={styles.text2}>남은 시간</Text>
    <Text style={styles.time}>00:00:00</Text>
    <Text style={styles.text2}>시작 버튼을 눌러 측정을 시작하세요.</Text>
    <TouchableOpacity style={styles.btn}><Text style={styles.text3}>시작</Text></TouchableOpacity>
    </View>

  
  </View>);
}

export default SitUp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#CFE3D0" ,
      paddingHorizontal: 20,
      alignItems:"center"
    },

    image:{
      width: 70,
      height: 70,
      marginTop:'20%'
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
      marginTop:'25%'
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
    marginTop:'20%',
    borderRadius:15
  },

  text3:{
    color:'white',
    textAlign:'center',
    fontSize:20
  }

});