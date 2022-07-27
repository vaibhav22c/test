import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import colors from '@util/colors';

const Button = ({ title, onPress, ...props }) => {
  return (
    <TouchableOpacity style={[styles.btn, props.style]} onPress={onPress} >
      <Text style={styles.btntext} >{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(Button)

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 20,
    marginTop: 20
  },
  btntext: {
    color: colors.white, fontSize: 16,
    fontWeight: '600', marginVertical: 10,
    marginHorizontal: 20
  }
})