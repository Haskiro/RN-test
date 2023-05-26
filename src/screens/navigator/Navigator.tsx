import { FC, useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import { transactionTypes } from "../../constants/transactionTypes";
import { FlatList } from "react-native-gesture-handler";
import TabSwitch from "../../components/tab-switch/TabSwitch";

const Navigator: FC = () => {
  // const Tab = createMaterialTopTabNavigator();
  const [activeTab, setActiveTab] = useState<transactionTypes>(
    transactionTypes.INCOME
  );

  return (
    <View>
      <View>
        <FlatList
          style={styles.list}
          data={Object.values(transactionTypes)}
          renderItem={({ item }) => <TabSwitch title={item}></TabSwitch>}
        />
      </View>
    </View>
  );
  // (
  //   <Tab.Navigator sceneContainerStyle={styles.container}>
  //     <Tab.Screen name="Income" component={TabComponent} />
  //     <Tab.Screen name="Outcome" component={TabComponent} />
  //     <Tab.Screen name="Loans" component={TabComponent} />
  //     <Tab.Screen name="Invetment" component={TabComponent} />
  //   </Tab.Navigator>
  // );
};

export default Navigator;
