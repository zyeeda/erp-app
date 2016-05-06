/**
 * Created by vimniky on 5/6/16.
 */

import { handleActions } from 'redux-actions'
import { ACTIVATE } from './constants'

const initialState = {
  currentActiveIndex : 0
};

export default handleActions({
  [ACTIVATE]: (state, action) => {
    return Object.assign({}, state , {
      currentActiveIndex : action.index
    });
  }
}, initialState)
