import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import { ITabBarPropTypes, TOption } from './tabBar.types';
import styles from './tabBar.styles';
import IconSvg from '../../../../globalComponents/IconSvg/iconSvg.components';


const TabBar = ({ options, active, handleChangeTabs }: ITabBarPropTypes) => {

  return (
    <View style={styles.container}>
      {options.map((item: TOption, index: number) => {
        const { kind, iconOn, iconOff } = item
        return (
          <TouchableOpacity key={kind} onPress={() => handleChangeTabs(index)}>
            <IconSvg name={active === index ? iconOn : iconOff} height={20} width={20} />
          </TouchableOpacity>
        )
      })}
    </View>
  )

}

export default TabBar;