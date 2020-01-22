import React from 'react';
import '../App.css';
import ReactDOM from'react-dom'


function PageNotFound(){
    const element = (

        <img alt="" id="PageNotFoundImage" src={require('../images/PageNotFound.png')}></img>
        
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    return element;
}


export default PageNotFound;