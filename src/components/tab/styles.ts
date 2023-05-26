import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: { padding: 10 },

  flatlist: {
    maxHeight: "90%",
  },

  item: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#cbc8c8",
    borderBottomWidth: 1,
  },

  itemLabel: {
    borderBottomColor: "black",
  },

  text: {
    flex: 1,
    lineHeight: 30,
    textAlign: "center",
  },

  textLabel: {
    fontWeight: "700",
    fontSize: 16,
  },
});
