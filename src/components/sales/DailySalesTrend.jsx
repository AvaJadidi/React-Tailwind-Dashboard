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

  const dailySalesData = [
    { name: "Mon", sales: 1000 },
    { name: "Tue", sales: 1200 },
    { name: "Wed", sales: 900 },
    { name: "Thu", sales: 1100 },
    { name: "Fri", sales: 1300 },
    { name: "Sat", sales: 1600 },
    { name: "Sun", sales: 1400 },
   
  ];
function DailySalesTrend() {
  return (
    <motion.div
    className=" bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h2 className="text-lg font-medium mb-4 text-gray-100">
    Daily Sales Trend
    </h2>
     <div style={{ width:"100%" ,height:300} }>
            <ResponsiveContainer >
              <BarChart data={dailySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey={"name"} stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41,55,0.8)",
                    borderColor: "#4b5563",
                  }}
                  itemStyle={{ color: "#e5e7eb" }}
                />
                
                <Bar dataKey="sales" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

    </motion.div>
  )
}

export default DailySalesTrend