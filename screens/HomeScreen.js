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

  state = {
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

  addExercise = (newExercise) => {
    this.setState({
      exercises: this.state.exercises.concat([newExercise])
    });
  };

  componentDidMount() {
    const newExercise = this.props.navigation.getParam('newExercise', {});
    if('key' in newExercise)
      this.addExercise(newExercise);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <ScrollView style={styles.container}>

            <ExerciseList exercises={this.state.exercises} navigate={navigate} />

        </ScrollView>

        <Button
          onPress={() => navigate('New')}
          title="New Exercise"
        />

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
        renderItem={({item}) => <Button style={styles.exercise}
                                        title={item.key}
                                        onPress={() => navigate('Exercise', {
                                          name: item.key,
                                          numReps: item.numReps,
                                          numSets: item.numSets,
                                          secRest: item.secRest
                                        })} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  exerciseSection: {
    flex: 2
  },
  exercise: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    marginLeft: 10,
    marginRight: 10
  },
});
