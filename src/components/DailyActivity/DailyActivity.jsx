import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './DailyActivity.module.css';

const data = [
  {
    name: '1',
    'Poids (kg)': 69.8,
    'Calories brûlées (kCal)': 306,
  },
  {
    name: '2',
    'Poids (kg)': 70,
    'Calories brûlées (kCal)': 258,
  },
  {
    name: '3',
    'Poids (kg)': 70.6,
    'Calories brûlées (kCal)': 356,
  },
  {
    name: '4',
    'Poids (kg)': 70.2,
    'Calories brûlées (kCal)': 298,
  },
  {
    name: '5',
    'Poids (kg)': 70.4,
    'Calories brûlées (kCal)': 355,
  },
  {
    name: '6',
    'Poids (kg)': 69.7,
    'Calories brûlées (kCal)': 402,
  },
  {
    name: '7',
    'Poids (kg)': 69.9,
    'Calories brûlées (kCal)': 378,
  },
  {
    name: '8',
    'Poids (kg)': 69.2,
    'Calories brûlées (kCal)': 299,
  },
  {
    name: '9',
    'Poids (kg)': 69.8,
    'Calories brûlées (kCal)': 236,
  },
  {
    name: '10',
    'Poids (kg)': 70.5,
    'Calories brûlées (kCal)': 333,
  },
];

export default function DailyActivity() {
  const tooltipContentStyle = {
    background: '#E60000',
    padding: 6,
  };
  const tooltipItemStyle = {
    background: '#E60000',
    color: 'white',
  };
  const tooltipLabelStyle = {};
  const tooltipWrapperStyle = {
    color: 'orange',
  };

  return (
    <BarChart
      className={styles.barchart}
      width={835}
      height={320}
      data={data}
      margin={{
        top: 77,
        right: 63,
        left: 0,
        bottom: 30,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" tickLine={false} />
      <YAxis
        datakey="Poids (kg)"
        orientation="right"
        tickCount="3"
        tickLine={false}
      />
      <Tooltip
        contentStyle={tooltipContentStyle}
        itemStyle={tooltipItemStyle}
        labelStyle={tooltipLabelStyle}
        wrapperStyle={tooltipWrapperStyle}
        offset={42}
        separator=""
      />
      <Legend
        align="right"
        height={50}
        iconSize={8}
        iconType="circle"
        verticalAlign="top"
        width={500}
      />
      <Bar barSize={7} dataKey="Poids (kg)" fill="#000000" />
      <Bar barSize={7} dataKey="Calories brûlées (kCal)" fill="#e60000" />
    </BarChart>
  );
}
