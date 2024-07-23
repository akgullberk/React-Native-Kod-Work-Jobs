import {ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const DetailItem = ({jobItem }) => {
  const name = jobItem.name;
  const location = jobItem.locations && jobItem.locations.length > 0 ? jobItem.locations[0].name : 'Location not available';
  const level = jobItem.levels && jobItem.levels.length > 0 ? jobItem.levels[0].name : 'Level not available';

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.jobname}>{name}</Text>
      <View style={styles.location_container}>
        <Text style={styles.locations_text}>Locations:</Text>
        <Text style={styles.location_text}>{location}</Text>
      </View>
      <View style={styles.job_level}>
        <Text style={styles.locations_text}>Job Level:</Text>
        <Text style={styles.location_text}>{level}</Text>
      </View>
      <Text style={styles.job_detail}>Job Detail</Text>
      <View style={styles.contents}>
        <Text>{jobItem.contents}</Text>
      </View>
      
    </ScrollView>
  )
}

export default DetailItem
