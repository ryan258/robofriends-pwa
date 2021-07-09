// jest - running this test is built into CRA via react-scripts

//! shallow - useful bc it just renders the card component in this case
//          - it won't render child components as well, just the current one
//          - constrains you to unit testing, 1 component at a time
// 90% of the time you want to use shallow
//! shallow offers us a bunch of methods we can run on this component
//  - expect(shallow(<Card />).length).toEqual(1)
//! mount - does a FULL DOM rendering of the card - it MOUNTS - tests can affect eachother if they're all using the same DOM
// it's rare that you want to use this bc it complicates things and you want to keep your tests simple, clean and contained as possible
//        - ideal for when you have compononents that interact w/ the DOM API
//        - you want to test a lifecycle method
//        - needs to run in an env that at least looks like the browser env
//          - good to run in a headless browser - headless dom
import React from 'react'

import Card from './Card'
import { shallow, mount, render } from 'enzyme'

it('expects to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})
// $ npm test
