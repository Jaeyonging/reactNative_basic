import React, {useEffect, useLayoutEffect, useCallback} from 'react';
//prettier-ignore
import { StyleSheet,View,Text,SafeAreaView,Platform,LayoutChangeEvent, ActivityIndicator} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import * as D from '../data';
import {useLayout} from '../hooks';

const title = 'LifeCycle';

export default function LifeCycle() {
  const [layout, setLayout] = useLayout();
  return (
    <View onLayout={setLayout} style={styles.view}>
      <Text style={styles.title}>LifeCycle</Text>
      <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
});

/*
export default function LifeCycle() {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called');
    return () => console.log(Platform.OS, 'useEffect finished');
  });
  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called');
    return () => console.log(Platform.OS, 'useLayoutEffect finished');
  });
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    console.log(Platform.OS, 'onLayouted ', layout);
  }, []);
  console.log(Platform.OS, 'render start');
  return (
    <View onLayout={onLayout} style={styles.view}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: Colors.blue900, flex: 1},
  text: {fontSize: 30, fontWeight: '600', color: 'white'},
});*/
