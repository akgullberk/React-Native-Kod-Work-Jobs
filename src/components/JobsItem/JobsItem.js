import {Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const JobsItem = ({jobItem}) => {
  const name = jobItem.name;
  const company = jobItem.company.name;
  const location = jobItem.locations && jobItem.locations.length > 0 ? jobItem.locations[0].name : 'Location not available';
  const level = jobItem.levels && jobItem.levels.length > 0 ? jobItem.levels[0].name : 'Level not available';
  return (
    <TouchableWithoutFeedback>

        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.jobname}>{name}</Text>
                <Text style={styles.company}>{company}</Text>

                <View style={styles.location_container}>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>

            <View style={styles.level_container}>
                <Text style={styles.level}>{level}</Text>
            </View>

        </View>
    </TouchableWithoutFeedback>
  )
}

export default JobsItem;

