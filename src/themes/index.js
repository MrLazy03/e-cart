import { DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#051526",
    background: "#f0e6e9",
    card: "#051526",
    primaryText: "white",
    secondaryText: "black",
    border: "rgb(199, 199, 204)",
    notification: "#39AFEA",
    statusbar: "#051526",
    inputBackground: "gray",
    buttonBackground: "#034285",
    ChatListItemCard: "#D3D3D3",
  },
  fontSize: {
    large: 22,
    mediume: 20,
    small: 15,
  },

  fontFamily: {
    primary: "Open Sans",
  },
};

export default theme;
