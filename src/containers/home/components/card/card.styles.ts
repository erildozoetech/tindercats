import { StyleSheet } from 'react-native';
import { height, isIOS, sizeStatusBar, width } from '../../../../globalStyles/config.styles';
import { CARD } from '../../../../utils/constants';




const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: sizeStatusBar + (isIOS ? 60 : 40),
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: '#BFBFC04D',
    shadowOpacity: 0.10,
    shadowRadius: 4,
  },
  image: {
    width: width * 0.91466666666666667,
    height: height * 0.54926108374384236,
    borderRadius: CARD.BORDER_RADIUS,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    borderRadius: CARD.BORDER_RADIUS,
  },
  boxName: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: 22,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 1,
    height: height * 0.05911330049261084,
    width: width * 0.81866666666666667,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#434141',
  },
  subtitle: {
    fontSize: 8,
    color: '#BFBFC0',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: '-30deg' }],
  },
  nopeContainer: {
    right: 45,
    transform: [{ rotate: '30deg' }],
  },
});

export default styles;