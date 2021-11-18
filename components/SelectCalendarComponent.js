import React, {useState, useRef, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather   } from '@expo/vector-icons';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

LocaleConfig.locales['ru'] = {
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',],
  monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек',],
  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота',],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';



export default function SelectCalendarComponent(props) {

  const [daySelect, setDaySelect] = useState({});
  const [dayNamesShort, setDayNamesShort] = useState(['янв...','фев...','мар...','фпр...','май...','июн...','июл...','авг...','сен...','окт...','ноя...','дек...',]);
  const [month, setmonth] = useState(['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]);
  const [markedDates, setMarkedDates] = useState();

  function getWeekDay(date) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date];
  }

  return (
  <View style={{...styles.container, ...styles.fonWhite, ...styles.shadow}}>
    <View style={{flexDirection: "row", width: "100%", paddingHorizontal: 10, marginBottom: 25, alignItems: "center", justifyContent: "space-between", }}>
      <Pressable onPress={props.prevStep}>
        <Feather  name="chevron-left" size={20} color="black" />
      </Pressable>
      <Text style={{fontWeight: "700", fontSize: 18, color: "black",}}>Выберите дату</Text>
    </View>

      <Calendar
        disableArrowLeft = { true }
        hideArrows = { true }
        onDayPress={(day) => {setDaySelect(day); let selectDay = {}; selectDay[day.dateString] = {selected: true, selectedColor: 'black'};  setMarkedDates(selectDay)   }}
        markedDates={markedDates}
        minDate={'2021-11-10'}
        maxDate={'2021-11-17'}
        renderHeader = { ( date )  =>  { return (<Text style={{textAlign: "left", color: "#86858B", fontSize: 16, width: "100%"}}>{month[new Date(date).getMonth()]} {new Date(date).getFullYear()}</Text>) } }
        />

      <View style={{...styles.timeselect}}>
        <View style={{flexDirection: "row", justifyContent: "space-between", }}>
          <Text style={{color: "#86858B", fontSize: 16,}}>Доступное время</Text>
          <Text style={{color: "black", fontSize: 16,}}>{console.log(daySelect)} {getWeekDay(moment(daySelect.dateString).day())}, {daySelect.day} {dayNamesShort[daySelect.month-1]}</Text>
        </View>
        <Text style={{color: "#86858B", fontSize: 12, textAlign: "right", marginBottom: 10, paddingRight: 5, marginTop: 20}}>УТРО</Text>
      </View>

      <View style={{...styles.timeselect_row}}>


        <View style={{width: "33.3%", paddingHorizontal: 5, marginBottom: 10}}>
          <View style={{...styles.timeselect_item}}>
            <Text style={{fontWeight: "600"}}>9:30</Text>
          </View>
        </View>
        <View style={{width: "33.3%", paddingHorizontal: 5, marginBottom: 10}}>
          <View style={{...styles.timeselect_item}}>
            <Text style={{fontWeight: "600"}}>9:30</Text>
          </View>
        </View>
        <View style={{width: "33.3%", paddingHorizontal: 5, marginBottom: 10}}>
          <View style={{...styles.timeselect_item}}>
            <Text style={{fontWeight: "600"}}>9:30</Text>
          </View>
        </View>


      </View>

  </View>);

}


const styles = StyleSheet.create({
  timeselect_item: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D2D1D6",
    alignItems: "center",

  },
  timeselect_row: {
    paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeselect: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  fonWhite: {
    backgroundColor: "#FFFFFF",
  },
  shadow: {
    shadowColor: "#E5E5E5",
    shadowOffset: {
    	width: 0,
    	height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  container:{
    flexWrap: "wrap",
    paddingTop: 15,
    paddingBottom: 200,
    paddingHorizontal: 15,
  },
})
