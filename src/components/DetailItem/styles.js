import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f2f2f2",
        flex:1
    },

    jobname: {
        fontSize: windowHeight*0.03,
        marginLeft: windowHeight*0.01,
        color:"#37474f",
        fontWeight:"bold",
    },

    locations_text: {
        color:"#ef8280",
        marginLeft: windowHeight*0.01,
        fontWeight:"bold",
        fontSize: windowHeight*0.016
    },

    location_text: {
        color:"#404040",
        fontWeight:"bold",
        marginLeft: windowHeight*0.01,
    },

    location_container: {
        flexDirection:"row",
        marginTop: windowHeight*0.005,
    },

    job_level: {
        flexDirection:"row",
        marginTop: windowHeight*0.005,
    },
    job_detail: {
        fontSize: windowHeight*0.03,
        textAlign:"center",
        fontWeight:"bold",
    },
    contents:{
        padding: windowHeight*0.01,
        backgroundColor:"#ffffff",
        borderWidth: windowWidth*0.001,
        borderColor: "#bdbbbb",
    },
})

export default styles