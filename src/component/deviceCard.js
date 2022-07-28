import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Button from './common/button';

const DeviceCard = ({ item }) => {
  const navigation = useNavigation()
  const { colors } = useTheme();
  return (
    <View style={[styles(colors).card]}>
      <View style={styles(colors).row} >
        <View style={styles(colors).flex} >
          <Text style={styles(colors).label} >Model: <Text style={styles(colors).value}>{item?.model}</Text></Text>
          <Text style={styles(colors).label} >OS: <Text style={styles(colors).value}>{item?.os || `-`}</Text></Text>
          <Text style={styles(colors).label} >Owner: <Text style={styles(colors).value}>{item?.owner || `-`}</Text></Text>
          <Text style={styles(colors).label} >Note: <Text style={styles(colors).value}>{item?.note || `-`}</Text></Text>
        </View>
        <QRCode
          value={item?.model?.toString()}
          size={100}
        />
      </View>
      <Button title='Edit' onPress={() => navigation.navigate('Devices', { item })} />
    </View>
  )
}

export default memo(DeviceCard)

const styles = (c) => StyleSheet.create({
  card: {
    marginVertical: 6, padding: 10,
    borderWidth: 1, borderRadius: 8,
    backgroundColor: c.card,
    shadowColor: 'rgba(16,24,40,0.05)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    borderColor: c.border,
  },
  flex: { flex: 1, marginRight: 20 },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 3,
    color: c.text
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: c.text
  }
})