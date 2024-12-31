import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

function Notifications() {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch Lable={"Push Notification"} isOn={notifications.push} onToggle={()=> setNotifications ({...notifications, push:!notifications.push})} />
      <ToggleSwitch Lable={"Email Notification"} isOn={notifications.email} onToggle={()=> setNotifications ({...notifications, email:!notifications.email})} />
      <ToggleSwitch Lable={"SMS Notification"} isOn={notifications.sms} onToggle={()=> setNotifications ({...notifications, sms:!notifications.sms})} />

   
    </SettingSection>
  );
}

export default Notifications;
