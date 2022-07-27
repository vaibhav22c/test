import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '@util/colors';

const Picker = ({ value, label, option, ...props }) => {
  return (
    <View style={[styles.view, props?.style]}>
      {label ? <Text style={styles.label} >{label}</Text> : null}
      <RNPickerSelect
        value={value}
        {...props}
        items={option}
        style={styles.pickerStyles}
        useNativeAndroidPickerStyle={false}
      />
    </View >
  )
}

export default memo(Picker)

const styles = StyleSheet.create({
  view: { marginTop: 15 },
  label: {
    fontSize: 14, fontWeight: '500',
    lineHeight: 20, color: colors.label
  },
  pickerStyles: {
    inputIOS: {
      height: 45,
      marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
      borderWidth: 1, borderRadius: 8,
      backgroundColor: colors.white,
      shadowColor: 'rgba(16,24,40,0.05)',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
      color: colors.black,
      borderColor: colors.lightgray
    },
    inputAndroid: {
      height: 45,
      marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
      borderWidth: 1, borderRadius: 8,
      backgroundColor: colors.white,
      shadowColor: 'rgba(16,24,40,0.05)',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
      color: colors.black,
      borderColor: colors.lightgray
    },
  }
})