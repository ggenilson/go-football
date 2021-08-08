import { Dispatch } from 'redux';

import { LeagueType, SeasonInfoType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

export const saveStandings = (value: LeagueType) => {
  return (dispatch: Dispatch<ActionProps>) => {
    dispatch({
      type: ActionType.SAVE_STANDINGS,
      payload: value,
    });
  };
};

export const saveSeasons = (value: SeasonInfoType) => {
  return (dispatch: Dispatch<ActionProps>) => {
    dispatch({
      type: ActionType.SAVE_SEASON_INFO,
      payload: value,
    });
  };
};
