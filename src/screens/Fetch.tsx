import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import Country from './Country';
import * as D from '../data';

const title = 'Fetch';
export default function Fetch() {
  const [countries, setCountries] = useState<D.ICountry[]>([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    D.getCountries().then(setCountries).catch(setError);
  }, []);
  return (
    <View style={styles.view}>
      <Text style={[styles.text]}>{title}</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={styles.separator}></View>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: Colors.blue100,
    flex: 1,
    alignItems: 'center',
  },
  text: {fontSize: 20, color: 'white'},
  title: {fontSize: 30, fontWeight: '600'},
  separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1},
});
