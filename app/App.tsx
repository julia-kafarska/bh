import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlayerList from './screens/PlayersList';
import PlayerDetails from './screens/PlayersDetails';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PlayerList">
        <Stack.Screen
          name="PlayerList"
          component={PlayerList}
          options={{title: 'Player List'}}
        />
        <Stack.Screen
          name="PlayerDetails"
          component={PlayerDetails}
          options={{title: 'Player Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
