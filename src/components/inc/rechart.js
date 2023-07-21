import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 42, angular: 42, vue: 54 },
  { name: "2019", react: 51, angular: 41, vue: 54 },
  { name: "2020", react: 60, angular: 37, vue: 28 },
  { name: "2021", react: 51, angular: 31, vue: 27 },
  { name: "2022", react: 95, angular: 44, vue: 49 },
];

const Rechart = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#2196F3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="react" fill="#8884d8" />
        <Bar dataKey="angular" fill="#82ca9d" />
        <Bar dataKey="vue" fill="#82ca9d" />
      </BarChart>

      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="react"
          dataKey="react"
          stroke="#EDCBD2"
          fill="#EDCBD2"
          fillOpacity={0.6}
        />
        <Radar
          name="angular"
          dataKey="angular"
          stroke="#80C4B7"
          fill="#80C4B7"
          fillOpacity={0.6}
        />
        <Radar
          name="vue"
          dataKey="vue"
          stroke="#E3856B"
          fill="#E3856B"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Rechart;
