// import React from 'react'
// import styles from './styles.module.css'
import { Registry, Registered } from "react-registry"

import ChartJS from './components/chartjs'
import WidgetBarChart from './components/widgetBarChart'
import WidgetLineChart from './components/widgetLineChart'
import WidgetDoughnutChart from './components/widgetDoughnutChart'

//from git
// const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

// export {
//   ChartJS,
//   WidgetBarChart,
//   WidgetLineChart,
//   WidgetDoughnutChart,
//   ExampleComponent
// }

// const IOTComponents = [
//   { name: 'ChartJS', value: ChartJS },
//   { name: 'WidgetBarChart', value: WidgetBarChart },
//   { name: 'WidgetLineChart', value: WidgetLineChart },
//   { name: 'WidgetDoughnutChart', value: WidgetDoughnutChart }
// ];


Registry.register(ChartJS, 'ChartJS');
Registry.register(WidgetBarChart, 'WidgetBarChart');
Registry.register(WidgetLineChart, 'WidgetLineChart');
Registry.register(WidgetDoughnutChart, 'WidgetDoughnutChart');

export { Registry, Registered };
