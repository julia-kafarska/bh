import {RouteProp} from '@react-navigation/native';
import {Player} from '../../PlayersList/interfaces';

type RootStackParamList = {
  PlayerList: undefined;
  PlayerDetails: {player: Player};
};

type PlayerDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'PlayerDetails'
>;

export type Props = {
  route: PlayerDetailsScreenRouteProp;
};
