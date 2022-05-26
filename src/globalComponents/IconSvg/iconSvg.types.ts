import { StyleProp, ViewStyle } from 'react-native'

export interface PropsIcon {
    name: IconsTypePropTypes
    height?: string | number
    width?: string | number
    style?: StyleProp<ViewStyle>
}

export type IconsTypePropTypes =
    'headerFireOn'
    | 'headerFireOff'
    | 'headerStarOn'
    | 'headerStarOff'
    | 'declineIcon'
    | 'heartIcon'
    | 'catsPawIconOn'
    | 'catsPawIconOff'
    | 'chatIconOn'
    | 'chatIconOff'
    | 'userIconOn'
    | 'userIconOff'

export interface IconsPropTypes {
    headerFireOn: string;
    headerFireOff: string;
    headerStarOn: string;
    headerStarOff: string;
    declineIcon: string;
    heartIcon: string;
    catsPawIconOn: string;
    catsPawIconOff: string;
    chatIconOn: string;
    chatIconOff: string;
    userIconOn: string;
    userIconOff: string;

}
