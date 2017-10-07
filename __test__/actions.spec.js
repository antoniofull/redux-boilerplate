import { updateText } from '../src/actions';
import * as CST from '../src/constants';

describe('actions', () => {
  it('should create an action to add text', () => {
    const text = 'Hello';
    const expectedAction = {
      type: CST.UPDATE_TEXT,
      payload: text,
    };
    expect(updateText(text)).toEqual(expectedAction);
  });
});
