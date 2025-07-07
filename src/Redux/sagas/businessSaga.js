import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
 
    createBusinessRequest,
    createBusinessSuccess,
    createBusinessFailure,

} from '../slices/businessSlice'
import { url } from './url'


function* createBusinessSaga(action){
    const {details,ownerId} = action.payload

    try {
      
        const response = yield call(axios.post,`${url}/api/business/${ownerId}`, details);
        yield put(createBusinessSuccess(response.data))
        // const businessId = response.data._id
        window.location.href = `/login`;
     
    } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/register';
          }
        yield put(createBusinessFailure(error.response.data.message))
    }
}



function* businessSaga(){
 
    yield takeLatest(createBusinessRequest.type, createBusinessSaga)

}

export default businessSaga