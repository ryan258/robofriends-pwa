import React from 'react'

import MainPage from './MainPage'
import { shallow } from 'enzyme'

let wrapper

// beforeEach() - runs before each test, cuts down on repetition
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(), // fake the fn call
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage w/o crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(), // fake the fn call
    robots: [
      {
        id: 3,
        name: 'Bender',
        email: 'bender@wwf.com'
      }
    ],
    searchField: 'bender',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  // .instance() will give us access to all the methods on the component being tested
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'Bender',
      email: 'bender@wwf.com'
    }
  ])
})

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'Bender',
        email: 'bender@wwf.com'
      }
    ],
    searchField: 'a',
    isPending: false
  }

  const filteredRobots = []

  const wrapper3 = shallow(<MainPage {...mockProps3} />)

  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
})
