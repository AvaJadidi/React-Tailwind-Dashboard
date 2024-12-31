import { motion } from "framer-motion";
import { ShoppingBag, Clock, CheckCircle, DollarSign } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";
import { useTitle } from "../hook/UseTitle";

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completeOrders: "1,178",
  totalRevenue: "$98,765",
};
function OrdersPage() {
  useTitle("Orders Page");

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stat card */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Pending Order"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#10B981"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completeOrders}
            color="#f59e08"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#ef4444"
          />
        </motion.div>
        {/* Users Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
          <OrdersTable />
        </div>
      </main>
    </div>
  );
}

export default OrdersPage;
