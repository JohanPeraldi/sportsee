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

export default function DailyActivity(props) {
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
  const data = props.data;

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
        <XAxis dataKey={'day'} tickLine={false} dy={16} stroke="#9B9EAC" />
        <YAxis
          axisLine={false}
          dataKey="kilogram"
          domain={[
            (dataMin) => Math.floor(dataMin - 1),
            (dataMax) => Math.ceil(dataMax),
          ]}
          dx={25}
          orientation="right"
          tickLine={false}
          type="number"
          yAxisId="right"
          stroke="#9B9EAC"
        />
        <YAxis
          axisLine={false}
          dataKey="calories"
          domain={[
            (dataMin) => Math.floor(dataMin - 100),
            (dataMax) => Math.ceil(dataMax + 100),
          ]}
          hide={true}
          orientation="left"
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
          dataKey="kilogram"
          fill="#000000"
          name="Poids (kg)"
          radius={[3, 3, 0, 0]}
          yAxisId="right"
        />
        <Bar
          barSize={7}
          dataKey="calories"
          fill="#e60000"
          name="Calories brûlées (kCal)"
          radius={[3, 3, 0, 0]}
          yAxisId="left"
        />
      </BarChart>
    </article>
  );
}
