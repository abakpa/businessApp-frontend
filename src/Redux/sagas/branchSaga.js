import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
 
    createBranchRequest,
    createBranchSuccess,
    createBranchFailure,
    fetchBranchRequest,
    fetchBranchSuccess,
    fetchBranchFailure,

} from '../slices/branchSlice'
import { url } from './url'


function* createBranchSaga(action){
    const {details,businessId} = action.payload
    const data = {
        name:details.name,
        location:details.location,
        phone:details.phone,
        businessId:businessId
    }
    try {
      
        const response = yield call(axios.post,`${url}/api/branch`, data);
        yield put(createBranchSuccess(response.data))
        const ownerId = response.data._id
        window.location.href = `/createbusiness/${ownerId}`;
     
    } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/register';
          }
        yield put(createBranchFailure(error.response.data.message))
    }
}

function* fetchBranchSaga(action){
    const businessId = action.payload

    try {
      
        const response = yield call(axios.get,`${url}/api/branch?businessId=${businessId}`);
        yield put(fetchBranchSuccess(response.data))
     
    } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/register';
          }
        yield put(fetchBranchFailure(error.response.data.message))
    }
}



function* branchSaga(){
 
    yield takeLatest(createBranchRequest.type, createBranchSaga)
    yield takeLatest(fetchBranchRequest.type, fetchBranchSaga)

}

export default branchSaga