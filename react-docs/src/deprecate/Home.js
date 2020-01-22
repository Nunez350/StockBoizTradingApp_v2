import React from 'react';
import '../App.css';
import ReactDOM from'react-dom';
import { useSelector,useDispatch } from 'react-redux';
import * as ActionTypes from '../actions';

var slideIndex = 1;

function Home(props){
  const tracker = useSelector(state => state.increment );
  const stateReturn = useSelector(state => state.stateReturn)
  const dispatch = useDispatch();
    const element = (
      <div>
             {console.log("checj")}
        {console.log(props.ActionTypes.tracker)}
  
        <div id="homePage" onLoad={showSlides}>
          <br />
          <h1 id="homePageHeading" className="shadowing">Welcome to the Stock Boiz Website!</h1>
          <br />
          <div className="slideshow-container m-1 p-1">
            <div className="mySlides">
              <div className="numbertext">1 / 6</div>
                <img alt="" src={require('../images/stocks1.jpg')} />
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 6</div>
                <img alt="" src={require('../images/stocks2.jpg')} />
            </div>

            <div className="mySlides">
              <div className="numbertext">3 / 6</div>
                <img alt="" src={require('../images/stocks3.jpg')} />
            </div>

            <div className="mySlides">
              <div className="numbertext">4 / 6</div>
                <img alt="" src={require('../images/stocks4.jpg')} />
            </div>

            <div className="mySlides">
              <div className="numbertext">5 / 6</div>
                <img alt="" src={require('../images/stocks5.jpg')} />
            </div>

            <div className="mySlides">
              <div className="numbertext">6 / 6</div>
                <img alt="" src={require('../images/stocks6.jpg')} />
            </div>

            <button className="prev" onClick={prevSlides}>&#10094;</button>
            <button className="next mx-1" onClick={plusSlides}>&#10095;</button>
          </div>

     </div>
        <div className="Home"> 
          <h1> Tracker {tracker}</h1>
          <h2> {stateReturn}</h2>
        {/* <button onClick={() => dispatch(tracker())}> + </button>  */}\
           <button onClick={ props.onIncrementCounter}> + </button> 
 
         {/* {isLogged ? <h3> Valuable Info </h3> : ''} */}

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
     
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// // Next/previous controls
// function plusSlides() {
//   var n=1;
//   showSlides(slideIndex += n);
// }

// function prevSlides() {
//   var n=-1;
//   showSlides(slideIndex += n);
// }

// function showSlides() {
//   var n = slideIndex;
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   console.log(slides.length);
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex-1].style.display = "block";
//   //dots[slideIndex-1].className += " active";
// }

// // export default Home
