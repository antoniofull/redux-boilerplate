import * as CST from './constants';

export const updateText = val => ({
  type: CST.UPDATE_TEXT,
  payload: val,
});

export const otherAction = () => ({
  type: 'OTHER_ACTION',
});
