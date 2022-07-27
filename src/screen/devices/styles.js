import { StyleSheet } from "react-native";
import colors from "@util/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  flex: { flexGrow: 1 },
  btnView: {
    flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', marginBottom: 20
  }
})