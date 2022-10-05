import { View, Platform, StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {colors} from './index'

export default function ReloadIcon({ load }) {
    const reloadIconName = Platform.OS === 'ios'? 'ios-refresh'  : 'md-refresh'
  return (
    <View style = {styles.reloadIcon}>
        <Ionicons onPress={load} name="reload" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    realoadIcon: {
        position: 'absolute',
        top: 30,
        right: 20,
    },
})