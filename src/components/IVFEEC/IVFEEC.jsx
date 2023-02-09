import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import styles from './IVFEEC.module.scss';

/**
 * Creates a React component integrating a RadarChart Recharts component.
 * @param { Object } props
 * @returns { HTMLElement }
 */
export default function IVFEEC(props) {
  const { data } = props;

  return (
    <RadarChart
      className={styles.radar}
      cx={130}
      cy={140}
      data={data}
      innerRadius={20}
      outerRadius={90}
      width={258}
      height={263}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="factor"
        fontSize={12}
        fontWeight={500}
        dy={5}
        stroke="white"
        tickLine={false}
      />
      <PolarRadiusAxis axisLine={false} tick={false} />
      <Radar
        dataKey="value"
        stroke="#ff0101"
        fill="#ff0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
}

IVFEEC.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ factor: PropTypes.string, value: PropTypes.number })
  ).isRequired,
};
