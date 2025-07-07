import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
 
    createUserRequest,
    createUserSuccess,
    createUserFailure,

} from '../slices/userSlice'
import { url } from './url'


function* createUserSaga(action){
    const {details} = action.payload

    try {
      
        const response = yield call(axios.post,`${url}/api/user/register`, details);
        yield put(createUserSuccess(response.data))
        const ownerId = response.data._id
        window.location.href = `/createbusiness/${ownerId}`;
     
    } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/register';
          }
        yield put(createUserFailure(error.response.data.message))
    }
}



function* userSaga(){
 
    yield takeLatest(createUserRequest.type, createUserSaga)

}

export default userSaga