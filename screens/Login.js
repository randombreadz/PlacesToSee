import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  checkLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.upperContainer}></View>

        <View style={styles.lowerContainer}>
          <TextInput
            style={styles.textinput}
            placeholder={'Enter Email'}
            placeholderTextColor={'lightgray'}
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
          />

          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            placeholder={'Enter Password'}
            placeholderTextColor={'lightgray'}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.checkLogin(email, password)}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

/*
<TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Delhi')}>
            <Text style={styles.routeText}> Delhi</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
          </TouchableOpacity>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: 'rgb(28, 42, 53)',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: 'rgb(71, 108, 134)',
  },
  button: {
    width: '43%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(28, 42, 53)',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});
