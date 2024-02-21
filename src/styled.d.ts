import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    };
  }
}