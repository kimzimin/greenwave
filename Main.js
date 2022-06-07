import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


function Main({navigation}) {
 
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const day = today.getDate();
    const dateString = '오늘은 '+year+'년 '+month+'월 '+day+'일 입니다.';
 

    return (<View style={styles.container}>
     <View style={styles.head}><Ionicons name="person-circle-sharp" size={35}/>
    <Text style={styles.text}>안녕하세요!</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Calendar')} style={{marginLeft:'55%'}}>
      <MaterialCommunityIcons name="calendar-month" size={35}/></TouchableOpacity>
    </View>

    <View style={styles.plan}>
    <Text style={styles.today}>{dateString}</Text></View>

    <View style={styles.smallView}>
    <Text style={styles.text2}>목표개수</Text></View>

    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '2%'}}>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <MaterialCommunityIcons name="arm-flex" size={40}/>
                 <Text style={[styles.goalText, {margin: 0}]}>5개</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>팔굽혀펴기</Text>
               </View>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <Image source={require("./image/situp.jpg")} style={{width: 40, height: 40}}/>
                 <Text style={[styles.goalText, {margin: 0}]}>48개</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>윗몸일으키기</Text>
               </View>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <MaterialCommunityIcons name="run" size={40}/>
                 <Text style={[styles.goalText, {margin: 0}]}>3km</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>달리기</Text>
               </View>
               </View>
    
    <View style={{...styles.smallView , marginTop:'10%'}}>
    <Text style={styles.text2}>운동시작</Text></View>

    <View style={styles.work}>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'8%'}} name="arm-flex" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('PushUp')}><Text style={{...styles.workText, marginTop:'-8%'}}>팔굽혀펴기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-6%'}} name="right" size={20} color="black" /></TouchableOpacity>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'15%'}} name="human" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('SitUp')}><Text style={{...styles.workText, marginTop:'-8%'}}>윗몸일으키기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-6%'}} name="right" size={20} color="black" /></TouchableOpacity>
    <MaterialCommunityIcons style={{...styles.workIcon, marginTop:'15%'}} name="run" size={44} color="#065509" />
    <TouchableOpacity onPress={() => navigation.navigate('Running')}><Text style={{...styles.workText, marginTop:'-8%'}}>3km 달리기</Text>
    <AntDesign style={{...styles.arrow, marginTop:'-6%'}} name="right" size={20} color="black" /></TouchableOpacity></View>
    

    
    </View>);
  }
  
  export default Main;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white" ,
      paddingHorizontal: 5,
      alignItems:"center"
    },

    head:{
        marginTop:'15%',
        width:'90%',
        flexDirection:'row'
       
    },

    smallView:{
        backgroundColor:"#065509",
        borderRadius: 10,
        width:'40%',
        padding:5,
        alignItems:'center',
        marginTop:'10%'
    },

    plan:{
        backgroundColor:"#065509",
        borderRadius:15,
        width:'93%',
        height:'10%',
        padding:27,
        marginTop:'5%'
    },

    today:{
        fontWeight: 'bold',
        color:'white',
        
    },

    icon:{
        marginTop:'10%'
    },

    text:{
        fontSize:15,
        marginTop:'3%',
        marginLeft:'2%',
        //marginTop:"15%",
        //textAlign: "center"
    },

    text2:{
        fontSize:12,
        color:'white',
        
    },

    work:{
        backgroundColor:"white" ,
        marginTop:"0%",
        width:'113%',
        height:'50%',
        borderRadius:40
    },

    workText:{
        marginLeft:'30%',
        fontSize:16,
      
    },

    workIcon:{
        marginLeft:"10%"

    },

    arrow:{
        marginLeft:'85%'
    },

    TextBox: {
        backgroundColor: "#CFE3D0",
        borderRadius: 20,
        justifyContent: 'space-around',
      },

      goalText: {
        fontSize: 13,  fontWeight: 'bold', textAlign: 'center', 
      },
    
});
