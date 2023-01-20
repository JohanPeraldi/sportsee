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
    weight: 69.8,
    burntCalories: 306,
  },
  {
    name: '2',
    weight: 70,
    burntCalories: 258,
  },
  {
    name: '3',
    weight: 70.6,
    burntCalories: 356,
  },
  {
    name: '4',
    weight: 70.2,
    burntCalories: 298,
  },
  {
    name: '5',
    weight: 70.4,
    burntCalories: 355,
  },
  {
    name: '6',
    weight: 69.7,
    burntCalories: 402,
  },
  {
    name: '7',
    weight: 69.9,
    burntCalories: 378,
  },
  {
    name: '8',
    weight: 69.2,
    burntCalories: 299,
  },
  {
    name: '9',
    weight: 69.8,
    burntCalories: 236,
  },
  {
    name: '10',
    weight: 70.5,
    burntCalories: 333,
  },
];

export default function DailyActivity() {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles['custom-tooltip']}>
          <p className={styles['tooltip-info']}>{`${payload[0].value} kg`}</p>
          <p className={styles['tooltip-info']}>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <article className={styles.wrapper}>
      <h2 className={styles.title}>Activité quotidienne</h2>
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 35,
          right: 35,
          left: 0,
          bottom: 35,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#dedede"
        />
        <XAxis dataKey="name" tickLine={false} dy={16} stroke="#9B9EAC" />
        <YAxis
          axisLine={false}
          dataKey="weight"
          domain={[
            (dataMin) => Math.floor(dataMin),
            (dataMax) => Math.ceil(dataMax),
          ]}
          dx={25}
          orientation="right"
          tickCount="3"
          tickLine={false}
          type="number"
          yAxisId="right"
          stroke="#9B9EAC"
        />
        <YAxis
          axisLine={false}
          dataKey="burntCalories"
          hide={true}
          orientation="left"
          tickCount="3"
          tickLine={false}
          type="number"
          yAxisId="left"
        />
        <Tooltip content={<CustomTooltip />} offset={42} />
        <Legend
          align="right"
          height={50}
          iconSize={8}
          iconType="circle"
          verticalAlign="top"
          width={300}
        />
        <Bar
          barSize={7}
          dataKey="weight"
          fill="#000000"
          name="Poids (kg)"
          radius={[3, 3, 0, 0]}
          yAxisId="right"
        />
        <Bar
          barSize={7}
          dataKey="burntCalories"
          fill="#e60000"
          name="Calories brûlées (kCal)"
          radius={[3, 3, 0, 0]}
          yAxisId="left"
        />
      </BarChart>
    </article>
  );
}
