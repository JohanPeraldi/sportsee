import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import styles from './Score.module.scss';

const startAngle = 90;
const wrapperStyle = {
  top: 10,
  left: 10,
};

export default function Score(props) {
  const { data } = props;

  return (
    <article className={styles.wrapper}>
      <p className={styles['score-percentage']}>
        {data.percentage}%
        <span className={styles.text}> de votre objectif</span>
      </p>
      <RadialBarChart
        className={styles.chart}
        width={258}
        height={263}
        cx={115}
        cy={135}
        innerRadius={90}
        outerRadius={90}
        barSize={10}
        data={[data]}
        /* A startAngle of 90 corresponds to the "12 o'clock" position on the chart circle. An endAngle value is necessary to build an arc that is proportional to the user's score percentage. */
        startAngle={startAngle}
        endAngle={startAngle + data.percentage * 3.6}
      >
        <RadialBar dataKey="percentage" cornerRadius={5} />
        <Legend
          iconSize={0}
          width={20}
          height={20}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={wrapperStyle}
        />
      </RadialBarChart>
    </article>
  );
}

Score.propTypes = {
  data: PropTypes.node.isRequired,
  percentage: PropTypes.number.isRequired,
};
