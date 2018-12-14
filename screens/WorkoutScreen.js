import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import globalStyles from '../components/GlobalStyles';

export default class WorkoutScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  render() {
    const { navigation } = this.props;
    const workout = navigation.getParam('workout', {});

    return (
      <View style={globalStyles.container}>

        <View style={styles.section}>

          <Text style={styles.title}>{workout.key}</Text>

          <FlatList data={workout.sequence}
                    renderItem={({item}) =>
                      <View style={globalStyles.itemWrapper}>
                        <Text style={styles.exercise}>{item.key}</Text>
                      </View>}
          />

        </View>

        <View style={[styles.section, styles.welcomeContainer]}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  section: {
    flex: 1,
    alignItems: 'stretch'
  },

  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 20
  },

  exercise: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
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
