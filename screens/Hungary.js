import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { Paragraph } from 'react-native-paper';

export default class Hungary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Mountains.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Hungary</Text>
          </View>
          <Image
            source={require('../assets/Hungary.jpg')}
            style={styles.image}></Image>
          <Paragraph>
            If you are traveling to Europe, Hungary is a great place to visit to
            see Budapest! Here are 5 interesting facts about Budapest:
            <br />
            <br />
            1. Budapest is the only capital in the world that hides caves
            underneath its streets
            <br />
            2. Budapest was created when 3 cities joined together
            <br />
            3. Budapest has more thermal water springs than any other capital
            city in the world
            <br />
            4. Budapest has the oldest subway in continental Europe
            <br />
            5. Built in 1873
          </Paragraph>

          <td>
            <a href="https://pallavi526.github.io/places/">
              Click Here to View in VR!
            </a>
          </td>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 300,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
  },
});
