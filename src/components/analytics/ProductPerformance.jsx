import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  BarChart,
} from "recharts";
import { motion } from "framer-motion";

const productPerformanceData=[
  {name:"Product A", sales: 4000, revenue:2400, profit: 2400},
  {name:"Product B", sales: 3000, revenue:1398, profit: 2210},
  {name:"Product C", sales: 2000, revenue:9800, profit: 2290},
  {name:"Product D", sales: 2700, revenue:3900, profit: 2000},
  {name:"Product E", sales: 1890, revenue:4800, profit: 2181},

]
function ProductPerformance() {
  return (
    <motion.div
          className=" bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  border border-gray-700 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-lg font-medium mb-4 text-gray-100">
            User Activity Heatmap
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={productPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41,55,.8)",
                    borderColor: "#4b5563",
                  }}
                  itemStyle={{ color: "#e5e7eb" }}
                />
                <Legend />
                <Bar dataKey="sales" fill="#8b5cf6" />
                <Bar dataKey="revenue" fill="#10b981" />
                <Bar dataKey="profit" fill="#f59e0b" />
                
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default ProductPerformance