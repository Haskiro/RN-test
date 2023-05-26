import { FC, useMemo, useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import { transactionTypes } from "../../constants/transactionTypes";
import { FlatList } from "react-native-gesture-handler";
import TabSwitch from "../../components/tab-switch/TabSwitch";
import Tab from "../../components/tab/Tab";
import transactions from "../../data.json";
import { ITransaction } from "../../types/data.interface";

const Navigator: FC = () => {
  const [activeTab, setActiveTab] = useState<transactionTypes>(
    transactionTypes.INCOME
  );

  const filteredTransactions = useMemo(() => {
    return transactions.data.filter(
      (transaction) => transaction.type === activeTab.toLowerCase()
    );
  }, [activeTab, transactions]);

  const renderTabSwitch = (item: transactionTypes) => (
    <TabSwitch
      key={item}
      title={item}
      isActive={activeTab === item}
      setActiveTab={setActiveTab}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchList}>
        {Object.values(transactionTypes).map(renderTabSwitch)}
      </View>
      <Tab transactions={filteredTransactions as ITransaction[]} />
    </View>
  );
};

export default Navigator;
