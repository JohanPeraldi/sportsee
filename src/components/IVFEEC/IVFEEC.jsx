import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import styles from './IVFEEC.module.css';

const data = [
  {
    factor: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    factor: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    factor: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    factor: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    factor: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    factor: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function IVFEEC() {
  return (
    <RadarChart
      className={styles.radar}
      cx={130}
      cy={140}
      outerRadius={70}
      width={258}
      height={263}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="factor" />
      <PolarRadiusAxis axisLine={false} tick={false} />
      <Radar
        name="Thomas"
        dataKey="A"
        stroke="#ff0101"
        fill="#ff0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
}
