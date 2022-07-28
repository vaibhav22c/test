import { StyleSheet } from "react-native";

export default styles = (c) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: c.background
  },
  flex: { flexGrow: 1 },
  btnView: {
    flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', marginBottom: 20
  }
})