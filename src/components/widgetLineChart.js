import React from 'react'
import Chart from 'chart.js'
import 'chartjs-plugin-colorschemes'

// LineChart
export default class WidgetLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      // data: this.getData(this.props.dsinstid)
      title: this.props.title ,
      scheme: this.props.scheme ,
      color: this.props.color ,
      data:  []
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.state.data.map((d) => d.time);
    this.myChart.data.datasets[0].data = this.state.data.map((d) => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        plugins: { colorschemes: { scheme: this.state.scheme } },
        responsive: true,
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'linear',
              time: {
                unit: 'days',
                unitStepSize: 1,
                displayFormats: {
                  second: 'ss',
                  minute: 'h:mm:ss a'
                }
              },
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        }
      },
      data: {
        labels: this.state.data.map((d) => d.time),
        datasets: [
          {
            label: this.state.title,
            data: this.state.data.map((d) => d.value),
            fill: 'none',
            backgroundColor: this.state.color,
            pointRadius: 2,
            borderColor: this.state.color,
            borderWidth: 1,
            lineTension: 0.3
          }
        ]
      }
    })

    
    this.canvasRef.current.parentNode.style.height = '100%'
    this.canvasRef.current.parentNode.style.width = '100%'
    
    this.interval = setInterval(() => {
      //console.log(this.props.dsinstid);
      //console.log(this.props.getdata(this.props.dsinstid));
    
      // this.setState({
      //   data: this.props.getdata(this.props.dsinstid) || []
      // });

    this.setState(prevState => ({
      data: [...prevState.data, this.props.getdata(this.props.dsinst) ]
    }))
    

    }, 5000);
  }

  render() {
    return (
      <div className='container' style={{ width: '100%', height: '90%' }}>
        <div className='card-body'>
          <h5 className='mr-auto'>Line Chart</h5>
          <canvas ref={this.canvasRef} width='100%' height='200%' />
        </div>
      </div>
    )
  }
}
