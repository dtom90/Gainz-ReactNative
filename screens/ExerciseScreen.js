import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';

export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', {});
    const numReps = navigation.getParam('numReps', {});
    const numSets = navigation.getParam('numSets', {});
    const secRest = navigation.getParam('secRest', {});

    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.section}>

          <Text style={styles.titleText}>{name}</Text>

          <Text style={styles.exercise}>Number of reps: {numReps}</Text>
          <Text style={styles.exercise}>Number of sets: {numSets}</Text>
          <Text style={styles.exercise}>Seconds of rest: {secRest}</Text>

        </View>

        <View style={[styles.section, styles.welcomeContainer]}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
          />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  section: {
    flex: 1,
    alignItems: 'stretch'
  },

  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 20
  },

  exercise: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginLeft: 10,
    marginRight: 10
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

});
