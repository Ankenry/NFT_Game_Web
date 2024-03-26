import { takeLatest, put } from "redux-saga/effects";
import { saveToken } from "./tokenSlice";

function* saveTokenSaga(action) {
    try {
        yield put(saveToken(action.payload));
    } catch (error){
        console.error('Faild save Token:',error);
    }
}

export function* tokenSaga(){
    yield takeLatest('token/getToken', saveTokenSaga);
}