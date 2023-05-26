import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "../screens/navigator/Navigator";
import { screens } from "../constants/screens";
import Home from "../screens/home/Home";

const Navigation: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={screens.NAVIGATOR}>
      <Stack.Screen name={screens.HOME} component={Home} />
      <Stack.Screen name={screens.NAVIGATOR} component={Navigator} />
    </Stack.Navigator>
  );
};

export default Navigation;
