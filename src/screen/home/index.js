import React, { memo } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { FloatingAction } from "react-native-floating-action";
import DeviceCard from "../../component/deviceCard";
import styles from "./styles";

const Home = ({ navigation }) => {
  const { devices } = useSelector(s => s.devices);

  return (
    <View style={styles.container}>
      <FlatList
        data={devices || []}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <DeviceCard item={item} />}
        keyExtractor={(k, index) => k.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyView} >
              <Text style={styles.fs20} >No record found</Text>
            </View>
          )
        }}
      />
      <FloatingAction
        actions={[
          {
            text: "Add new device",
            icon: require("@img/plus.png"),
            name: "add",
            position: 1
          },
          {
            text: "Import json file",
            icon: require("@img/import.png"),
            name: "import",
            position: 2
          },
          {
            text: "Export json file",
            icon: require("@img/export.png"),
            name: "export",
            position: 3
          },
        ]}
        onPressItem={name => {
          if (name == 'add') {
            navigation.navigate('Devices')
          }
        }}
      />
    </View>
  );
}

export default memo(Home)