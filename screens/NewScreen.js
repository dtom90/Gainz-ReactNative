import React from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text, TextInput} from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New Exercise',
  };

  state = {
    newExercise: ''
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
            placeholder="enter new exercise"
            returnKeyType='done'
            value={this.state.newExercise}
            onChangeText={newExercise => this.setState({newExercise})}
          />
          <Button
            onPress={() => navigate('Home', {newExercise: this.state.newExercise})}
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

  formSection: {
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
