import { StyleSheet } from "react-native";

export default styles = (c) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c?.background,
    padding: 20
  },
  emptyView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fs20: { fontSize: 20, color: c.text }
})