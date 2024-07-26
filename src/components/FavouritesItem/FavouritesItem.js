import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const FavouritesItem = ({item}) => {


  return (

    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.company}</Text>
      <Text style={styles.itemText}>{item.location}</Text>
      <Text style={styles.itemText}>{item.level}</Text>
    </View>
  )
}

export default FavouritesItem

