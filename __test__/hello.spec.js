import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Hello from '../src/components/Hello';

Enzyme.configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<Hello />);

describe('Test <App> Component', () => {
  it('renders without exploding', () => {
    expect(enzymeWrapper).toHaveLength(1);
  });
});
