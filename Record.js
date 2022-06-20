import { View, Button, Text, Modal,TouchableHighlight, SafeAreaView, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import InlineTextButton from './InlineTextButton';
import AppStyles from './styles/AppStyles';
import { auth, db } from "./firebase";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 
import { sendEmailVerification } from 'firebase/auth';
import React from 'react';

export default function ToDo({ navigation }) {
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [toDos, setToDos] = React.useState([]);

  let loadToDoList = async () => {
    const q = query(collection(db, "record"), where("userId", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    let toDos = [];
    querySnapshot.forEach((doc) => {
      let toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
    });

    setToDos(toDos);
    setIsLoading(true);
    setIsRefreshing(false);
  };

  if (isLoading) {
    loadToDoList();
  }

  let deleteToDo = async (toDoId) => {
    await deleteDoc(doc(db, "record", toDoId));
    let updatedToDos = [...toDos].filter((item) => item.id != toDoId);
    setToDos(updatedToDos);
  };

  let renderToDoItem = ({item}) => {
    return (
      <View style={[AppStyles.rowContainer, AppStyles.rightMargin, AppStyles.leftMargin]}>
        <View style={AppStyles.fillSpace}>
          
        </View>
        <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteToDo(item.id)} />
      </View>
    );
  }

  let showToDoList = () => {
    return (
      <FlatList
        data={record}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadToDoList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={item => item.id} />
    )
  };

  let showContent = () => {
    return (
      <View
      onRefresh={() => {
        loadToDoList();
        showToDoList();
      }}
      >
        <View style={{alignItems:"center"}}>
        <TouchableHighlight onPress={() => navigation.navigate('AddToDoModal')} style={styles.btn}>
        <Text style={styles.text3}>기록 입력하기</Text>
      </TouchableHighlight>
      </View>
      </View>
    );
  };

  let showContent2 = () => {
    return (
      <View
      onRefresh={() => {
        loadToDoList();
        showToDoList();
      }}
      >
        <View style={{alignItems:"center"}}>
        <TouchableHighlight onPress={() => navigation.navigate('AddToDoModal')} style={styles.btn2}>
        <Text style={styles.text3}>목표 입력하기</Text>
      </TouchableHighlight>
      </View>
      </View>
    );
  };

  let addToDo = async (pushup, situp, runtime, runkm) => {
    const docRef = await addDoc(collection(db, "record"),{
      pushup: pushup,
      runkm: runkm,
      runtime:runtime,
      situp: situp,
      userId: auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...toDos];
    updatedToDos.push(toDoToSave);

    setToDos(updatedToDos);
  };
  
  return (
    <SafeAreaView>
      
      <Text style={styles.header}>운동을 마치셨나요?</Text>
      <Text style={{ fontSize: 20, alignSelf: "center"}}>기록을 입력해보세요.</Text>
      {auth.currentUser.emailVerified ? showContent() : showContent()}
      <Text style={styles.header2}>새로운 목표를 설정하셨나요?</Text>
      <Text style={{ fontSize: 20, alignSelf: "center"}}>목표를 기록해보세요.</Text>
      {auth.currentUser.emailVerified ? showContent2() : showContent2()}
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  header: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: '45%',
  },

  header2: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: '35%',
  },


  btn:{
    backgroundColor:"#065509",
    width: 270,
    height:75,
    alignItems:'center',
    paddingVertical:'5%',
    marginTop:'7%',
    borderRadius:15,
    
  },

  btn2:{
    backgroundColor:"#065509",
    width: 270,
    height: 75,
    alignItems:'center',
    paddingVertical:'5%',
    marginTop:'7%',
    borderRadius:15,
    
  },

  text3:{
    color:'white',
    textAlign:'center',
    fontSize:30
  }

})
