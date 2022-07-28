import React, { memo } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { useTheme } from "@react-navigation/native";
import COLOR from '@util/colors';

const Input = ({ value, label, error, ...props }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles(colors).view, props?.style]}>
      {label ? <Text style={styles(colors).label} >{label}</Text> : null}
      <TextInput
        {...props}
        value={value?.toString()}
        autoCapitalize="none"
        style={[styles(colors).textInput, {
          borderColor: ((!value?.trim() && error)) ? COLOR.red : colors.border,
          height: props?.multiline ? 120 : 45
        }]}
      />
    </View>
  )
}

export default memo(Input)

const styles = (c) => StyleSheet.create({
  view: { marginTop: 15 },
  label: {
    fontSize: 14, fontWeight: '500',
    lineHeight: 20, color: c.text
  },
  textInput: {
    marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
    borderWidth: 1, borderRadius: 8,
    backgroundColor: c.card,
    shadowColor: 'rgba(16,24,40,0.05)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    color: c.text
  }
})