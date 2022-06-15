import { View, Button, Text, Modal, SafeAreaView, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
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
        
        <Button 
          title="기록 측정" 
          onPress={() => navigation.navigate('AddToDoModal')} 
          style={styles.btn}
          color ='#065509' />
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
      
      <Text style={styles.header}>측정 기록</Text>
      {auth.currentUser.emailVerified ? showContent() : showContent()}
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  header: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: '30%',
  },
  btn :{
    marginTop:'10%',
  }

})
