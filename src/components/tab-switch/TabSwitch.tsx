import { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export interface ITabSwitchProps {
  title: string;
}

const TabSwitch: FC<ITabSwitchProps> = ({ title }) => {
  return (
    <View style={styles.body}>
      <Text>{title}</Text>
    </View>
  );
};

export default TabSwitch;
