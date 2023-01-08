import { PieChart, Pie } from 'recharts';
import styles from './KPI.module.css';

const data = [
  { name: 'score', percentage: 12 },
  { name: 'score', percentage: 78 },
];

export default function KPI() {
  return (
    <PieChart className={styles.doughnut} width={258} height={263}>
      <Pie
        data={data}
        dataKey="percentage"
        cx={130}
        cy={140}
        innerRadius={90}
        outerRadius={100}
        fill="#ff0000"
      />
    </PieChart>
  );
}
