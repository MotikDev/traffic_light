import { StyleSheet } from 'react-native';


const SettingsStyles = StyleSheet.create({
    body: {
        borderRadius: 50,
        marginHorizontal: 50,
        paddingVertical: 40,
        marginTop: 100,
        color: '#0b0c0d'
    },
    header: {
      fontWeight: '900',
      fontSize: 20,
      marginBottom: 10,
      color: '#0b0c0d'
    },
    textboxLabel: {
        color: '#2a323b',
    },
    colorSection: {
        marginVertical: 10
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        color: '#2a323b',
    },
    btn: {
        backgroundColor: '#42f572', 
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 50,
    },
    btnText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: '900',
        color: '#0b0c0d'
    }
  });

  export default SettingsStyles;