import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,
Alert, TextInput, TurboModuleRegistry} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 
import Home from './Home'
import { render } from "react-dom";

const STORAGE_KEY = "@toDos";


function CheckList({navigation}) {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const day = today.getDate();
    const dateString = '오늘은 '+year+'년 '+month+'월 '+day+'일 입니다.';
    
    const [text, setText] = useState("");
    const [done, setDone] = useState(false);
    const [toDos, setToDos] = useState({});
    const [DoneColor, setColor] = useState("white");
   
    useEffect(() => {
        loadToDos();
    }, []);
   
    const doneToDo = (key) => {
    
        if(toDos[key].done){
    
            toDos[key].done=false;
            setColor("white");
             
        }
        else{
  
            toDos[key].done=true;
            setColor("#CFE3D0");
        }
    }


    const onChangeText = (payload) => setText(payload);
    const saveToDos = async (toSave) => {
     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    };
    const loadToDos = async () => {
      try{
        const s = await AsyncStorage.getItem(STORAGE_KEY);
       s !== null ? setToDos(JSON.parse(s)) : null;
         setToDos(JSON.parse(s));
     }
     catch(e){

    }
    
  };
  const addToDo = async () => {
     
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, done },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
    setDone(false);
    
  };

  const deleteToDo = (key) => {
    console.log(toDos[key]);
    Alert.alert("'"+toDos[key].text+"'"+"을(를) 삭제합니다.", "정말 삭제합니까?", [
      { text: "취소" },
      {
        text: "삭제",
        //style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
 
  return (<View style={styles.container}>
      <View style={styles.head}><AntDesign onPress={() => navigation.goBack()} name="left" size={24}/>
    <Text style={styles.text}>체크리스트</Text></View>
   
    <TouchableOpacity style={styles.plan}><Entypo style={styles.icon} name="flag" size={24} color="black" /><Text style={styles.text2}>오늘의 운동 계획</Text>
    <Text style={styles.today}>{dateString}</Text></TouchableOpacity>
    
    <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
      
        value={text}
        placeholder={
        "+   오늘의 운동을 입력해보세요."
        }
        style={styles.start}
      />
    
    <ScrollView>
    
        {toDos&&Object.keys(toDos).map((key) =>
      
      
        <TouchableOpacity onPress={() => doneToDo(key)} style={{...styles.toDo, backgroundColor: DoneColor}} key={key} >
            
          <Text style={styles.toDoText}>{toDos[key].text}</Text>
          <TouchableOpacity onPress={() => deleteToDo(key)}>
          <Entypo style={styles.trash} name="trash" size={20} color="grey" />
          </TouchableOpacity></TouchableOpacity>
        )}
    </ScrollView>
    
    
  
  </View>);
}

export default CheckList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      //paddingHorizontal: 20,
      //alignItems:"center"
    },
    head:{
        marginTop:'15%',
        marginLeft:'5%',
        //backgroundColor:'gray',
        //flexDirection: "row",
        width:'90%'
    },

    icon:{
        color: "#065509",
        marginTop:"10%",
        marginLeft:"10%"
    },
    text:{
        fontSize:25,
        marginTop:'-9%',
        marginLeft:'35%',
        //marginTop:"15%",
        //textAlign: "center"
    },
    plus:{
        marginLeft:"90%",
        marginTop:'-8%'
    },
    text2:{
        fontSize:20,
        marginTop:"-8%",
        marginLeft:"20%"
    },
    today:{
        fontSize:20,
        marginTop:"10%",
        marginLeft:"10%",
        color:'gray'
    },

    start:{
        fontSize:15,
        marginTop:"10%",
        marginBottom:"7%",
        alignSelf:'center',
    
        //backgroundColor: "lightgrey",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width:'90%',
        borderColor:"black",
        borderWidth: 1
    },

    plan:{
        borderRadius: 15,
        height:'20%',
        marginTop:'15%',
        backgroundColor:"#CFE3D0",
        alignSelf:'center',
        width:'90%',
    
    },
    toDo: {
        //backgroundColor: 'lightgrey',
        marginTop:'2%',
        marginBottom:'2%',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderRadius: 15,
        width:"90%",
        alignSelf:'center',
        borderWidth:1,
        borderColor:"lightgrey",
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-between",
        
        
   
     
    
      },
   
    toDoText: {
        color: "black",
        fontSize: 15,
        //marginRight:'60%',
        
    
      },
     
    trash:{
       //marginRight:'50%',
       
    },
    input: {
        backgroundColor: "lightgrey",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 20,
        fontSize: 18,
      },
   
});
