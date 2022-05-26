import React, { useCallback, useRef } from 'react';
import { Animated, TouchableWithoutFeedback, Text } from 'react-native';
import IconSvg from '../../../../globalComponents/IconSvg/iconSvg.components';

import styles from './roundedButton.styles';
import { IRoundedButtonPropTypes } from './roundedButton.types';

export default function RoundButton({ iconName, onPress }: IRoundedButtonPropTypes) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale]
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1);
        onPress();
      }}
      delayPressOut={110}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <IconSvg name={iconName} width={27} height={27} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
