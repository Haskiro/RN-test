import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { transactionTypes } from "@constants/transactionTypes";

export interface ITabSwitchProps {
  title: string;
  isActive: boolean;
  setActiveTab: (value: transactionTypes) => void;
}

const TabSwitch: FC<ITabSwitchProps> = ({ title, isActive, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(title as transactionTypes)}
      style={[styles.body, isActive && styles.active]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabSwitch;
