import { createAction, handleActions } from 'redux-actions'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/merge'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/partition'

// actionTypes
const FETCH_USER = 'FETCH_USER'
const FETCH_USER_FAIL = 'FETCH_USER_FAIL'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

// actions
const searchUserFail = createAction(FETCH_USER_FAIL)
const searchUserSuccess = createAction(FETCH_USER_SUCCESS)
export const searchUser = createAction(FETCH_USER)

// reducers
const user = handleActions({
  [FETCH_USER_SUCCESS]: (state, { payload }) => ({ ...state, ...payload }),
  [FETCH_USER_FAIL]: (state, error) => {
    console.log(error)
  }
}, {})

export const reducers = {
  user
}

// epics
const searchUserEpics = action$ => action$.ofType(FETCH_USER)
  .mergeMap(action => {
    const [success, error] = Observable
      // .fromPromise(axios.get('/api/user/data', action.payload))
      .fromPromise(new Promise(resolve => {
        resolve({
          success: true,
          data: action.payload
        })
      }))
      .partition(x => x.success)

    const success$ = success.map(x => searchUserSuccess(x.data))
    const error$ = error.map(x => searchUserFail(x.error))
    return Observable.merge(success$, error$)
  })

export const epics = [
  searchUserEpics
]
