import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStack from "../TabStack";
import { useTheme } from "styled-components/native";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="TabStack"
      screenOptions={{
        statusBarColor: theme.colors.card,
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.primaryText,
      }}
    >
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
