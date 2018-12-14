import React from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import globalStyles from '../components/GlobalStyles';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  state = {
    name: '',
    error: ''
  };

  async createExercise() {
    const { navigation } = this.props;
    const addWorkout = navigation.getParam('addWorkout', {});

    const error = await addWorkout({
      key: this.state.name,
    });

    if (error) {
      this.setState({error})
    } else {
      navigation.navigate('Home')
    }
  }

  render() {

    return (
      <View style={globalStyles.container}>

        <Text style={styles.titleText}>New Workout</Text>

        <Text style={styles.inputLabel}>Workout Name:</Text>
        <TextInput style={styles.textInput}
                   onChangeText={name => this.setState({name})}
        />

        <View style={globalStyles.itemWrapper}>
          <Button
            title="Create Exercise"
            onPress={() => this.createExercise()}
          />
        </View>

        <View style={styles.errorWrapper}>
          <Text style={styles.error}>{this.state.error}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 20
  },

  inputLabel: {
    marginLeft: 10
  },

  textInput: Object.assign({
    height: 50,
  }, globalStyles.itemWrapper),

  errorWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },

  error: {
    color: 'red'
  }

});
