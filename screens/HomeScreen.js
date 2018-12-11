import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Exercises',
    headerStyle: {
      marginBottom: 10
    },
    headerTitleStyle: {
      fontWeight: '600',
      fontSize: 30
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          'key': 'Pull-ups',
          'numReps': 5,
          'numSets': 4,
          'secRest': 30
        },
        {
          'key': 'Burpees',
          'numReps': 10,
          'numSets': 5,
          'secRest': 30
        },
      ]
    };
  }

  addExercise = (newExercise) => {
    if ('key' in newExercise && newExercise.key) {
      if (this.state.exercises.filter(e => e.key === newExercise.key).length > 0){
        return 'This exercise already exists!'
      } else {
        this.setState({
          exercises: this.state.exercises.concat([newExercise])
        });
        return ''
      }
    } else {
      return 'Exercise needs a name'
    }
  };

  componentDidMount() {
    const newExercise = this.props.navigation.getParam('newExercise', {});

      this.addExercise(newExercise);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <ScrollView style={styles.container}>

            <ExerciseList exercises={this.state.exercises} navigate={navigate} />

        </ScrollView>

        <View style={styles.buttonWrapper}>

          <Button
            title="New Exercise"
            onPress={() => navigate('New', {addExercise: this.addExercise})}
            color="green"
          />

        </View>

      </View>
    );
  }
}

class ExerciseList extends  React.PureComponent {

  render() {
    const navigate = this.props.navigate;

    return (
      <FlatList
        data={this.props.exercises}
        renderItem={({item}) =>
          <View style={styles.buttonWrapper}>
            <Button style={styles.exercise}
                    title={item.key}
                    onPress={() => navigate('Exercise', {exercise: item})} />
          </View>}
      />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  buttonWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginLeft: 10,
    marginRight: 10
  },

});
