import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#000",
    white: "#EEEEEE",
    gray: "#696969",
    blue: "#00ADB5",
    red: "#C84B31",
    purple: '#7F2FDE',
    lightpurple: "#E8E2F7",
    gradient: "linear-gradient(100deg, #7F2FDE 21%, #00ADB5 95%)",
    
    bg_default: "linear-gradient(to right, #c6ffdd, #fbd786, #c6ffdd)",
    bg_white: "#EEEEEE",
  },
};

const mediaQuery_max = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`;

const mediaQuery_min = (minWidth: number): string =>
  `@media screen and (min-width: ${minWidth}px)`;

/**
 * Media Queries Breakpoints For Responsive Design In 2022
 */
export const media = {
  // Large devices (desktops, less than 1200px)
  large_max: mediaQuery_max(1199.98),
  // Medium devices (tablets, less than 992px)
  medium_max: mediaQuery_max(991.98),
  // Small devices (landscape phones, less than 768px)
  small_max: mediaQuery_max(767.98),
  // Other smaller devices
  smaller_max: mediaQuery_max(575.98),
  mobile: mediaQuery_max(420),

  // Extra large devices (large desktops, 1200px and up)
  extraLarge_min: mediaQuery_min(1200),
  // Large devices (desktops, 992px and up)
  large_min: mediaQuery_min(992),
  // Medium devices (tablets, 768px and up)
  medium_min: mediaQuery_min(768),
  // Small devices (landscape phones, 576px and up)
  small_min: mediaQuery_min(576),
};