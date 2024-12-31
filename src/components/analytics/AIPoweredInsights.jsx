import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";
const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    insight: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur .",
  },
  {
    icon: Users,
    color: "text-blue-500",
    insight: "dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: ShoppingBag,
    color: "text-purple-500",
    insight:
      "Lorem ipsum,Lorem, ipsum dolor. dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: DollarSign,
    color: "text-yellow-500",
    insight:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem, ipsum.",
  },
];
function AIPoweredInsights() {
  return (
    <motion.div
      className=" bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-lg font-medium text-gray-100 mb-4">
        AI-Powered Insights
      </h2>
      <div className="space-y-4">
        {INSIGHTS.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
       </motion.div>
  );
}

export default AIPoweredInsights;
