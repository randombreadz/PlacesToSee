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

export default class NewYork extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Mountains.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>New York</Text>
          </View>
          <Image
            source={require('../assets/NewYork.jpg')}
            style={styles.image}></Image>
          <Paragraph>
            Going to the United States? Give New York a visit! Here are 5
            interesting facts about New York:
            <br />
            <br />
            1. More than 800 languages are spoken in New York City, making it
            the most linguistically diverse city in the world. 4 in 10
            households speak a language other than English
            <br />
            2. Times Square is named after the New York Times. It was originally
            called Longacre Square until the Times moved there in 1904
            <br />
            3. New York City became the first capital of the United States in
            1789
            <br />
            4. Over 8 million people live in New York City
            <br />
            5. The New York Public Library has over 50 million books
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
