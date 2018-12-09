import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
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
      {'key': 'Push-ups'},
      {'key': 'Pull-ups'},
      {'key': 'Dips'},
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

            <ExerciseList exercises={this.state.exercises} />

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
    return (
      <FlatList
        data={this.props.exercises}
        renderItem={({item}) => <Text style={styles.exercise}>{item.key}</Text>}
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
