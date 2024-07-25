import { Linking, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { DetailItem, DetailsButton } from '../../components';
import { useDispatch } from 'react-redux';
import { addFav } from '../../redux/actions';

const Details = ({ route, navigation }) => {
  const { jobItem } = route.params;
  const submit = jobItem.refs.landing_page;
  const dispatch = useDispatch();

  const handleAddFav = () => {
    dispatch(addFav(jobItem));
    console.log(jobItem);
  };

  const handleFavourites = () => {
    navigation.navigate('Favourites');
  };

  const handlePress = () => {
    handleAddFav();
    handleFavourites();
  };

  const handleSubmit = () => {
    Linking.openURL(submit);
  };

  return (
    <View style={styles.container}>
      <DetailItem jobItem={jobItem} />
      <View style={styles.button_container}>
        <DetailsButton iconname="login" buttonname="Submit" onPress={handleSubmit} />
        <DetailsButton iconname="heart" buttonname="Favorite Job" onPress={handlePress} />
      </View>
    </View>
  );
};

export default Details;
