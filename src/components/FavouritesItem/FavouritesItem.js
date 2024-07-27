import {Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import RemoveButton from '../RemoveButton/RemoveButton';
import { removeFavorite } from '../../redux/action';
import { useDispatch } from 'react-redux';

const FavouritesItem = ({item}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFavorite(item.id));
  };

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
            <View style={styles.button_container}>
              <RemoveButton styles={styles.button}
               iconname="trash-can-outline"
                buttonname="Remove"
                onPress={handleRemove}
                />
            </View>
             
            </View>
            
        </View>
    </TouchableWithoutFeedback>
  )
}

export default FavouritesItem

