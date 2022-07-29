import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, ActivityIndicator, View, Pressable, Text } from 'react-native';
import { useTheme } from "@react-navigation/native";
import { getAPI } from "../util/API";

const QuoteModal = ({ close = () => { } }) => {
  const { colors } = useTheme();
  const [loading, _loading] = useState(true)
  const [quote, _quote] = useState({})

  useEffect(() => {
    getAPI('https://zenquotes.io/api/today').then(res => {
      _quote(res?.[0] || {})
      _loading(false)
    }).catch(err => {
      _loading(false)
    })
  }, [])

  return (
    <Modal
      transparent
      visible={true}
      onRequestClose={close}
      animationType="none"
    >
      <View style={styles(colors).overlayStyle}>
        <View style={styles(colors).view} >
          <View style={styles(colors).header} >
            <Text style={styles(colors).headerText}>Today's quote</Text>
            <Pressable hitSlop={15} onPress={close} ><Text style={styles(colors).closeText} >X</Text></Pressable>
          </View>
          {loading ?
            <ActivityIndicator size="small" color={colors.notification} />
            :
            <>
              <Text style={styles(colors).quote}>{quote?.q}</Text>
              <Text style={styles(colors).author}>&mdash; {quote?.a}</Text>
            </>
          }

        </View>

      </View>
    </Modal>
  );
};

export default QuoteModal;

const styles = c => StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', color: c.text },
  headerText: { fontSize: 20, fontWeight: 'bold', color: c.text },
  view: {
    backgroundColor: c.card, flex: 1,
    margin: 20, padding: 20,
    minHeight: 150, borderRadius: 20,
    borderColor: c.border, borderWidth: 3
  },
  closeText: {
    color: c.text,
    fontSize: 18, fontWeight: 'bold',
  },
  quote: { fontSize: 16, marginVertical: 10, lineHeight: 22, color: c.text },
  author: {
    fontSize: 16, marginVertical: 10,
    alignSelf: 'flex-end', fontWeight: '600',
    color: c.text
  }
});