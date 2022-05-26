import { StyleSheet } from "react-native";
import { isIOS, sizeStatusBar } from "../../../../globalStyles/config.styles";

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 28,
    backgroundColor: '#E3E3E4',
    top: sizeStatusBar + (isIOS ? 10 : -5),
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  icon: {
    width: 40,
    height: 24,
    backgroundColor: '#E3E3E4',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;