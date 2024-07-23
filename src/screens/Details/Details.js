import {Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const { jobItem } = route.params;
  return (
    <View>
      <Text>{jobItem.name}</Text>
    </View>
  )
}

export default Details
