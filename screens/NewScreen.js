import React from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import globalStyles from '../components/GlobalStyles';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  state = {
    name: '',
    sequence: [{key: '0', exercise: ''}],
    newExercise: false,
    error: ''
  };

  async createWorkout() {
    const { navigation } = this.props;
    const addWorkout = navigation.getParam('addWorkout', {});

    const error = await addWorkout({
      key: this.state.name,
      sequence: this.state.sequence
    });

    if (error) {
      this.setState({error})
    } else {
      navigation.navigate('Home')
    }
  }

  modifyExercise(name, index) {
    const sequence = this.state.sequence;
    sequence[index].exercise = name;

    let newExercise = false;
    if (index === sequence.length-1)
      newExercise = true;

    this.setState({sequence, newExercise})
  }

  addExercise() {
    const sequence = this.state.sequence;
    sequence.push({key: sequence.length.toString(), exercise: ''});
    this.setState({sequence, newExercise: false});
  }

  render() {

    return (
      <View style={globalStyles.container}>

        <Text style={styles.title}>New Workout</Text>

        <Text style={styles.inputLabel}>Workout Name:</Text>
        <TextInput style={styles.textInput}
                   onChangeText={name => this.setState({name})}
        />

        <Text style={[styles.title, styles.sectionTitle]}>Workout Sequence</Text>

        {this.state.sequence.map((item, i) =>
          <TextInput key={i}
                     style={styles.textInput}
                     value={item.exercise}
                     onChangeText={text => this.modifyExercise(text, i)}
          />
        )}

        {this.state.newExercise &&
        <View style={globalStyles.itemWrapper}>
          <Button
            title="+ New Workout"
            color="green"
            onPress={() => this.addExercise()}
          />
        </View>
        }

        <View style={globalStyles.itemWrapper}>
          <Button
            title="Create Workout"
            onPress={() => this.createWorkout()}
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

  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 20
  },

  sectionTitle: {
    fontSize: 20,
  },

  inputLabel: {
    marginLeft: 10
  },

  textInput: Object.assign({height: 50}, globalStyles.itemWrapper),

  errorWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },

  error: {
    color: 'red'
  }

});
