import axios from 'axios';

export const getIndicators =() => {
    return axios.get('/indicators', {

    })
}


export const getStockData =() => {
    return axios.get('/getStockData', {

    })
}

