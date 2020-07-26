import React from 'react'
import styles from './styles.module.css'

import ChartJS from './components/chartjs'
import WidgetBarChart from './components/widgetBarChart'
import WidgetLineChart from './components/widgetLineChart'
import WidgetDoughnutChart from './components/widgetDoughnutChart'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {
  ChartJS,
  WidgetBarChart,
  WidgetLineChart,
  WidgetDoughnutChart,
  ExampleComponent
}

const IOTComponents = [
  { name: 'ChartJS', value: ChartJS },
  { name: 'WidgetBarChart', value: WidgetBarChart },
  { name: 'WidgetLineChart', value: WidgetLineChart },
  { name: 'WidgetDoughnutChart', value: WidgetDoughnutChart },
  { name: 'ExampleComponent', value: ExampleComponent }
]

export default IOTComponents
