import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import colors from '@util/colors';
import Button from './common/button';

const DeviceCard = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.card]}>
      <View style={styles.row} >
        <View style={styles.flex} >
          <Text style={styles.label} >Model: <Text style={styles.value}>{item?.model}</Text></Text>
          <Text style={styles.label} >OS: <Text style={styles.value}>{item?.os || `-`}</Text></Text>
          <Text style={styles.label} >Owner: <Text style={styles.value}>{item?.owner || `-`}</Text></Text>
          <Text style={styles.label} >Note: <Text style={styles.value}>{item?.note || `-`}</Text></Text>
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

const styles = StyleSheet.create({
  card: {
    marginVertical: 6, padding: 10,
    borderWidth: 1, borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: 'rgba(16,24,40,0.05)',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    borderColor: colors.lightgray,
  },
  flex: { flex: 1, marginRight: 20 },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 3
  },
  value: {
    fontSize: 16,
    fontWeight: '400'
  }
})