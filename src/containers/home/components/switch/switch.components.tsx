import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import IconSvg from '../../../../globalComponents/IconSvg/iconSvg.components';
import styles from './switch.styles';
import { IIconPropTypes, ISwitchPropTypes } from './switch.types';



const Switch = ({ isFavorite }: ISwitchPropTypes) => {
  const Icon = ({ name, isSelected }: IIconPropTypes) => {
    return (
      <TouchableOpacity style={[styles.icon, isSelected ? { backgroundColor: '#fff' } : {}]}>
        <IconSvg name={name} width={12} height={12} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Icon name={!isFavorite ? 'headerFireOn' : 'headerFireOff'} isSelected={!isFavorite} />
      <Icon name={isFavorite ? 'headerStarOn' : 'headerStarOff'} isSelected={isFavorite} />
    </View>
  )
};

export default Switch;