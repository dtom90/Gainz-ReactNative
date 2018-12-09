import React from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text, TextInput} from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New Exercise',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Return Home"
        />
        <View style={styles.formSection}>
          <Text style={styles.titleText}>Enter New Exercise</Text>
          <TextInput
            style={styles.textInput}
            placeholder="enter new exercise"
            returnKeyType='done'
            // value={this.state.newTask}
            // onChangeText={newTask => this.setState({newTask})}
            // onSubmitEditing={event => this.addTask(event.nativeEvent.text)}
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
