import React, { useCallback } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import Choice from '../choice/choice.component';
import { ACTION_OFFSET } from '../../../../utils/constants';

import styles from './card.styles';
import Switch from '../switch/switch.components';
import Footer from '../footer/footer.component';
import { ICardPropTypes } from './card.types';

export default function Card({
  swipe,
  tiltSign,
  handleChoice,
  cat,
  ...rest
}: ICardPropTypes) {

  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            { opacity: nopeOpacity },
          ]}
        >
          <Choice type="nope" />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <>
      <Switch isFavorite={false} />
      <Animated.View
        style={[styles.container, animatedCardStyle]}
        {...rest}
      >
        <Image source={{ uri: cat.image.url }} style={styles.image} />

        <View style={styles.boxName}>
          <View style={styles.boxTitle}>
            <Text style={styles.name} numberOfLines={1}>{cat.name}</Text>
            <Text style={styles.name}>{cat.affection_level}</Text>
          </View>
          <Text style={styles.subtitle}>{cat.origin}</Text>
        </View>

        {renderChoice()}
      </Animated.View>

      <Footer handleChoice={(direction: number) => handleChoice(direction, cat)} />
    </>

  );
}
