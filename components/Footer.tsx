import React from "react";
import { Text, View } from "react-native";
import Nav from "../styles/headerFooter";
import SearchIcon from "../assets/SearchIcon";
import CollectionIcon from "../assets/CollectionIcon";

const Footer = () => {
  return (
    <View style={Nav.footer}>
      <View style={Nav.footerDiv}>
        <SearchIcon />
        <Text style={Nav.whitetext}>Search</Text>
      </View>
      <View style={Nav.footerDiv}>
        <CollectionIcon />
        <Text style={Nav.whitetext}>Your Collection</Text>
      </View>
    </View>
  );
};

export default Footer;
