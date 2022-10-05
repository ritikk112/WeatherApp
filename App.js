import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native"; 
import * as Location from 'expo-location'
import Weather from "./components/Weather";
import UnitsPicker from "./components/UnitsPicker";
import{colors} from './components/index'
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetalis from "./components/WeatherDetalis";
// import {WEATHER_API_KEY} from 'react-native-dotenv';

const WEATHER_API_KEY = 'fd6c895a33548975eaee2653b32b42fd'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App(){
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitSystem] = useState(`metric`);

  useEffect(() =>{
    load()
  }, [unitsSystem])  
  async function load(){
    setCurrentWeather(null)
    setErrorMessage(null)
    
    try{
      let {status} = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        setErrorMessage('Allow Location Access to enter the app')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords
      const urlWeather = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
      const response = await fetch(urlWeather)
      const result = await response.json()

      if(response.ok){
        setCurrentWeather(result)
      }
      else{
        setErrorMessage(result.message);
      }

    }
    catch(error){
      setErrorMessage(error.message)
    }
  }

// -----------------------------------------USER INTERFACE--------------------------------------------

  if(currentWeather){
    const {main: {temp}, } = currentWeather;
    return(
      <View style = {styles.container}>
        <StatusBar style = "auto" ></StatusBar>
        <View style = {styles.main}>
          <UnitsPicker unitsSystem={unitsSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load = {load} />
          <Weather current = {currentWeather} />
        </View>
        <WeatherDetalis currentWeather={currentWeather} unitsSystem = {unitsSystem} />
      </View>
    );
  }
  else if(errorMessage) {
    return(
      <View style = {styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style = "auto" ></StatusBar>
      </View>
    );
  }
  else{
    return(
      <View style = {styles.container}>
        <ActivityIndicator size = "large" color = {colors.PRIMARY_COLOR} /> 
        <StatusBar style = "auto" ></StatusBar>
      </View>
    );
  }

}

// -----------------------------------------------StyleSheets--------------------------------------------

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'beige',
    // textColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    flex: 1,
  }

})
