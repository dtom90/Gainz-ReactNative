import React from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  state = {
    name: '',
    numReps: null,
    numSets: null,
    secRest: null,
    error: ''
  };

  async createExercise() {
    const { navigation } = this.props;
    const addExercise = navigation.getParam('addExercise', {});

    const error = await addExercise({
      key: this.state.name,
      numReps: this.state.numReps,
      numSets: this.state.numSets,
      secRest: this.state.secRest
    });

    if (error) {
      this.setState({error})
    } else {
      navigation.navigate('Home')
    }
  }

  render() {

    return (
      <View style={styles.section}>

        <Text style={styles.titleText}>Enter a New Exercise</Text>

        <TextInput
          style={styles.textInput}
          placeholder="exercise name"
          returnKeyType='done'
          value={this.state.newExercise}
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.textInput}
          placeholder="reps per set"
          keyboardType="numeric"
          returnKeyType='done'
          value={this.state.numReps}
          onChangeText={numReps => this.setState({numReps})}
        />

        <TextInput
          style={styles.textInput}
          placeholder="sets per exercise"
          returnKeyType='done'
          value={this.state.numSets}
          onChangeText={numSets => this.setState({numSets})}
        />

        <TextInput
          style={styles.textInput}
          placeholder="seconds of rest between sets"
          returnKeyType='done'
          value={this.state.secRest}
          onChangeText={secRest => this.setState({secRest})}
        />

        <View style={styles.buttonWrapper}>
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

  section: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'white'
  },

  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 20
  },

  textInput: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },

  buttonWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginLeft: 10,
    marginRight: 10
  },

  errorWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },

  error: {
    color: 'red'
  }

});
