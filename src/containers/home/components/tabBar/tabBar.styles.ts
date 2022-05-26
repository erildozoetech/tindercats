import { StyleSheet } from "react-native";
import { height, width } from "../../../../globalStyles/config.styles";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    bottom: height * 0.03940886699507389,
    height: height * 0.0541871921182266,
    width: width * 0.416,
    borderRadius: 36,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: '#BFBFC04D',
    shadowOpacity: 0.30,
    shadowRadius: 4,
  }
});

export default styles;
