import React from "react";
import Svg, { Path } from "react-native-svg";

const NextIcon = () => {
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
        <Path d="M5 12h.5m3 0h1.5m3 0h6" />
        <Path d="M13 18l6 -6" />
        <Path d="M13 6l6 6" />
      </Svg>
    </>
  );
};

export default NextIcon;
