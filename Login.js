import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

function Login({navigation}) {
 
  return (<View style={styles.container}>
    <Text style={styles.text}>로그인</Text>
    <Text style={styles.text2}>이메일로 로그인 하세요.</Text>
    <Text style={styles.text3}>Email</Text>
    <View style={styles.inputBox}>
    <TextInput textContentType='emailAddress' placeholder='Ex: abs@example.com' style={styles.input}></TextInput>
    </View>
    <Text style={styles.text4}>비밀번호</Text>
    <View style={styles.inputBox}>
    <TextInput textContentType='emailAddress' placeholder='' style={styles.input}></TextInput>
    </View>
  </View>);
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
      
    },

    text:{
        color:"#065509",
        fontSize:40,
        marginTop:'5%'
    },

    text2:{
        fontSize:20,
        marginTop:'5%'
    },

    text3:{
        fontSize:20,
        marginTop: '20%'
    },
    
    text4:{
        fontSize:20,
        marginTop: '8%'
    },

    input:{
        fontSize:20,
        marginVertical:12,
        marginHorizontal:15
    },

    inputBox:{
        borderColor:"#065509",
        borderWidth:1.5,
        borderRadius:15,
        marginTop:"2%"

    }

});