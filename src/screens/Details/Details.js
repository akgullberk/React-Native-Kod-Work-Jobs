import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import {DetailItem,DetailsButton} from '../../components';


const Details = ({ route }) => {
  const { jobItem } = route.params;
  return (
    <View style={styles.container}>
      <DetailItem jobItem={jobItem} />
      <View style={styles.button_container}>
        <DetailsButton iconname="login" buttonname="Submit" />
        <DetailsButton iconname="heart" buttonname="Favorite Job" />

      </View>
     
    </View>
  );
};

export default Details;
