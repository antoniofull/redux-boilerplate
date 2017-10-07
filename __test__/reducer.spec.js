import reducer from '../src/reducer';
import * as CST from '../src/constants';

describe('testing reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      text: '',
    });
  });
  it('should handle UPDATE_TEXT', () => {
    expect(
      reducer(
        {},
        {
          type: CST.UPDATE_TEXT,
          payload: 'hello',
        },
      ),
    ).toEqual({
      text: 'hello',
    });
  });
});
