// import { motion } from "framer-motion";

import Header from "../components/common/Header";
import Profile from "../components/settings/Profile";
import Notifications from "../components/settings/Notifications";
import Security from "../components/settings/Security";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";

function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Settings" />
      <main className=" max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
}

export default SettingsPage;
