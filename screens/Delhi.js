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
import { Link } from 'react-router-dom';

export default class Delhi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Mountains.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Delhi</Text>
          </View>
          <Image
            source={require('../assets/Delhi.jpg')}
            style={styles.image}></Image>

          <Paragraph>
            When visiting Delhi, India, Taj Mahal is a great place to visit!
            Here are 5 interesting facts about Taj Mahal:
            <br />
            <br />
            1. It was built to honor the favorite wife of Shah Jahan
            <br />
            2. The Taj Mahal is one of the seven wonders of the world
            <br />
            3. It has Islamic calligraphy inscriptions all over
            <br />
            4. Built from 1632 to 1653
            <br />
            5. Cars and buses must stay at least 500 meters away from Taj Mahal
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
