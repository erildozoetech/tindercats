import React from 'react';
import { View, Text } from 'react-native';
import styles from './emptyContent.styles';
import { IEmptyContentPropTypes } from './emptyContent.types';


const EmptyContent = ({ text }: IEmptyContentPropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
};
export default EmptyContent;