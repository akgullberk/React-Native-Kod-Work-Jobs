import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SubmitButton = () => {
  return (
    <View style={styles.container}>
      <Icon name="login" size={30} color="white" />
      <Text style={styles.text}>SubmitButton</Text>
    </View>
  )
}

export default SubmitButton
