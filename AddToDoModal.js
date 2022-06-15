import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect } from 'react';
import AppStyles from './styles/AppStyles';

export default function AddToDoModal(props) {
  let [pushup, setTodo] = React.useState("");
  let [situp, setSitup] = React.useState("");
  let [runtime, setTime] = React.useState("");
  let [runkm, setKm] = React.useState("");

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>종목별 기록측정</Text>
      <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='팔굽혀펴기'
          value={pushup}
          onChangeText={setTodo} />
        <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='윗몸'
          value={situp}
          onChangeText={setSitup} />
          <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='달린 시간'
          value={runtime}
          onChangeText={setTime} />
          <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='거리'
          value={runkm}
          onChangeText={setKm} />
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin]}>
        <Button title="취소" color ='#065509' onPress={props.onClose} />
        <Button title="확인" color ='#065509' onPress={() => {
          props.addToDo(pushup, situp, runtime,runkm);
          setTodo("");
          setSitup("");
          setTime("");
          setKm("");
          props.onClose();
        }} />
      </View>
    </View>
  );
}
