import React from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text, TextInput} from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New Exercise',
  };

  state = {
    name: '',
    numReps: null,
    numSets: null,
    secRest: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => navigate('Home')}
          title="Return Home"
        />
        <View style={styles.formSection}>

          <Text style={styles.titleText}>Enter New Exercise</Text>

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

          <Button
            onPress={() => navigate('Home', {
              newExercise: {
                key: this.state.name,
                numReps: this.state.numReps,
                numSets: this.state.numSets,
                secRest: this.state.secRest
              }
            })}
            title="Create Exercise"
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
    textAlign: 'center'
  },

  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    marginBottom: 20
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
});
