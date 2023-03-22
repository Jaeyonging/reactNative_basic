import React, {FC} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import * as D from '../data';

const title = 'Country';

export type CountryProps = {
  country: D.ICountry;
};

const Country: FC<CountryProps> = ({country}) => {
  const {name, population, subregion, region} = country;
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Text>population: {population}</Text>
        <Text>subregion: {subregion}</Text>
        <Text>region: {region}</Text>
      </View>
    </View>
  );
};
export default Country;

const styles = StyleSheet.create({
  view: {padding: 5},
  name: {fontSize: 30, fontWeight: '400'},
});
