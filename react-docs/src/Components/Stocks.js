import React from 'react';
import '../App.css';
//import Plot from 'react-plotly.js';
import axios from 'axios';
import { connect } from 'react-redux';


// var stockCode = "MSFT";

// var currentDate = new Date();
// var yesterday = new Date();
// currentDate = currentDate.toISOString().split('T')[0];
// yesterday.setDate(yesterday.getDate()-1);
// yesterday = yesterday.toISOString().split('T')[0];
// console.log(currentDate);
// console.log(yesterday);
// stockCode: "",
// open: "",
// close: "",
// sma: "",
// period: "",
// json: [],
// stockChartXValue: [],
// stockChartYValue: [],
class StockSearch extends React.Component{

  constructor(props){
    super(props);
    this.state = {
     
      dataR:[]
    };
  }



  render() {
    return (
   <div>
     
   </div>
      )
  }
}

// export default StockSearch;


const mapStateToProps = (state) => {
  return {
    ...state,
      data: state.data ="aaa",
  }
}




// const mapDispatchToProps = dispatch => {
//   return {
//       // onDeleteTodo: (id) => dispatch({ type: ActionTypes.DELETE_TODO, id: id })
//   }
// };

export default connect(mapStateToProps)(StockSearch);


// -----


// const mapStateToProps = state => {
//   return {
//       ctr: state.ctr.counter,
//       storedResults: state.res.results
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
 
//       onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
//       onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id),console.log(id))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);

