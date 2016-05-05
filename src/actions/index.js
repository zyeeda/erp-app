/**
 * Created by vimniky on 5/5/16.
 */

import * as types from './actionTypes'

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

// ....
