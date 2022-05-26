import React from 'react';
import { Text, View } from 'react-native';
import styles from './choice.styles';
import { IChoicePropTypes, IColorsChoice } from './choice.types';

export default function Choice({ type }: IChoicePropTypes) {

  const COLORS: IColorsChoice = {
    like: '#00eda6',
    nope: '#ff006f',
  };

  const color = COLORS[type];

  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{type}</Text>
    </View>
  );
}
