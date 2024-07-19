import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  PlayerList: undefined;
  PlayerDetails: {player: Player};
};

type PlayerListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PlayerList'
>;

export type Props = {
  navigation: PlayerListScreenNavigationProp;
};
export interface Player {
  active: boolean;
  age: string;
  birth_city: string | null;
  birth_country: string | null;
  birth_date: string;
  birth_state: string | null;
  college: string;
  competitions: any[]; // TODO
  depth_chart_order: number | null;
  depth_chart_position: string | null;
  espn_id: string;
  fantasy_data_id: string;
  fantasy_positions: any[]; // TODO
  first_name: string;
  full_name: string;
  gsis_id: string | null;
  hashtag: string;
  height: string;
  high_school: string | null;
  injury_body_part: string | null;
  injury_notes: string | null;
  injury_start_date: string | null;
  injury_status: string | null;
  last_name: string;
  metadata: any | null; // TODO
  news_updated: string | null;
  number: string;
  oddsjam_id: string | null;
  opta_id: string | null;
  pandascore_id: string | null;
  player_id: string;
  position: string;
  practice_description: string | null;
  practice_participation: string | null;
  rotowire_id: string;
  rotoworld_id: string | null;
  search_first_name: string;
  search_full_name: string;
  search_last_name: string;
  search_rank: string;
  sport: string;
  sportradar_id: string;
  stats_id: string | null;
  status: string;
  swish_id: string | null;
  team: string | null;
  team_abbr: string | null;
  weight: string;
  yahoo_id: string;
  years_exp: string;
}
