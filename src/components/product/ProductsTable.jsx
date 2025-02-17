import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wierless Earbuds",
    category: "Electronics",
    Price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet ",
    category: "Accessories",
    Price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart watch",
    category: "Electronics",
    Price: 199.99,
    stock: 59,
    sales: 650,
  },
  {
    id: 4,
    name: "Youga Mat",
    category: "Fitness",
    Price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    Price: 79.99,
    stock: 78,
    sales: 720,
  },
];

function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(PRODUCT_DATA);
  const searchHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProduct(filtered);
  };
  return (
    <motion.div
      className="mb-6 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between flex-col sm:flex-row items-center mb-6 text-left">
        <h2 className="text-xl font-semibold text-gray-100 mb-4 md:mb-0 ">Product List</h2>
        <div className="relative ">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={searchHandler}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProduct.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1564632516501-16af063d382f?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product image"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  $ {product.Price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  $ {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  $ {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                  <Edit size={18} />
                </button>
                <button className="text-red-400 hover:text-red-300">
                <Trash2 size={18} />
                </button>
                
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductsTable;
