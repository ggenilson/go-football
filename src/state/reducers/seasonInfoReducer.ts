import { SeasonInfoType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

const initialState: SeasonInfoType = {
  league: { id: 0, name: '', logo: '', type: '' },
  seasons: [{ year: 0 }],
};

const reducer = (state: SeasonInfoType = initialState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.SAVE_SEASON_INFO:
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
