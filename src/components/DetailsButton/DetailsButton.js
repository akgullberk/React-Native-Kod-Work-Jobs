import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailsButton = ({iconname,buttonname,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.icon} name={iconname} size={30} color="white" />
      <Text style={styles.text}>{buttonname}</Text>
    </TouchableOpacity>
  )
}

export default DetailsButton
