import React from 'react';
import '../App.css';
//import Plot from 'react-plotly.js';
import axios from 'axios';
import { connect } from 'react-redux';


var stockCode = "MSFT";

var currentDate = new Date();
var yesterday = new Date();
currentDate = currentDate.toISOString().split('T')[0];
yesterday.setDate(yesterday.getDate()-1);
yesterday = yesterday.toISOString().split('T')[0];
console.log(currentDate);
console.log(yesterday);

class StockSearch extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      stockCode: "",
      open: "",
      close: "",
      sma: "",
      period: "",
      json: [],
      stockChartXValue: [],
      stockChartYValue: [],
      dataR:[]
    };
  }


  loadPage = () => {
    stockCode = (document.getElementById('stockEntry').value);
    this.setState({stockCode: (document.getElementById('stockEntry').value)});
   
    axios.get('http://localhost:8080/stock' + stockCode)
      .then( (response) => {
        console.log("Response: " + response.data);
        stockCode = response.data;
        this.setState({stockCode: response.data});
        return response.data
      }).then((response) => {
        console.log("after the then:" + response); 
        if(response === "Nothing"){
          alert("Invalid Entry");
        }else{
          this.fetchStock(response);
        }
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  }

  getSMA = (theCode) => {
    this.setState({period: (document.getElementById('selectDrop').value)})
    fetch(`https://www.alphavantage.co/query?function=SMA&symbol=${theCode}&interval=daily&time_period=${this.state.period}&series_type=open&apikey=QWAZUD4WW32N18NDs`)
    .then(res => res.json())
    .then((data) => {
     var set = data['Technical Analysis: SMA'];
     var firstKey = Object.keys(set)[0];
     console.log(firstKey);
     this.setState({sma: data['Technical Analysis: SMA'][firstKey]['SMA']});
     console.log(this.state.sma);
    })
    .catch(console.log)
  }

  fetchStock = (code) => {
    const pointerToThis = this;
    const API_KEY = 'QWAZUD4WW32N18ND';
    let DAILY_API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${code}&outputsize=compact&apikey=${API_KEY}`;
    console.log(DAILY_API_CALL)
    let stockChartXValueFunction = [];
    let stockChartYValueFunction = [];

    fetch(DAILY_API_CALL)
      .then(
        (response) => {
          return response.json();
        }
      )
      .then(
        (data) => {

          console.log(data);
          
          if('Error Message' in data){
            //console.log("Error Block");
          }else{
            //console.log("Not erroring out");
          }

          // for(var key in data['Time Series (Daily)']){
          //   stockChartXValueFunction.push(key);
          //   stockChartYValueFunction.push(data['Time Series (Daily)'][key][`1. open`]);
          // }

          try{
            this.setState({open: data['Time Series (Daily)'][currentDate][`1. open`]});
            this.setState({close: data['Time Series (Daily)'][currentDate][`4. close`]});
            //this.setState({stockCode: data['Meta Data']["2. Symbol"]});

            //this.setState({stockCode: stockEntry.value});
            //open = data['Time Series (Daily)'][currentDate][`1. open`];
            //close = data['Time Series (Daily)'][currentDate][`4. close`];
            this.getSMA(code);
          }catch(Exception){
           // this.getStockSymbol();
            console.log("In last catch block");
          }finally{
          pointerToThis.setState({
            stockChartXValue: stockChartXValueFunction,
            stockChartYValue: stockChartYValueFunction
          });
          }
        }
      )//.then(this.render());
      
  }

  addToList(){
    alert("Added");
  }

  componentDidMount(){
    var myDropDownMenu = document.getElementById('selectDrop');
    myDropDownMenu.addEventListener('change', () => {
      this.getSMA(this.state.stockCode);
    });
  }


  render(){
    return(
      <div id="myStockPageDiv" className="container-fluid">
        <h1 id="stockPageHeading">Stock Page!</h1>
        <input type="text" id="stockEntry" className="m-1" />
        <button onClick={this.loadPage} className="btn btn-primary">Search</button>
        <br />
        <br />
        {/* <p id="xValues">x-values: {this.state.stockChartXValue}</p>
        <p id="yValues">y-values: {this.state.stockChartYValue}</p> */}
        <div id="" className="row container-fluid">
          <div className="col-2 container myColDivs">
            <p className="columnTitles">Stock Ticker</p>
            <br />
            <a href="" className="blueText">{this.state.stockCode}</a>
          </div>
          <div className="col-2 container myColDivs">
           <p className="columnTitles">Probability of Success</p>
          </div>
          <div className="col-2 container myColDivs">
            <p className="columnTitles">Buy Bid</p>
          </div>
          <div className="col-1 container myColDivs">
          <p className="columnTitles">Open</p>
            <br />
            <p className="blueText container myColDivs">{this.state.open}</p>
          </div>
          <div className="col-1 container myColDivs">
            <p className="columnTitles">Close</p>
            <br />
            <p className="blueText">{this.state.close}</p>
          </div>
          <div className="col-3 container myColDivs">
            <p className="columnTitles">SMA</p>
            <select id="selectDrop">
              <option value="10">10 Days</option>
              <option value="50">50 Days</option>
              <option value="100">100 Days</option>
              <option value="150">150 Days</option>
              <option value="200">200 Days</option>
            </select>
            <br />
            <p className="blueText">{this.state.sma}</p>
          </div>
          <div className="col-1 container myColDivs">
            <button className="btn btn-danger">View Graph</button>
          </div>
          {/* <div className="col-8 container">
            <Plot
            data={[
              {
                x:this.state.stockChartXValue,
                y:this.state.stockChartYValue,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'green'},
              },
              // {type: 'bar', x: [1, 2, 3], y:[2, 5, 3]},
            ]}
            style={{width: '100%', height: '100%', title: `${stockCode} stock graph`, autosize: true, margin: '5'}}
           
            // Plotly.newPlot('myDiv', data, layout, {responsive: true});
            />
           </div> */}
        </div>
        <br />
        <button className="btn btn-success fixed-bottom m-2 p-1" onClick={this.addToList}>Add To My List!</button>
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

