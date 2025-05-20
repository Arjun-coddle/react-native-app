import React from "react";
import { Path, Svg } from "react-native-svg";

const SearchIcon = () => {
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <Path d="M18.5 18.5l2.5 2.5" />
        <Path d="M4 6h16" />
        <Path d="M4 12h4" />
        <Path d="M4 18h4" />
      </Svg>
    </>
  );
};

export default SearchIcon;
