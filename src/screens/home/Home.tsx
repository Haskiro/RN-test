import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { screens } from "../../constants/screens";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export interface IHomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Home: FC<IHomeProps> = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate(screens.NAVIGATOR);
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.text}>Go to Navigator</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
