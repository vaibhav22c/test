import React, { memo } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { FloatingAction } from "react-native-floating-action";
import { useTheme } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";

import DeviceCard from "../../component/deviceCard";
import styles from "./styles";
import addImg from '../../assets/images/plus.png';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const { devices } = useSelector(s => s.devices);

  const _import = () => {

  }

  const _export = async () => {
    if (!devices?.length) {
      showMessage({ message: "There is no data to be export.", type: "warning" });
      return
    }
  }

  return (
    <View style={styles(colors).container}>
      <FlatList
        data={devices || []}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <DeviceCard item={item} />}
        keyExtractor={(k, index) => k.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={styles(colors).emptyView} >
              <Text style={styles(colors).fs20} >No record found.</Text>
              <Text style={styles(colors).fs20} >Click below + icon to add one.</Text>
            </View>
          )
        }}
      />
      <FloatingAction
        actions={[
          {
            text: "Add a device",
            icon: { uri: addImg },
            name: "add",
            position: 1
          }
        ]}
        onPressItem={name => {
          if (name == 'add') {
            navigation.navigate('Devices')
          }
          else if (name == 'import') {
            _import()
          }
          else {
            _export()
          }
        }}
      />
    </View>
  );
}

export default memo(Home)