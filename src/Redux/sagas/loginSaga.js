import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
 
    createLoginRequest,
    createLoginSuccess,
    createLoginFailure,

} from '../slices/loginSlice'
import { url } from './url'


function* createLoginSaga(action){
    console.log("HHHHHH",action)
    const {details} = action.payload

    try {
      
        const response = yield call(axios.post,`${url}/api/auth/login`, details);
        const { token,user } = response.data;
       
        yield put(createLoginSuccess(response.data))
        const businessId = user.businessId
        if(businessId===null){
            window.location.href = `/createbusiness/${user.userId}`;
        }else{
            localStorage.setItem('authToken', token);
            localStorage.setItem('userId', user.userId);
            localStorage.setItem('firstName', user.firstName);
            localStorage.setItem('lastName', user.lastName);
            localStorage.setItem('userRole', user.role);
            localStorage.setItem('businessId', user.businessId);
        window.location.href = `/businessdashboard/${businessId}`;
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
          }
        yield put(createLoginFailure(error.response.data.message))
    }
}



function* loginSaga(){
 
    yield takeLatest(createLoginRequest.type, createLoginSaga)

}

export default loginSaga