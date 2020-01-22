import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

const sagaMiddleware = createSagaMiddleware(createSagaMiddleware)


const store = createStore(allReducer, 
   composeWithDevTools(applyMiddleware(sagaMiddleware))

  );


// const store = createStore(allReducer, applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>, 
        document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

