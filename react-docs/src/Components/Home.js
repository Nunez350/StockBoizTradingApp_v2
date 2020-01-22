import React from 'react';
import '../App.css';
import ReactDOM from'react-dom';
import { useSelector,useDispatch } from 'react-redux';
import * as ActionTypes from '../actions';
import { connect } from 'react-redux';
var slideIndex = 1;

function Home(props){
  const tracker = useSelector(state => state.increment );
  const stateReturn = useSelector(state => state.stateReturn)
  const dispatch = useDispatch();
    
  
  
  const element = (
      <div>
             {console.log("checj")}
        {console.log(tracker)}
  

            {/* <button className="prev" onClick={prevSlides}>&#10094;</button>
            <button className="next mx-1" onClick={plusSlides}>&#10095;</button> */}
      

     
        <div className="Home"> 
          <h1> Tracker {tracker}</h1>
          <h2> {stateReturn}</h2>
        {/* <button onClick={() => dispatch(tracker())}> + </button>  */}\
           <button onClick={ props.onIncrementCounter}> + </button> 
 
       

          </div>
       
    

     </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    return element;
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onIncrementCounter: () => dispatch(ActionTypes.increment()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
