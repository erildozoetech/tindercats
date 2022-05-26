import React from 'react';
import { View } from 'react-native';
import RoundButton from '../roundedButton/roundedButton.components';
import styles from './footer.styles';
import { IFooterPropTypes } from './footer.types';

export default function Footer({ handleChoice }: IFooterPropTypes) {
  return (
    <View style={styles.container}>
      <RoundButton
        iconName={'declineIcon'}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        iconName={'heartIcon'}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
}
