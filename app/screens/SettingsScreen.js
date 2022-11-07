import React from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Alert,
  Button,
  Image,
  SafeAreaView,
  TextInput} from 'react-native';

  export default class Settings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fontsLoaded: false
      }
    }
    
    async loadFonts() {
      await Font.loadAsync({
        'rounded-sans-serif': require('../assets/fonts/rounded-sans-serif.ttf'),
        'San-seriff-ic': require('../assets/fonts/San-seriff-ic.otf'),
        'Comfortaa': require('../assets/fonts/Comfortaa-Regular.ttf'),
      });
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this.loadFonts();
    }
  
    render() {
      if (this.state.fontsLoaded) {
        return (
          <SafeAreaView style={styles.container}>

            <Text style={styles.text}>Settings</Text>
            <Text style={{top: '-4%', fontFamily: 'San-seriff-ic', fontSize: 20}}>Security</Text>

            <View style={{width: '90%',alignItems: 'center', height: '60%'}}>
                <Text style={{ marginRight: '70%', fontFamily: 'San-seriff-ic', fontSize: 15}}>email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                />

            </View>
          </SafeAreaView>
        )
      }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        height: '90%',
        fontSize: 30,
        fontFamily: 'Comfortaa',
      },
      input: {
        height: 50,
        width: '80%',
        padding: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
      },
});