import React from 'react'

import Card from './Card'
import { shallow } from 'enzyme'

it('expects to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
// $ npm test
