import React from 'react'

import CardList from './CardList'
import { shallow } from 'enzyme'

it('should render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Fritzy McGee',
      email: 'fritzy@mcgee.com'
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
