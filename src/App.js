import React from 'react';
import './App.css';
import axios from 'axios';

import MainComponent from './components/mainComponent/mainComponent';


class App extends React.Component {


  state = {
    data: ''
  }

  async componentDidMount(){

    const res = await axios.get('https://demo6922545.mockable.io/');
    
    const data = res.data.data;

    const sortedData = data.sort((a, b) => b.association_score.overall - a.association_score.overall)
    this.setState({
      data: sortedData
    })
    
  }

  render(){

    return this.state.data ? 
    
    (
      <div className="App">
        
        <MainComponent data={this.state.data}/>
  
  
      </div>
    )
    :
    ('')

  }
  
}

export default App;
