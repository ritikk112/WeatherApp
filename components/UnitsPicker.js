import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitsSystem, setUnitSystem}) {
  return (
    <View>
        <Picker selectedValue={unitsSystem} onValueChange={(item)=>setUnitSystem(item)} mode = "dropdown" itemstyle = {{fontSize: 12}} >
            <Picker.Item label = "C°" value = "metric"/>
            <Picker.Item label = "F°" value = "imperial"/>
        </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 30,
            },
        }),
        left: 20,
        height: 50,
        width: 100,
    },
})