import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,
  } from 'react-native';
  import Ionicon from "react-native-vector-icons/Ionicons";
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function CalendarScreen({navigation}) {
  return (<View style={{flex: 1}}>
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Ionicon name="chevron-back" size={40}/>
          </TouchableOpacity>
          <Text>캘린더</Text>
          <TouchableOpacity>
              <Icon name="dots-vertical" size={40}/>
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
            renderArrow={direction => <Arrow />}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={true}
            // Disable right arrow. Default = false
            disableArrowRight={true}
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
    </View>
  );
}

export default CalendarScreen;
