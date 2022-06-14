import React, { useEffect } from 'react';
import { TouchableOpacity,KeyboardAvoidingView, StyleSheet , Text, View ,TextInput} from 'react-native';
import { auth } from './firebase';
import {useState} from "react";
import { useNavigation } from '@react-navigation/core';

const SignupScreen=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [_phonenumber, setUsertel] = useState('')
    const navigation =useNavigation()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replac("Home")
                //navigator
            }
        })
        return unsubscribe
    },[])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('registered in with ',user.email);
        })
        .catch(error => alert(error.message))
    }
    return(
        <View style={styles.container} behavior="padding">
           <Text style={styles.text}>회원가입</Text>
             <Text style={styles.text2}>이메일로 계정을 만드세요.</Text>
         <Text style={styles.text3}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Ex: abs@example.com" 
                value={email} onChangeText={text => setEmail(text) } 
                style={styles.input}/>
        <Text style={styles.text3}>이름</Text>
        <TextInput placeholder="Ex: 김상병" 
                value={username} onChangeText={text => setUserName(text) } 
                style={styles.input}/>  
        <Text style={styles.text3}>비밀번호</Text>
                <TextInput placeholder="Pw: ●●●●●●●" 
                value={password} onChangeText={text => setPassword(text)} 
                style={styles.input}
                secureTextEntry
                />
        <Text style={styles.text3}>전화번호</Text>
        <TextInput placeholder="Ex: 010-0000-0000" 
                value={_phonenumber} onChangeText={text => setUsertel(text) } 
                style={styles.input}/>  
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleSignUp}
                    style={[styles.button, styles.button]}>
                        <Text style={styles.buttonText}>가입</Text>
                </TouchableOpacity>
                <Text style={styles.middlemargin}>이미 계정이 있으십니까?</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}
                    style={styles.buttonOutline}>
                        <Text style={styles.buttonOutlineText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignupScreen
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
        marginTop:50,
    },
    button:{
        backgroundColor:'#065509',
        paddingHorizontal : 25,
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center',
    },
    buttonOutline :{
        backgroundColor : 'white',
        marginTop : 5,
        borderColor:'#065509',
        borderWidth:2,
        paddingHorizontal : 25,
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center',
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
        marginTop:'20%'
    },

    text2:{
        fontSize:20,
        marginTop: 5,
        marginBottom:5
    },
    text3:{
        fontSize:20,
        marginTop: 8
    },
    middlemargin:{
        fontSize:15,
        marginTop:40,
        textAlign: 'center',
    }


})
