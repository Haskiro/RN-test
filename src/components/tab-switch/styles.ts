import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderStyle: "solid",
    flexBasis: "25%",
  },

  active: {
    backgroundColor: "#cbc8c8",
  },

  text: {
    textAlign: "center",
    fontSize: 11,
  },
});
