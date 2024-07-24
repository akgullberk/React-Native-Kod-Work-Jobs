import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const FavoriteJobsButton = () => {
  return (
    <View style={styles.container}>
      <Icon name="heart" size={30} color="white" />
      <Text>FavoriteJobsButton</Text>
    </View>
  )
}

export default FavoriteJobsButton
