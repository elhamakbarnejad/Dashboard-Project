import { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import UsersContext from "../../../conexts/Users/Users";

const COLORS = [
  "#66cc99",
  "#e62e00",
  "#cc9900",
  "#e6e600",
  "#66d9ff",
  "#d2a679",
  "#d699ff",
  "#c2c2d6",
];

const UsersChart = () => {
  const { allUsers } = useContext(UsersContext);

  const chartData = useMemo(() => {
    if (!allUsers?.users) return [];

    const eyeColorCount = {};
    allUsers.users.forEach((user) => {
      eyeColorCount[user.eyeColor] = (eyeColorCount[user.eyeColor] || 0) + 1;
    });

    return Object.entries(eyeColorCount).map(([name, value]) => ({
      name,
      value,
    }));
  }, [allUsers]);

  if (chartData.length === 0) return <div>No data</div>;

  return (
    <div className="bg-white dark:bg-gray-800  rounded-lg dark:text-white md:w-100 w-60 ">
      <h3 className="text-lg font-bold text-center my-10">
        Distribution of users by eyeColor{" "}
      </h3>

      <div className="w-full max-w-xl mx-auto aspect-square *:text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius="50%"
              labelLine={false}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-10">
        {chartData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-1 mx-auto">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: COLORS[index % COLORS.length],
              }}
            ></div>
            <span className="text-xs md:text-sm">
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersChart;
