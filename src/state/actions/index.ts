import { LeagueType, SeasonInfoType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';

interface SaveStandingsAction {
  type: ActionType.SAVE_STANDINGS;
  payload: LeagueType;
}

interface SaveSeasonInfoAction {
  type: ActionType.SAVE_SEASON_INFO;
  payload: SeasonInfoType;
}

export type ActionProps = SaveStandingsAction | SaveSeasonInfoAction;
