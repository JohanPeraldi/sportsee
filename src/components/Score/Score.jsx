import { RadialBarChart, RadialBar, Legend } from 'recharts';

const scorePercentage = 66;
const startAngle = 90;
const data = [
  {
    name: 'Score',
    percentage: scorePercentage,
    fill: '#ff0000',
  },
];
const wrapperStyle = {
  top: 10,
  left: 10,
};

export default function Score() {
  return (
    <RadialBarChart
      width={258}
      height={263}
      cx={115}
      cy={135}
      innerRadius={90}
      outerRadius={90}
      barSize={10}
      data={data}
      /* A startAngle of 90 corresponds to the "12 o'clock" position on the chart circle. An endAngle value is necessary to build an arc that is proportional to the user's score percentage. */
      startAngle={startAngle}
      endAngle={startAngle + scorePercentage * 3.6}
    >
      <RadialBar
        label={{
          position: 'inside',
          fill: '#282D30',
          fontSize: '30',
          fontWeight: '500',
        }}
        dataKey="percentage"
        cornerRadius={5}
      />
      <Legend
        iconSize={0}
        width={20}
        height={20}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={wrapperStyle}
        style={{ color: 'black' }}
      />
    </RadialBarChart>
  );
}