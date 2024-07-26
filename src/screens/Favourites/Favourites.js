import { FlatList, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { FavouritesItem } from '../../components';

const Favourites = () => {
  
  const favorites = useSelector(state => state.favorites);

  const renderFavorite = ({ item }) => (
    <FavouritesItem item={item} />
  );
  

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Favourites;