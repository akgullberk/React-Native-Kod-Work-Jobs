import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef5350',
        width: windowWidth*0.4,
        height:windowHeight*0.06,
        borderRadius:windowHeight*0.01,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize: windowHeight*0.02
    }
})