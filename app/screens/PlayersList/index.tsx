import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {
  View,
  FlatList,
  Button,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Player, Props} from './interfaces';

const PAGE_SIZE = 20;

const PlayerList: React.FC<Props> = ({navigation}) => {
  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadPlayers();
  }, [searchQuery, page]);

  const loadPlayers = async () => {
    setLoading(true);
    const {data} = await axios.get(
      `http://10.0.2.2:3000/players?limit=${PAGE_SIZE}&page=${page}&search=${searchQuery.toLowerCase()}`,
    );
    if (data.data) {
      setPlayers(data.data);
    }
    setLoading(false);
  };

  const handleLoadMore = (value: number) => {
    setPage(page + value);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Players"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={players}
        keyExtractor={item => item.player_id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PlayerDetails', {player: item})
            }>
            <Text style={styles.item}>{item.full_name}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={renderFooter}
      />
      {page > 1 && (
        <Button title={`prev page`} onPress={() => handleLoadMore(-1)} />
      )}
      <Button title={`next page`} onPress={() => handleLoadMore(1)} />
      <Text>Page no: {page}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PlayerList;
