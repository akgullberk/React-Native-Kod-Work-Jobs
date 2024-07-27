import { Alert, Linking,View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { DetailItem, DetailsButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite} from '../../redux/action';



const Details = ({ route, navigation }) => {
  const { jobItem } = route.params;
  const submit = jobItem.refs.landing_page;
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);
  
  
  const handleSubmit = () => {
    Linking.openURL(submit);
  };

  const handleFavorite = () => {
    // İş ilanının favorilerde olup olmadığını kontrol et
    const isAlreadyFavorite = favorites.some(job => job.id === jobItem.id);
    
    if (isAlreadyFavorite) {
      // Eğer iş ilanı zaten favorilerdeyse, uyarı gösterme
      Alert.alert('Zaten Favorilerde', 'Bu iş ilanı zaten favorilerinize eklenmiş.');
    } else {
      // Eğer iş ilanı favorilerde değilse, favorilere ekle ve uyarı göster
      dispatch(addFavorite({
        id: jobItem.id,
        name: jobItem.name,
        company: jobItem.company.name,
        location: jobItem.locations && jobItem.locations.length > 0 ? jobItem.locations[0].name : 'Location not available',
        level: jobItem.levels && jobItem.levels.length > 0 ? jobItem.levels[0].name : 'Level not available',
      }));
      
      // Favorilere eklendi mesajı göster
      Alert.alert('Favorilere Eklendi', 'Bu iş ilanı favorilerinize eklendi.');
    }
  };

  

  return (
    <View style={styles.container}>
      <DetailItem jobItem={jobItem} />
      <View style={styles.button_container}>
        <DetailsButton iconname="login" buttonname="Submit" onPress={handleSubmit} />
        <DetailsButton iconname="heart" buttonname="Favorite Job" onPress={handleFavorite}  />
      </View>
    </View>
  );
};

export default Details;
