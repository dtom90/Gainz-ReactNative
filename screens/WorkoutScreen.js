import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
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
                        <Text style={styles.exercise}>{item.exercise}</Text>
                      </View>}
          />

          <View style={globalStyles.itemWrapper}>
            <Text style={styles.exercise}>Rounds: {workout.rounds}</Text>
          </View>

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
    textAlign: 'center',
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
