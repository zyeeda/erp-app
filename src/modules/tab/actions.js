/**
 * Created by vimniky on 5/6/16.
 */

import {ACTIVATE} from './constants'

export const activate = (index) => {
  return {
    type: ACTIVATE,
    index : index
  }
} ;
