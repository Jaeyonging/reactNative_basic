import React, {useState, useCallback, useEffect} from 'react';
//prettier-ignore
import {StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Button} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import * as D from '../data';
import {useToggle, useTimeout} from '../hooks';

export default function Timer() {
  const [loading, toggleLoading] = useToggle(true);
  useTimeout(() => loading && toggleLoading(), 3000, [loading]);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple500} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.yellow300,
    flex: 1,
    alignItems: 'center',
  },
  text: {fontSize: 20, color: 'white'},
  title: {fontSize: 30, fontWeight: '600'},
});

/*const title = 'Timer';
export default function Timer() {
  const [loading, setloading] = useState(true);
  const toggleLoading = useCallback(() => setloading(loading => !loading), []);
  useEffect(() => {
    console.log('useeffect called in timer');
    const id = setTimeout(() => setloading(false), 3000);
    return () => clearTimeout(id);
  }, [loading]);
  return (
    <View style={styles.view}>
      <Text style={[styles.text]}>{title}</Text>
      <Text> loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stoploading' : 'start loading'}></Button>
      {loading && (
        <ActivityIndicator
          size="large"
          color={Colors.deepPurple700}></ActivityIndicator>
      )}
    </View>
  );
}
*/
