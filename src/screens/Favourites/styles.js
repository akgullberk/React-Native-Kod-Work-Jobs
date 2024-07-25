import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 export const styles = StyleSheet.create({
    container: {
        padding: windowHeight*0.01,
        borderWidth: windowHeight*0.001,
        backgroundColor:"#e8e8e8",
        
    },
    body_container: {
        backgroundColor:"#ffffff",
        borderWidth: windowHeight*0.0015,
        borderColor: "#bdbbbb",
        borderRadius:windowHeight*0.01,
        
    },
    info:{
        padding: windowHeight*0.005,
        
    },
    jobname: {
        fontSize: windowHeight*0.02,
        color:"black",
        fontWeight:"bold",
        marginBottom: windowHeight*0.002,
    },
    company: {
        fontSize: windowHeight*0.02,
        color:"#3e3e3e",
        marginBottom: windowHeight*0.003,
        
    },
    location_container: {
        backgroundColor:"#ef5350",
        alignSelf:"flex-start",
        borderRadius:windowHeight*0.02,
        padding: windowHeight*0.005,
        
    },
    location: {
        color:"white",
        fontSize: windowHeight*0.015,
    },
    level_container: {
        
    },
    level:{
        textAlign:"right",
        marginBottom: windowHeight*0.01,
        marginRight: windowHeight*0.015,
        color:"#f17673",
        fontWeight:"bold",
        fontSize: windowHeight*0.015,
    }
 })