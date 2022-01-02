import React from 'react'
import Chart from 'chart.js'
import 'chartjs-plugin-colorschemes'

// Doughnut
export default class WidgetDoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      title: this.props.title ,
      scheme: this.props.scheme ,
      color: this.props.color ,
      data:  []
    }
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.state.data.map((d) => d.label);
    this.myChart.data.datasets[0].data = this.state.data.map((d) => d.value);
    this.myChart.update();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { colorschemes: { scheme: this.props.scheme } }
      },
      data: {
        labels: this.state.data.map((d) => d.label),
        datasets: [
          {
            data: this.state.data.map((d) => d.value)
            // backgroundColor: this.props.colors
          }
        ]
      }
    })

    this.canvasRef.current.parentNode.style.height = '100%'
    this.canvasRef.current.parentNode.style.width = '100%'
    this.interval = setInterval(() => {
      // console.log(this.props.dsinstid);
      // console.log(this.props.getdata(this.props.dsinstid));
      this.setState({
        data: this.props.getdata(this.props.dsinstid) || []
      //data: global.datatable.dsdata[this.props.dsinstid] || []
      });
    }, 5000);
  }

  render() {
    return (
      <div className='container' style={{ width: '100%', height: '90%' }}>
        <div className='card-body'>
          <h5 className='mr-auto'>Doughnut Chart</h5>
          <canvas ref={this.canvasRef} width='100%' height='200%' />
        </div>
      </div>
    )
  }
}
