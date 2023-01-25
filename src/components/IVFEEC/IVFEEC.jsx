import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import styles from './IVFEEC.module.css';

export default function IVFEEC(props) {
  const data = props.data;
  const factors = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  const formatedData = data.data.map((el) => {
    return {
      factor: factors[el.kind - 1],
      value: el.value,
    };
  });
  const reverseFormatedData = formatedData.reverse();

  return (
    <RadarChart
      className={styles.radar}
      cx={130}
      cy={140}
      data={reverseFormatedData}
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
