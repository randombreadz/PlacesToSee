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

export default class Paris extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Mountains.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Paris</Text>
          </View>
          <Image
            source={require('../assets/Paris.jpg')}
            style={styles.image}></Image>
          <Paragraph>
            Want to go to France? Go to Paris and see the Eiffel tower! Here are
            5 interesting facts about the Eiffel tower:
            <br />
            <br />
            1. The Eiffel Tower was supposed to be torn down after 20 years
            <br />
            2. There’s a military bunker underneath the Eiffel Tower
            <br />
            3. The Eiffel Tower is covered in names of scientists
            <br />
            4. It was built to celebrate the centennial of the French Revolution
            <br />
            5. Built in 1887
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
