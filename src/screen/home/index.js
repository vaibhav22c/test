import React, { memo } from "react";
import { View, FlatList, Text, Platform, PermissionsAndroid } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FloatingAction } from "react-native-floating-action";
import DocumentPicker from "react-native-document-picker";
import { showMessage } from "react-native-flash-message";
import RNFS from "react-native-fs";
import Share from 'react-native-share';

import DeviceCard from "../../component/deviceCard";
import styles from "./styles";
import { bulkAdd } from "../../redux/reducer/devices";

const Home = ({ navigation }) => {
  const { devices } = useSelector(s => s.devices);
  const dispatch = useDispatch()
  const _import = () => {
    DocumentPicker.pickSingle().then(file => {
      if (file?.type != 'application/json') {
        showMessage({ message: "Please select JSON file.", type: "danger" });
      }
      else {
        RNFS.readFile(file.uri)
          .then((res) => {
            let data = JSON.parse(res);
            data = data?.map((k, i) => {
              if (k?.model) {
                return {
                  id: +new Date + i,
                  model: k?.model,
                  note: k?.note,
                  os: k?.os,
                  owner: k?.owner,
                }
              }
              else return undefined
            })
            data = data.filter(d => d);
            if (data?.length) {
              dispatch(bulkAdd(data))
              showMessage({ message: "File imported successfully.", type: "success" });
            }
            else throw {}
          }).catch(err => {
            showMessage({ message: "Invalid JSON file.", type: "danger" });
          })
      }
    })

  }

  const normalisePath = (path) => Platform.select({ ios: path, android: `file://${path}` });

  const _export = async () => {
    if (!devices?.length) {
      showMessage({ message: "There is no data to be export.", type: "warning" });
      return
    }
    const fileName = `${RNFS.TemporaryDirectoryPath}${+new Date}.json`
    RNFS.writeFile(fileName, JSON.stringify(devices)).then(() => {
      Share.open({ url: normalisePath(fileName) })
    }).catch((err) => {
      showMessage({ message: "Error occured, please try again later.", type: "danger" });
    })
  }

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
              <Text style={styles.fs20} >No record found.</Text>
              <Text style={styles.fs20} >Click below + icon to add one.</Text>
            </View>
          )
        }}
      />
      <FloatingAction
        actions={[
          {
            text: "Add a device",
            icon: require("@img/plus.png"),
            name: "add",
            position: 1
          },
          {
            text: "Import JSON file",
            icon: require("@img/import.png"),
            name: "import",
            position: 2
          },
          {
            text: "Export JSON file",
            icon: require("@img/export.png"),
            name: "export",
            position: 3
          },
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