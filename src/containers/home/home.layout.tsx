import React from 'react';
import { View, Text } from 'react-native';
import { sizeStatusBar } from '../../globalStyles/config.styles';

import Card from './components/card/card.component';
import EmptyContent from './components/emptyContent/emptyContent.components';
import TabBar from './components/tabBar/tabBar.components';
import styles from './home.styles';
import { IHomePropTypes } from './home.types';


const HomeLayout = ({ states, handlers }: IHomePropTypes) => {

  const { cats, loading, tabBarOptions, tabActive, panResponder, swipe, tiltSign } = states;

  const { handleChoice, handleChangeTabs } = handlers;

  return (
    <View style={styles.container}>

      {tabActive === 0 &&
        <>
          {!loading &&
            <Card
              key={cats[0].id}
              cat={cats[0]}
              swipe={swipe}
              tiltSign={tiltSign}
              handleChoice={handleChoice}
              {...panResponder.panHandlers}
            />
          }

        </>
      }

      {tabActive === 1 &&
        <EmptyContent text={'02'} />
      }

      {tabActive === 2 &&
        <EmptyContent text={'03'} />
      }


      <TabBar
        active={tabActive}
        options={tabBarOptions}
        handleChangeTabs={handleChangeTabs}
      />
    </View>
  )
};

export default HomeLayout;