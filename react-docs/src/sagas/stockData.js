import { takeEvery, takeLatest, take, call , fork , put } from 'redux-saga/effects';
import * as ActionTypes from '../actions/index';
import * as api from '../api/indicators';


function* getStockData() {
    try{
        const result = yield call(api.getStockData)
        yield put(ActionTypes.getStockDataSuccess)
    }catch(e) {
        
    }

}

function* watchFetchStockData(){
    yield takeEvery(ActionTypes.GET_STOCK_DATA_REQUEST, getStockData);

}