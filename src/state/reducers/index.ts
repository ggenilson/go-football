import { combineReducers } from 'redux';
import leagueReducer from './leagueReducer';
import seasonInfoReducer from './seasonInfoReducer';

export const reducers = combineReducers({
  league: leagueReducer,
  seasonInfo: seasonInfoReducer,
});

export type ApplicationState = ReturnType<typeof reducers>;
