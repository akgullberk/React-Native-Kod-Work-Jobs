import {Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const FavouritesItem = ({item}) => {
  

  return (

    <TouchableWithoutFeedback >

        <View style={styles.container}>
            <View style={styles.body_container}>
            <View style={styles.info}>
                <Text style={styles.jobname}>{item.name}</Text>
                <Text style={styles.company}>{item.company}</Text>

                <View style={styles.location_container}>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>

            <View style={styles.level_container}>
                <Text style={styles.level}>{item.level}</Text>
            </View>
            </View>
            

        </View>
    </TouchableWithoutFeedback>
  )
}

export default FavouritesItem

