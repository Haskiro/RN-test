import { PropsWithChildren, FC } from "react";
import { View } from "react-native";

interface IContainerProps extends PropsWithChildren {}

const Container: FC<IContainerProps> = ({ children }) => {
  return <View style={{ paddingHorizontal: 16 }}>{children}</View>;
};

export default Container;
