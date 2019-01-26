import React from 'react';
import {ScrollView, FlatList, View, Button} from 'react-native';
import globalStyles from '../components/GlobalStyles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
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
          key: 'Full Body Circuit',
          sequence: [
            {
              key: '0',
              exercise: 'Pull-ups',
              sets: 4,
              rest: 30
            },
            {
              key: '1',
              exercise: 'Crunches',
              sets: 4,
              rest: 30
            },
            {
              key: '2',
              exercise: 'Push-ups',
              sets: 4,
              rest: 30
            },
            {
              key: '3',
              exercise: 'Squats',
              sets: 4,
              rest: 30
            }
          ],
          rounds: 1
        },
      ]
    };
  }

  addWorkout = (newWorkout) => {
    if ('key' in newWorkout && newWorkout.key) {
      if (this.state.workouts.filter(e => e.key === newWorkout.key).length > 0) {
        return 'This workout name already exists'
      } else {
        if (!newWorkout.sequence[0].exercise) {
          return 'You must name at least one exercise in your workout sequence'
        } else {
          newWorkout.sequence = newWorkout.sequence.filter(ex => ex.exercise);
          this.setState({
            workouts: this.state.workouts.concat([newWorkout])
          });
          return ''
        }
      }
    } else {
      return 'Workout needs a name'
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
              onPress={() => navigate('New', {addWorkout: this.addWorkout})}
              color="green"
            />
          </View>

        </ScrollView>

      </View>
    );
  }
}
