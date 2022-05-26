import { Platform, Dimensions, NativeModules } from 'react-native';

export const isIOS = Platform.OS === 'ios';

const { StatusBarManager } = NativeModules;

export const { height, width } = Dimensions.get('window');

export const sizeStatusBar = StatusBarManager.HEIGHT;

export const hitslop = { top: 5, left: 5, bottom: 5, right: 5 };