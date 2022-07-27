import { StyleSheet } from "react-native";
import colors from "@util/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  },
  emptyView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fs20: { fontSize: 20 }
})