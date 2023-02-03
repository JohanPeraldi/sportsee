import React from 'react';
import PropTypes from 'prop-types';
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

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles['custom-tooltip']}>
        <p className={styles['tooltip-text']}>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
}

export default function AverageSessionLength(props) {
  const { data } = props;
  const tooltipWrapperStyle = {
    background: 'white',
    color: 'black',
    padding: 6,
  };

  return (
    <article className={styles.wrapper}>
      <h2 className={styles.title}>Durée moyenne des sessions</h2>
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
          dataKey="day"
          tickLine={false}
          dy={30}
          stroke="white"
        />
        <YAxis
          hide
          domain={[
            (dataMin) => Math.floor(dataMin),
            (dataMax) => Math.ceil(dataMax),
          ]}
        />
        <Tooltip
          content={CustomTooltip}
          offset={15}
          separator=" "
          wrapperStyle={tooltipWrapperStyle}
        />
        <Legend payload={[]} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          stroke="white"
          strokeWidth={2}
        />
      </LineChart>
    </article>
  );
}

AverageSessionLength.propTypes = {
  data: PropTypes.node.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.node.isRequired,
  payload: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
  value: PropTypes.node.isRequired,
};
