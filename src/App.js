import React from 'react';
import './App.css';
import EnhancedTable from './components/table'

import DaterangePicker from './components/date'
import LineChart from './components/chart'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      data : [],
      tableData : [],
      uniqueGames: [],
      chartData : [],
      isLoading : true,
    };

  }

  onChange(field, value) {
    this.setState({[field]: value});
}


componentDidUpdate(){
  fetch(`http://www.mocky.io/v2/5cd04a20320000442200fc10`)
    .then(response => response.json())
    .then(data => {
      let k=[]
      let counter = 0
      let a = []

      data.map(field => {

        if ( new Date(field.timestamp + " 00:00:00.0") >= this.state.startDate && new Date(field.timestamp + " 00:00:00.0") <= this.state.endDate){
          let ecpm = field.revenue/field.impressions *1000

          a.push(field)
          a[counter]["ecpm"] = ecpm

          k[counter] = {id : counter+1, time: field.timestamp, game : field.game, revenue : field.revenue, impressions : field.impressions, "ecpm" : ecpm}
          counter = counter + 1
        }
      }
    )
    let games = ['Select Game']
    let g =  games.concat([...new Set(a.map(item => item.game))])
    this.setState({
      uniqueGames : g,
      tableData : k,
      data : a
    })

  }
    )
    .catch(error => this.setState({ error }));

}





render() {
  return (
    <div className="App">
      <DaterangePicker 
      startDate = {this.state.startDate}
      endDate = {this.state.endDate}
      onChange = {this.onChange.bind(this)}
      />

      <LineChart
      games = {this.state.uniqueGames}
      chartData = {this.state.data}
      />


      <EnhancedTable
      data = {this.state.tableData}
       />


    </div>
  );
}
}

export default App;
