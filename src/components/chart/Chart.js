
import React from 'react';

import {Bar} from 'react-chartjs-2';


class Chart extends React.Component{

    state = {
        chartData: {
            labels: this.props.labels,
            datasets: [
                {
                    label: 'Association Score vs Data Types',
                    data: this.props.values,
                    backgroundColor: 'rgba(255, 99, 132, 0.9)',                        
                    
                    
                }
            ],
            options: {
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'score',
                    },
                    ticks:{
                        beginAtZero: true
                    }

                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Data types'
                    },
                  }]
                }     
              }
        }
    }


    render(){

        return (
            <div>

                <Bar 
                    data={this.state.chartData}
                    options={this.state.chartData.options}
                />

            </div>
        )
    }
}

export default Chart;