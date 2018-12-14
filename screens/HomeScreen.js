import React from 'react';
import {ScrollView, FlatList, View, Button} from 'react-native';
import globalStyles from '../components/GlobalStyles';

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
      workouts: [
        {
          key: 'HIIT Workout',
          sequence: [
            {
              key: 'Push-ups',
              sets: 4,
              rest: 30
            },
            {
              key: 'Bicep curls',
              sets: 4,
              rest: 30
            }
          ]
        },
      ]
    };
  }

  addExercise = (newExercise) => {
    if ('key' in newExercise && newExercise.key) {
      if (this.state.workouts.filter(e => e.key === newExercise.key).length > 0){
        return 'This exercise already exists!'
      } else {
        this.setState({
          workouts: this.state.workouts.concat([newExercise])
        });
        return ''
      }
    } else {
      return 'Exercise needs a name'
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={globalStyles.container}>

        <ScrollView style={globalStyles.container}>

          <FlatList data={this.state.workouts}
                    renderItem={({item}) =>
                      <View style={globalStyles.itemWrapper}>
                        <Button title={item.key}
                                onPress={() => navigate('Workout', {workout: item})} />
                      </View>}
          />

          <View style={globalStyles.itemWrapper}>
            <Button
              title="+ New Workout"
              onPress={() => navigate('New', {addExercise: this.addExercise})}
              color="green"
            />
          </View>

        </ScrollView>

      </View>
    );
  }
}
