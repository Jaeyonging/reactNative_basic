import React from 'react';
import type {FC, ReactNode, ComponentProps} from 'react';
import {TouchableOpacity, View, ViewStyle, StyleProp} from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>
  );
};
