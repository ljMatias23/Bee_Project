import React from 'react';
import * as Font from 'expo-font';import {
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


  export default class SignUp extends React.Component {
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
            <ImageBackground style={styles.background}
      source={require("../assets/gradient1.png")}
      resizeMode="cover">

        
        <Image style={styles.image} source={require("../assets/LoginBeePicture.png")} />

        <Text style={styles.titleText}>Bee Rescue</Text>
        <Text style={styles.text}>Sign Up</Text>


        <View style = {{height: '50%', width: '100%', marginLeft: '15%'}}>
        <Text style={styles.textRegular}>email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
          />
          <Text style={styles.textRegular}>password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
          />
        
          <View style={styles.button}>
          <Button
              color="#d92978"
              title="Sign Up"
              onPress={() => console.log("Simple Button pressed")}/>
        </View>
        </View>
    </ImageBackground>
          </SafeAreaView>
        );
      } else {
        return null;
      }
    }
  }


/*export default function App() {
  console.log(Dimensions.get("screen"));

  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.background}
      source={require("../assets/gradient1.png")}
      resizeMode="cover">

        
        <Image style={styles.image} source={require("../assets/LoginBeePicture.png")} />

        <Text style={styles.titleText}>Bee Rescue</Text>
        <Text style={styles.text}>Sign Up</Text>


        <View style = {{height: '50%', width: '100%', marginLeft: '15%'}}>
        <Text style={{fontSize: 20, paddingLeft: 10}}>email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="email"
          />
          <Text style={{fontSize: 20, paddingLeft: 10}}>password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            placeholder="password"
          />
        
          <View style={styles.button}>
          <Button
              color="#d92978"
              title="Sign Up"
              onPress={() => console.log("Simple Button pressed")}/>
        </View>
        </View>
    </ImageBackground>
    </SafeAreaView>
  );
}*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    position: 'absolute',
    height: '25%',
    width: '100%',
    top: '2%',
    margin: 10,
  },
  titleText: {
    position: 'absolute',
    alignItems: 'center',
    height: '69%',
    fontSize: 50,
    fontFamily: 'rounded-sans-serif',
  },
  text: {
    position: 'absolute',
    alignItems: 'center',
    height: '63%',
    paddingTop: '5%',
    fontSize: 20,
    fontFamily: 'Comfortaa',
  },
  textRegular: {
    fontSize: 15,
    paddingLeft: 10,
    fontFamily: 'Comfortaa'
  },
  input: {
    height: 50,
    width: '80%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  button: {
    height: 50,
    width: '80%',
    margin: 10,
  },
});
