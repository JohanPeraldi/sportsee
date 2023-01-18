import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './AverageSessionLength.module.css';

const data = [
  {
    dayOfWeek: 'L',
    length: 73,
  },
  {
    dayOfWeek: 'M',
    length: 78,
  },
  {
    dayOfWeek: 'M',
    length: 55,
  },
  {
    dayOfWeek: 'J',
    length: 0,
  },
  {
    dayOfWeek: 'V',
    length: 45,
  },
  {
    dayOfWeek: 'S',
    length: 68,
  },
  {
    dayOfWeek: 'D',
    length: 0,
  },
];

export default function AverageSessionLength() {
  const tooltipWrapperStyle = {
    background: 'white',
    color: 'black',
    padding: 6,
  };
  const renderTooltip = function () {
    const day = 0;
    const dailySessionLength = `${data[day].length} min`;
    return dailySessionLength;
  };

  return (
    <LineChart
      className={styles.linechart}
      width={258}
      height={263}
      data={data}
      margin={{ top: 80, right: 20, left: 20, bottom: 50 }}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis
        axisLine={false}
        dataKey="dayOfWeek"
        tickLine={false}
        dy={30}
        stroke="white"
      />
      <YAxis
        hide={true}
        domain={[
          (dataMin) => Math.floor(dataMin),
          (dataMax) => Math.ceil(dataMax),
        ]}
      />
      <Tooltip
        content={renderTooltip}
        offset={15}
        separator=" "
        wrapperStyle={tooltipWrapperStyle}
      />
      <Legend payload={[]} />
      <Line
        type="monotone"
        dataKey="length"
        dot={false}
        stroke="white"
        strokeWidth={2}
      />
    </LineChart>
  );
}
