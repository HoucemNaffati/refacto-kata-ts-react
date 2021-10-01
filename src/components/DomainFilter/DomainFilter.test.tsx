import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const props = {countriesOptions: [],
          classificationsOptions: [],
          subClassificationsOptions: []}
      const wrapper = shallow(<DomainFilter domains={props} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })
})
