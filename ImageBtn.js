import React from 'react';
import {Image,TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function ImageBtn({changeMode,type}) {

  let imageSrc; 
  
  if(type ==='wait') //대기상태
  imageSrc= "play-circle";
  else if(type =='running')
  imageSrc="stop-circle";

  const onPress = ()=>{
    if(type=='wait'){
      changeMode('running')
     console.log('운동을 시작합니다.')
    }
    else if (type =='running'){
      changeMode('')
      console.log('운동을 종료합니다.')
    }
 
  }
  return <TouchableWithoutFeedback onPress={onPress}>

      <Ionicons name={imageSrc} size={100} />
  </TouchableWithoutFeedback>;
}

export default ImageBtn;
