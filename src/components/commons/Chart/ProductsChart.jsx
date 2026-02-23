import { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ProductsContext from "../../../conexts/Products/Products";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const ProductsChart = () => {
  const { allProducts } = useContext(ProductsContext);

  const chartData = useMemo(() => {
    if (!allProducts?.products) return [];

    const categoryCount = {};
    allProducts.products.forEach((product) => {
      categoryCount[product.category] =
        (categoryCount[product.category] || 0) + 1;
    });

    return Object.entries(categoryCount).map(([name, value]) => ({
      name,
      value,
    }));
  }, [allProducts]);

  if (chartData.length === 0) return <div>No data</div>;

  return (
    <div className="bg-white dark:bg-gray-800  rounded-lg dark:text-white md:w-100 w-60">
      <h3 className="text-lg font-bold text-center my-10">
        Distribution of products by category{" "}
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
              // fill="#8884d8"
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

      <div className="grid grid-cols-2 gap-2 mt-4 mb-10 ">
        {chartData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2 mx-auto ">
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

export default ProductsChart;
