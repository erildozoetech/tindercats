import { StyleSheet } from 'react-native';
import { height } from '../../../../globalStyles/config.styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height * 0.16502463054187192,
    width: 156,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    zIndex: -1,
  },
});

export default styles;