import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import {DetailItem} from '../../components';

const Details = ({ route }) => {
  const { jobItem } = route.params;
  return (
    <View style={styles.container}>
      <DetailItem jobItem={jobItem} />
    </View>
  );
};

export default Details;
