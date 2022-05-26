import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { ACTION_OFFSET, CARD } from '../../utils/constants';
import { tabBarOptions } from '../../utils/mockData';
import { getCatsList, postCatVote } from './services/index.services';
import { ICatItem } from './services/index.types';
import HomeLayout from './home.layout'

const HomeController = () => {

  const [catsOriginal, setCatsOriginal] = useState<Array<ICatItem>>([]);
  const [cats, setCats] = useState<Array<ICatItem>>([]);
  const [tabActive, setTabActive] = useState(0);
  const [loading, setLoading] = useState(true);

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  const handleChangeTabs = (index: number) => setTabActive(index);
  const handleSetCatsList = (catsList: Array<ICatItem>) => {
    setCats(catsList);
    setCatsOriginal(catsList);
    setLoading(false)
  }

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {

        postCatVote(direction, cats[0]);

        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    setCats((prevState: any) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoice = useCallback(
    (direction, cat) => {

      postCatVote(direction, cat);

      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x]
  );

  useEffect(() => {
    if (!cats.length && !loading) {
      setCats(catsOriginal);
    }

  }, [cats.length]);

  useEffect(() => {
    getCatsList(handleSetCatsList)
  }, [])

  return <HomeLayout
    states={{ cats, loading, tabBarOptions, tabActive, swipe, tiltSign, panResponder }}
    handlers={{ handleChoice, handleChangeTabs }}
  />
}

export default HomeController;