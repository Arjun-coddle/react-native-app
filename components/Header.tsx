import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Nav from "../styles/headerFooter";
import UserIcon from "../assets/User";
import NotificationIcon from "../assets/NotificationIcon";
import Sidebar from "./Sidebar";

const Header = ({ navigation, username }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <View style={Nav.container}>
      <View style={Nav.nav}>
        <TouchableOpacity style={Nav.profile} onPress={toggleSidebar}>
          <UserIcon />
        </TouchableOpacity>

        <Text style={Nav.whitetext}>{username}</Text>

        <TouchableOpacity
          style={Nav.notificationIcon}
          onPress={() => {
            navigation.navigate("notification");
          }}
        >
          <NotificationIcon />
        </TouchableOpacity>
      </View>

      {showSidebar && <Sidebar navigation={navigation} username={username} />}
    </View>
  );
};

export default Header;
