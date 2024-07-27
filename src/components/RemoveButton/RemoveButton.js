import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './styles';

const RemoveButton = ({iconname,buttonname,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.icon} name={iconname} size={30} color="white" />
      <Text style={styles.text}>{buttonname}</Text>
    </TouchableOpacity>
  )
  
}

export default RemoveButton
