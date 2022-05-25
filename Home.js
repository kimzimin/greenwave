import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

function Home({navigation}) {

  return (
   
   <View style={styles.container}>

       <Text style={styles.title}>초록물결</Text>
       <Image style={styles.image} source={require('./image/home1.png')}/>
    
    <TouchableOpacity onPress={() => navigation.navigate('Login')}
 style={styles.buttonView1}><Text style={styles.text}>로그인</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.buttonView2}><Text style={styles.text}>회원가입</Text></TouchableOpacity>
    
   </View>
   
    
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#065509",
    paddingHorizontal: 20,
    alignItems:"center"
  },

  title:{
    color:"white",
    fontSize:55,
    marginTop:'45%',
    marginBottom:'8%'
    
  },

  titleView:{
    flex:1
  },

  text:{
    fontSize:25,
    top:'25%'
  },

  image:{
    //width: '70%', height:"50%",
    height: 200, width:200,
    marginTop:'10%',
    marginBottom:'15%'
    //marginTop:'50%', marginHorizontal:'10%',
    
  },

  buttonView1:{
    backgroundColor:"white",
    borderRadius: 15,
    width:'80%',
    height:60,
    alignItems:'center',
    marginTop:'8%'
    
  },

  buttonView2:{
    backgroundColor:"white",
    borderRadius: 15,
    width:'80%',
    height:60,
    alignItems:'center',
    marginTop:'8%'
  }
});
