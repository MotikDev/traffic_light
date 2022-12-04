 import { StyleSheet } from 'react-native';


const IndexStyles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363634',
        borderRadius: 50,
        marginHorizontal: 50,
        paddingVertical: 40,
        marginTop: 200
    },
    circle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        color: '#ffffff'
    },
    timerTexts: {
        color: '#030202',
        fontSize: 30
    },
    red: {
        // backgroundColor: '#eb4034',
        backgroundColor: '#141412',
    },
    yellow: {
        // backgroundColor: '#faf205',
        backgroundColor: '#141412',
        marginVertical: 20
    },
    green: {
        // backgroundColor: '#02f006'
        backgroundColor: '#141412',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 80,
    },
    btnStart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 200,
        borderRadius: 80,

        backgroundColor: '#69de3e',
        color: '#0b0d0b'
    },
    btnStop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#de232d',
        color: '#0b0d0b'
    },
    btnText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
  });

  export default IndexStyles;