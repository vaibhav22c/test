import React, { memo, useEffect, useState } from "react";
import { View, KeyboardAvoidingView, Alert, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import Input from "../../component/common/input";
import Picker from "../../component/common/picker";
import Button from "../../component/common/button";
import QuoteModal from "../../component/quoteModal";
import { options } from "@util/const";
import colors from "@util/colors";
import { addDevice, updateDevice, deleteDevice } from "@reducer/devices";
import styles from "./styles";

const AddDevice = ({ route }) => {
  const param = route?.params?.item || {}
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showModal, _showModal] = useState()
  const [id] = useState(param?.id)
  const [model, _model] = useState(param?.model)
  const [os, _os] = useState(param?.os)
  const [owner, _owner] = useState(param?.owner)
  const [note, _note] = useState(param?.note)
  const [showError, _showError] = useState(false)

  const _save = () => {
    if (!model?.trim()) {
      _showError(true)
      showMessage({ message: "Please enter modal name", type: "warning" });
      return
    }
    const param = {
      id: +new Date,
      model,
      os: os?.trim(),
      owner: owner?.trim(),
      note: note?.trim()
    }
    dispatch(addDevice(param))
    showMessage({ message: "Device added successfully", type: "success" });
    navigation.goBack()
  }
  const _update = () => {
    if (!model?.trim()) {
      _showError(true)
      showMessage({ message: "Please enter modal name", type: "warning" });
      return
    }
    const param = {
      id,
      model,
      os: os?.trim(),
      owner: owner?.trim(),
      note: note?.trim()
    }
    dispatch(updateDevice(param))
    showMessage({ message: "Record updated successfully", type: "success" });
    navigation.goBack()
  }
  const _delete = () => {
    Alert.alert(
      "Are you sure want to delete?",
      "",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes", onPress: () => {
            dispatch(deleteDevice(id))
            _showModal(true)
          }
        }
      ]
    );
  }

  useEffect(() => {
    if (showModal == false) {
      showMessage({ message: "Record deleted successfully", type: "success" });
      navigation.goBack()
    }
  }, [showModal])

  return (
    <KeyboardAvoidingView enabled
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={styles.container} keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.flex}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
      >
        <Input
          placeholder={'Enter Model name'}
          label={'Model'}
          onChangeText={_model}
          value={model}
          error={showError}
        />
        <Picker
          label={'Device OS'}
          onValueChange={_os}
          option={options}
          value={os}
        />
        <Input
          placeholder={'Enter Current Owner name'}
          label={'Current Owner'}
          onChangeText={_owner}
          value={owner}
        />
        <Input
          placeholder={'Enter Notes'}
          label={'Notes'}
          onChangeText={_note}
          value={note}
          multiline
        />

        <View style={styles.btnView} >
          <Button title={id ? 'Update' : 'Save'} onPress={id ? _update : _save} />
          {id ?
            <Button title={'Delete'} onPress={_delete} style={{ backgroundColor: colors.red }} />
            : null}
        </View>
        {
          showModal ?
            <QuoteModal close={() => _showModal(false)} />
            : null
        }
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default memo(AddDevice)