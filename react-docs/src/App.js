import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import StockSearch from './Components/Stocks';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import { Provider } from 'react-redux';

// import { useSelector,useDispatch } from 'react-redux';
// import { stocktrack } from './actions';


function App(){
 
  const element = (
    
      <Router>
        
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/hometest" render={() => <Home />}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/contacttest" render={() => <Contact />}/>
              <Route path="/stocks" component={StockSearch}/>
              <Route path="/login" component={Login}/>
              <Route path="/*" component={PageNotFound}/>
            </Switch>
        </Router>
        

    );
    return (
//      
      element
      );
}

export default App;

//store -> globalized state
//action i.g. schange stock

//reducer - describes how your actions transfor the state into the next state
 //is going to modify your store based on the action

//dispatch - execute the action

 // const tracker = useSelector(state => state.stocktrack );
  // const isLogged = useSelector(state => state.isLogged);
  // const dipatch = useDispatch();


//     <div className="App"> 
//       <h1> Tracker {tracker}</h1>
// {/*       
//       <button onClick=[() => dispatch(stocktrack())]> +</button> */}
//       {isLogged ? <h3> Valuable Info </h3> : ''}
//     </div>