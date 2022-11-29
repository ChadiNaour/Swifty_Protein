import React, { useCallback } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import ligands from "../assets/Ligands/Ligands.json";
import { useFonts } from 'expo-font';

const FlatListComponent = () => {
  const [fontsLoaded] = useFonts({
    'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  interface renderedItem {
    item: string;
  }

  const renderItem = ({ item }: renderedItem) => {
    return (
      <View style={ligands.indexOf(item) === 0 ? styles.firstListItem : styles.listItem}>
        <Text style={{
          fontFamily: 'NexaBold',
          fontSize: 16,
          color: "#5E5E5F",
          marginLeft: 20
        }}>{item}</Text>
        <Feather style={styles.chevronIcon} name="chevron-right" size={28} color="#5E5E5F" />
      </View>
    )
  };


  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <FlatList
        data={ligands}
        renderItem={renderItem}
        keyExtractor={(item) => (item)}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  firstListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 10,
    width: 350,
    marginTop: 50

  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 10,
    width: 350,
  },
  chevronIcon: {
    marginRight: 10
  }
});

export default FlatListComponent;