import * as ActionTypes from './actionTypes';

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    }
}


export const stateGetStockDataRequest = () => {
    return {
        type:ActionTypes.GET_STOCK_DATA_REQUEST
    }
}

export const getStockDataSuccess = () => {
    return {
        type: ActionTypes.GET_STOCK_DATA_SUCCESS,
        payload: {

        }
    }
}
