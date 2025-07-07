import {all} from 'redux-saga/effects'
import userSaga from './userSaga'
import businessSaga from './businessSaga'
import loginSaga from './loginSaga'
import branchSaga from './branchSaga'


export default function* rootSaga(){
    yield all([
        userSaga(),
        businessSaga(),
        loginSaga(),
        branchSaga(),
  
    ])
}