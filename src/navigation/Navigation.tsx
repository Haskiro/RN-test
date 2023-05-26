import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "../pages/navigator/Navigator";
import { screens } from "../constants/screens";
import { Text } from "react-native/types";

const Navigation: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.HOME} component={() => <Text>Home</Text>} />
      <Stack.Screen name={screens.NAVIGATOR} component={Navigator} />
    </Stack.Navigator>
  );
};

export default Navigation;
