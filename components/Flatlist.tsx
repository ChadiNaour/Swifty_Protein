import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Feather from "react-native-vector-icons/Feather";
import { useFonts } from 'expo-font';
import * as Network from 'expo-network';

interface ligandsData {
  DATA: string[];
}

interface Atom {
  name: string;
  x: number;
  y: number;
  z: number;
}

const FlatListComponent = ({ DATA }: ligandsData) => {
  const [fontsLoaded] = useFonts({
    'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
  });
  const [loading, setLoading] = useState(false)

  //Getting the clicked ligand Data
  const getLigandData = async (item: string) => {
    console.log("the clicked item", item);
    //checking connection before getting the data
    await Network.getNetworkStateAsync().then(res => {
      setLoading(true);
      if (res.isConnected) {
        axios.get(`https://files.rcsb.org/ligands/view/${item}_ideal.pdb`)
          .then(res => {
            setLoading(false);
            var Atoms: Atom[] = [];
            res.data.split("\n").forEach((element: string, index: number) => {
              let elem = element.replace(/\s+/g, " ").split(" ");
              console.log(index,elem);
              // if (elem.includes("ATOM")) {
              //   Atoms[index].x = Number(elem[6]);
              //   Atoms[index].x = Number(elem[7]);
              //   Atoms[index].x = Number(elem[8]);
              //   Atoms[index].name = elem[11];
              // }
              // else if (elem.includes("CONECT")){

              // }      
            });
            console.log(Atoms);
          })
      }
    })
  }

  //Ckecking the connection
  useEffect(() => {
    const checkNetwork = async () => {
      await Network.getNetworkStateAsync().then(res => {
        if (res.isConnected === false) {
          Alert.alert(
            'No Internet Connection',
            'Please check your internet connection',
            [{ text: 'OK' }],
          );
        }
      });
    }
    checkNetwork();
  }, []);

  const onLayoutRootView = useCallback(async () => {
  }, [fontsLoaded]);


  interface renderedItem {
    item: string;
  }

  const renderItem = ({ item }: renderedItem) => {
    return (
      <Pressable style={DATA.indexOf(item) === 0 ? styles.firstListItem : styles.listItem} onPress={() => { getLigandData(item) }}>
        <Text style={{
          fontFamily: 'NexaBold',
          fontSize: 16,
          color: "#5E5E5F",
          marginLeft: 20
        }}>{item}</Text>
        <Feather style={styles.chevronIcon} name="chevron-right" size={28} color="#5E5E5F" />
      </Pressable>
    )
  };


  return (
    <>
      {loading && <ActivityIndicator
        size="large"
        color="#fff"
        animating={loading}
        style={styles.indicatorStyle}
      />}
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => (item)}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  indicatorStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: -1,
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
    marginTop: 70

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