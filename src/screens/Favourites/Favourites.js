import { FlatList, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { FavouritesItem } from '../../components';

const Favourites = () => {
  
  const favorites = useSelector(state => state.favorites);

  const renderFavorite = ({ item }) => (
    console.log("render fav", item),
    <FavouritesItem item={item} />
    
  );
  

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        
      />
    </View>
  );
};

export default Favourites;