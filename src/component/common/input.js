import React, { memo } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import colors from '@util/colors';

const Input = ({ value, label, error, ...props }) => {
  return (
    <View style={[styles.view, props?.style]}>
      {label ? <Text style={styles.label} >{label}</Text> : null}
      <TextInput
        {...props}
        // onChangeText
        value={value?.toString()}
        autoCapitalize="none"
        style={[styles.textInput, {
          borderColor: ((!value?.trim() && error)) ? colors.red : colors.lightgray,
          height: props?.multiline ? 120 : 45
        }]}
      />
    </View>
  )
}

export default memo(Input)

const styles = StyleSheet.create({
  view: { marginTop: 15 },
  label: {
    fontSize: 14, fontWeight: '500',
    lineHeight: 20, color: colors.label
  },
  textInput: {
    marginVertical: 6, paddingHorizontal: 8, paddingVertical: 0,
    borderWidth: 1, borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: 'rgba(16,24,40,0.05)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    color: colors.black
  }
})