import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from "@react-navigation/native";

const Picker = ({ value, label, option, ...props }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles(colors).view, props?.style]}>
      {label ? <Text style={styles(colors).label} >{label}</Text> : null}
      <RNPickerSelect
        value={value}
        {...props}
        items={option}
        style={styles(colors).pickerStyles}
        useNativeAndroidPickerStyle={false}
      />
    </View >
  )
}

export default memo(Picker)

const styles = c => StyleSheet.create({
  view: { marginTop: 15 },
  label: {
    fontSize: 14, fontWeight: '500',
    lineHeight: 20, color: c.text
  },
  pickerStyles: {
    inputIOS: {
      height: 45,
      marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
      borderWidth: 1, borderRadius: 8,
      backgroundColor: c.card,
      shadowColor: 'rgba(16,24,40,0.05)',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
      color: c.text,
      borderColor: c.border
    },
    inputAndroid: {
      height: 45,
      marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
      borderWidth: 1, borderRadius: 8,
      backgroundColor: c.card,
      shadowColor: 'rgba(16,24,40,0.05)',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
      color: c.text,
      borderColor: c.border
    },
  }
})