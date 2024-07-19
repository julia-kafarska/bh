import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Props} from './interfaces';
import {StackNavigationProp} from '@react-navigation/stack';

const Index: React.FC<Props> = ({route}) => {
  const {player} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{player.full_name}</Text>
      <Text style={styles.position}>Position: {player.position}</Text>
      <Text style={styles.position}>height: {player.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Index;
