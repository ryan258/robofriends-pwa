import * as actions from './actions'

import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])

describe('test actions', () => {
  it('should create an action to search robots', () => {
    const text = 'beep'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
  // time to handle a dispatch in a test w/ thunk!
  it('handles requesting robots API', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions()
    // action will now contain what we need
    // console.log('action', action) // an array of actions
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
      // and we're not sending any payloads
    }
    expect(action[0]).toEqual(expectedAction)
  })
})
