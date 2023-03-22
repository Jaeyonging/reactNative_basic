import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

export default function MainNavigator() {
  const [index, SetIndex] = useState<number>(0);
  const [routes] = useState([]);

  const renderScene = BottomNavigation.SceneMap({});

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={SetIndex}
      renderScene={renderScene}></BottomNavigation>
  );
}
