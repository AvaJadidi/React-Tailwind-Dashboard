import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "John@Example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jan Smith",
    email: "Jan@Example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "Bob@Example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Ava Jadidi",
    email: "Ava@Example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 5,
    name: "Sara Omidi",
    email: "Sara@Example.com",
    role: "Moderator",
    status: "Active",
  },
];

function UserTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const searchHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <motion.div
      className="mb-6 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between flex-col sm:flex-row items-center mb-6 ">
        <h2 className="text-xl font-semibold text-gray-100 mb-4 md:mb-0">Users List</h2>
        <div className="relative  overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 max-w-fit  text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                Email
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Status
              </th>

              <th className="px-6 py-3 text-left font-medium text-gray-400  uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <span className="py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <span
                    className={`py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active" ? "bg-green-500 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
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

export default UserTable;
