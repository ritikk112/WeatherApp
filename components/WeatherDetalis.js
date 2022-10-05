import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {colors} from './index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function WeatherDetalis({currentWeather, unitsSystem}) {
  const{
    main: {feels_like, humidity, pressure},
    wind: {speed},
  } = currentWeather
  const windSpeed = unitsSystem === 'metric'? `${Math.round(speed)} m/s`: `${Math.round(speed)} miles/h` 
    return (
    <View style = {styles.weatherDetails}>
      <View style = {styles.weatherDetalsRow}>
        <View style = {{...styles.weatherDetalsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
            <View style = {styles.weatherDetalsRow}>
                <FontAwesome5 name = "temperature-low" size={25} color = {PRIMARY_COLOR} />
                <View style = {styles.weatherDetailsItems}>
                    <Text>Feels Like</Text>
                    <Text style = {styles.textSecondary}>{feels_like}</Text>
                </View>
            </View>
        </View>
        <View style = {styles.weatherDetalsBox}>
        <View style = {styles.weatherDetalsRow}>
                <MaterialCommunityIcons name = "water" size={25} color = {PRIMARY_COLOR} />
                <View style = {styles.weatherDetailsItems}>
                    <Text>Humidity</Text>
                    <Text style = {styles.textSecondary}>{humidity}%</Text>
                </View>
            </View>
        </View>
      </View>
      <View style = {{...styles.weatherDetalsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
        <View style = {{...styles.weatherDetalsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
            <View style = {styles.weatherDetalsRow}>
                <MaterialCommunityIcons name = "weather-windy" size={25} color = {PRIMARY_COLOR} />
                <View style = {styles.weatherDetailsItems}>
                    <Text>Wind Speed:</Text>
                    <Text style = {styles.textSecondary}>{windSpeed}</Text>
                </View>
            </View>
        </View>
        <View style = {styles.weatherDetalsBox}>
        <View style = {styles.weatherDetalsRow}>
                <MaterialCommunityIcons name = "speedometer" size={25} color = {PRIMARY_COLOR} />
                <View style = {styles.weatherDetailsItems}>
                    <Text>Pressure:</Text>
                    <Text style = {styles.textSecondary}>{pressure}</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetalsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetalsBox: {
        flex: 1,
        padding: 20
    },
    weatherDetailsItems:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7
    }
})