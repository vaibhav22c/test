import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, ActivityIndicator, View, Pressable, Text } from 'react-native';
import colors from "@util/colors";
import { getAPI } from "@util/API";

const QuoteModal = ({ close = () => { } }) => {
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
      <View style={styles.overlayStyle}>
        <View style={styles.view} >
          <View style={styles.header} >
            <Text style={styles.headerText}>Today's quote</Text>
            <Pressable hitSlop={15} onPress={close} ><Text style={styles.closeText} >X</Text></Pressable>
          </View>
          {loading ?
            <ActivityIndicator size="small" color={colors.red} />
            :
            <>
              <Text style={styles.quote}>{quote?.q}</Text>
              <Text style={styles.author}>&mdash; {quote?.a}</Text>
            </>
          }

        </View>

      </View>
    </Modal>
  );
};

export default QuoteModal;

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  view: {
    backgroundColor: colors.white, flex: 1,
    margin: 20, padding: 20,
    minHeight: 150, borderRadius: 20
  },
  closeText: {
    fontSize: 18, fontWeight: 'bold'
  },
  quote: { fontSize: 16, marginVertical: 10, lineHeight: 22 },
  author: {
    fontSize: 16, marginVertical: 10,
    alignSelf: 'flex-end', fontWeight: '600'
  }
});