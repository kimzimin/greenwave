import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight             
} from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarScreen from './Calendar.js'
import { addDays, format, getDate, startOfWeek, isSameDay } from 'date-fns';

function Main({navigation}) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const text = "오늘은 " + year + "년 " + month + "월 " + day + "일입니다.";

    const [week, setWeek] = useState([]);

    useEffect(() => {
      const weekDays = getWeekDays(date);
       setWeek(weekDays);
    }, [date]);

    const getWeekDays = (date) => {
      const start = startOfWeek(date, { weekStartsOn: 1});
      const weekOfLength = 7;
      const final = [];
      for (let i = 0; i < weekOfLength; i++) {
        const date = addDays(start, i);
        final.push({
          formatted: format(date, 'EEE'),
          date,
          day: getDate(date),
        });
      }
      return final;
    };

  return (
  <View style={styles.container}>
       <View style={styles.Header}>
         <View style={{flexDirection: 'row'}}>
            <Ionicon name="person-circle-sharp" size={40}/>
            <Text style={{fontSize: 15, marginTop: '10%', marginLeft: '3%'}}>안녕하세요!</Text>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
           <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
            <Ionicon name="calendar-outline" size={40}/>
           </TouchableOpacity>
         </View>
       </View>

       <View style={styles.Banner}>
         <View style={[styles.TextBox, {width: '95%', height: '100%', padding: '5%'}]}>
            <Text style={styles.textStyle}>{text}</Text>
         </View>
       </View>
        
       <View style={{flex: 7}}>
         <View style={styles.dayList}>
         {week.map((weekDay) => {
           const textStyles = [styles.dayText];
           const touchableStyles = [styles.dayText];
           const sameDay = isSameDay(weekDay.date, date);

           if (sameDay) {
             textStyles.push(styles.selectedDayText);
             touchableStyles.push(styles.selectedDayText);
           }
           return (
             <View  style={{alignItems: 'center'}} key={weekDay.formatted}>
               <Text style={{fontSize: 13}}>{weekDay.formatted}</Text>
               <TouchableHighlight onPress={() => onchange(weekDay.date)} style={touchableStyles}>
                 <Text style={{fontSize: 13}}>{weekDay.day}</Text>
               </TouchableHighlight>
             </View>
           );
         })}
         </View>
         
         <View style={{flex: 6, alignItems: 'center'}}>
             <View style={[styles.TextBox, {width: '30%', height: 20}]}><Text style={styles.goalText}>목표 개수</Text>
             </View>
             <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '5%'}}>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <Icon name="arm-flex" size={40}/>
                 <Text style={[styles.goalText, {margin: 0}]}>5개</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>팔굽혀펴기</Text>
               </View>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <Image source={require("./image/situp.jpg")} style={{width: 40, height: 40}}/>
                 <Text style={[styles.goalText, {margin: 0}]}>48개</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>윗몸일으키기</Text>
               </View>
               <View style={[styles.TextBox, {width: '30%', height: 100, alignItems: 'center', margin: '3%'}]}>
                 <Icon name="run" size={40}/>
                 <Text style={[styles.goalText, {margin: 0}]}>3km</Text>
                 <Text style={[styles.goalText, {margin: 0}]}>달리기</Text>
               </View>
             </View>

             <View style={[styles.TextBox, {width: '40%', height: 20, marginTop: '5%'}]}><Text style={styles.goalText}>목표 달성률</Text>
             </View>
             <Image source={require("./image/chart.png")} style={{width: "85%", height: 250}}/>
           </View>
     </View>
  </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  
  Header: {
      flex: 1,
      flexDirection: 'row',
      marginTop: '3%',
      marginHorizontal: '5%',
      justifyContent: 'space-between',
      alignItems: 'center'
  },

  Banner: {
    flex: 1,
    marginLeft: '5%'
  },

  TextBox: {
    backgroundColor: "#065509",
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  textStyle: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold'
  },

  dayList: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '3%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  dayText: {
    color: 'grey'
  },

  selectedDayText: {
    color: 'blue'
  },

  goalText: {
    fontSize: 10, fontWeight: 'bold', textAlign: 'center', 
    textAlignVertical: 'center', color: 'white'
  },

});
