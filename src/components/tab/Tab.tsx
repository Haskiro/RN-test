import { FC } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import { ITransaction } from "@interfaces/data.interface";
import React from "react";

export interface ITabProps {
  transactions: ITransaction[];
}

const Tab: FC<ITabProps> = React.memo(({ transactions }) => {
  const renderItem = ({ item }: { item: ITransaction }): JSX.Element => (
    <View style={styles.item}>
      <Text style={styles.text}>
        {item.name.first} {item.name.last}
      </Text>
      <Text style={styles.text}>{item.company}</Text>
    </View>
  );

  return (
    <View style={styles.body}>
      <View style={[styles.item, styles.itemLabel]}>
        <Text style={[styles.text, styles.textLabel]}>Name</Text>
        <Text style={[styles.text, styles.textLabel]}>Company</Text>
      </View>
      <FlatList
        style={styles.flatlist}
        data={transactions}
        renderItem={renderItem}
      />
    </View>
  );
});

export default Tab;
