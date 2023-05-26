import { FC } from "react";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabComponent from "../../components/tab/Tab";

const Navigator: FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator sceneContainerStyle={styles.container}>
      <Tab.Screen name="Income" component={TabComponent} />
      <Tab.Screen name="Outcome" component={TabComponent} />
      <Tab.Screen name="Loans" component={TabComponent} />
      <Tab.Screen name="Invetment" component={TabComponent} />
    </Tab.Navigator>
  );
};

export default Navigator;
