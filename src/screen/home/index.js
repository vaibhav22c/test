import React, { memo } from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Devices"
        onPress={() => navigation.navigate('Devices')}
      />
    </View>
  );
}

export default memo(Home)