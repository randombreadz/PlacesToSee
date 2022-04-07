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

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/city.jpeg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Places to See</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Delhi')}>
            <Text style={styles.routeText}> Delhi</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Hungary')}>
            <Text style={styles.routeText}> Hungary</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('NewYork')}>
            <Text style={styles.routeText}>New York</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Paris')}>
            <Text style={styles.routeText}> Paris</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
          </TouchableOpacity>
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
  routeCard: {
    flex: 0.8,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 35,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
    paddingLeft: 40,
    alignItems: 'center',
  },
  knowMore: {
    paddingLeft: 60,
    color: '#476C86',
    fontSize: 15,
  },
});
