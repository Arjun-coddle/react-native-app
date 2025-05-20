import React from "react";
import Svg, { Path } from "react-native-svg";

const StatusIcon = () => {
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
        <Path d="M22 5h-5v5h-5v5h-5v5h-5" />
      </Svg>
    </>
  );
};

export default StatusIcon;
