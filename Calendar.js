import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
  } from 'react-native';
  import { Ionicons } from '@expo/vector-icons'; 
  import {MaterialCommunityIcons} from '@expo/vector-icons';
  import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

  

function CalendarScreen({navigation}) {
  return (<View style={{flex: 1}}>
      <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Ionicons name="chevron-back" size={40}/>
          </TouchableOpacity>
          <Text style={styles.text}>캘린더</Text>
          <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={40}/>
          </TouchableOpacity>
      </View>
        <View>
            <Calendar
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2021-06-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2023-06-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={direction => <Arrows />}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={0}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            />
        </View>
        <View>
          
        </View>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white" ,
    paddingHorizontal: 5,
    alignItems:"center"
  },

  head:{
      marginTop:'15%',
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal: '3%',
      marginBottom: '8%'
  },

  smallView:{
      backgroundColor:"#065509",
      borderRadius: 10,
      width:'40%',
      padding:5,
      alignItems:'center',
      marginTop:'10%'
  },

  plan:{
      backgroundColor:"#065509",
      borderRadius:15,
      width:'93%',
      height:'10%',
      padding:27,
      marginTop:'5%'
  },

  today:{
      fontWeight: 'bold',
      color:'white',
      
  },

  icon:{
      marginTop:'10%'
  },

  text:{
      fontSize:15,
      marginTop:'3%',
      marginLeft:'2%',
      //marginTop:"15%",
      //textAlign: "center"
  },

  text2:{
      fontSize:12,
      color:'white',
      
  },

  work:{
      backgroundColor:"white" ,
      marginTop:"0%",
      width:'113%',
      height:'50%',
      borderRadius:40
  },

  workText:{
      marginLeft:'30%',
      fontSize:16,
    
  },

  workIcon:{
      marginLeft:"10%"

  },

  arrow:{
      marginLeft:'85%'
  },

  TextBox: {
      backgroundColor: "#CFE3D0",
      borderRadius: 20,
      justifyContent: 'space-around',
    },

    goalText: {
      fontSize: 13,  fontWeight: 'bold', textAlign: 'center', 
    },
  
});
