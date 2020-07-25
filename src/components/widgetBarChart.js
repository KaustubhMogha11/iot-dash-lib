import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-colorschemes';

// widgetBarChart
export default class WidgetBarChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.state  = {
      data : [] 
    };
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.state.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.state.data.map(d => d.value);
    // console.log(global.mode);
    // setMode(global.mode);
    this.myChart.update();
    }

   componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
        legend: { labels: { fontColor: "#ccc", fontSize: 12  }  },
        plugins: { colorschemes: {  scheme: this.props.scheme  }  } ,
        maintainAspectRatio: false,
        responsive : true,
        scales: {
          yAxes: [{  
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        }
      },
      data: {
        labels: this.state.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          borderColor : 'rgba(255, 255, 255, 0.5)',
          borderWidth : 1,
          data: this.state.data.map(d => d.value),
        }]
      }
    });

    this.canvasRef.current.parentNode.style.height = '100%';
    this.canvasRef.current.parentNode.style.width = '100%';    
    this.interval = setInterval(() => {
      //console.log(this.props.dsinstid);
      this.setState({
        data : global.dsdata[this.props.dsinstid] ||[]
      });
    }, 5000);
  }

  render() {
        return (
            <div className= "container"  style = {{width : '100%', height : '90%'}}>
                <div className="card-body">
                    <h5 className="mr-auto">Bar Chart</h5>
                    <canvas ref={this.canvasRef} width="100%" height="200%"/>
                </div>
            </div>
        );
    }
}







