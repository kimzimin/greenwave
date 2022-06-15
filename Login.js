import React, { useEffect } from 'react';
import { TouchableOpacity,KeyboardAvoidingView, ScrollView, StyleSheet , Text, View ,TextInput} from 'react-native';
import { auth } from './firebase';
import {useState} from "react";
import { useNavigation } from '@react-navigation/core';

const LoginScreen=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigation =useNavigation()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Tab")
                //navigator
            }
        })
        return unsubscribe
    },[])

    const handleLogin =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user=userCredentials.user;
            console.log('Logged in with ', user,email);
        })
        .catch(error => alert(error.message))
    }
    return(
        <ScrollView style={styles.container} behavior="padding">
           <Text style={styles.text}>로그인</Text>
             <Text style={styles.text2}>이메일로 로그인 하세요.</Text>
         <Text style={styles.text3}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Ex: abs@example.com" 
                value={email} onChangeText={text => setEmail(text) } 
                style={styles.input}/>
            <Text style={styles.text4}>비밀번호</Text>
                <TextInput placeholder="Pw: ●●●●●●●" 
                value={password} onChangeText={text => setPassword(text)} 
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleLogin}
                    style={styles.button}>
                        <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <Text style={styles.middlemargin}>계정이 없으십니까?</Text>
                
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default LoginScreen
const styles=StyleSheet.create({
    container : {
        flex:1,
        //justifyContent:'center',
        //alignItems:'center',
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    inputContainer :{
        width: '100%',
        justifyContent:'center',
    },
    input :{
        borderColor:"#065509",
        paddingHorizontal : 25,
        paddingVertical : 15,
        borderWidth:1.5,
        borderRadius:15,
        marginTop: 5,
        //marginTop:"2%"
    },
    buttonContainer :{
        width: '100%',
        justifyContent : 'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#065509',
        paddingHorizontal : 25,
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center',
        marginBottom:10
    },
    buttonOutline :{
        backgroundColor : 'white',
        marginTop : 5,
        borderColor:'#065509',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize: 20,
    },
    buttonOutlineText:{
        color:'#065509',
        fontWeight:'700',
        fontSize:20,
        
    },
    text:{
        color:"#065509",
        fontSize:40,
        marginTop:'25%'
    },

    text2:{
        fontSize:20,
        marginTop:'10%'
    },
    text3:{
        fontSize:20,
        marginTop: '20%'
    },
    text4:{
        fontSize:20,
        marginTop: '8%'
    },
    middlemargin:{
        fontSize:15,
        marginTop:30,
        textAlign: 'center',
    }


})
