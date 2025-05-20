import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Style from "../styles/sidebar";
import ProfileIcon from "../assets/ProfileIcon";
import NetworkIcon from "../assets/NetworkIcon";
import StatusIcon from "../assets/StatusIcon";
import SettingsIcon from "../assets/SettingsIcon";
import PremiumIcon from "../assets/PremiumIcon";

const Sidebar = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <View style={Style.list}>
        <TouchableOpacity
          style={Style.listContainer}
          onPress={() => {
            navigation.navigate("profile");
          }}
        >
          <ProfileIcon />
          <Text style={{ color: "white" }}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.listContainer}
          onPress={() => {
            navigation.navigate("notification");
          }}
        >
          <NetworkIcon />
          <Text style={{ color: "white" }}>My Network</Text>
        </TouchableOpacity>
        <View style={Style.listContainer}>
          <PremiumIcon />
          <Text style={{ color: "white" }}>Premium</Text>
        </View>
        <View style={Style.listContainer}>
          <StatusIcon />
          <Text style={{ color: "white" }}>Status</Text>
        </View>
        <View style={Style.listContainer}>
          <SettingsIcon />
          <Text style={{ color: "white" }}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
