import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      
})