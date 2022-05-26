import React from 'react'
import { SvgCss } from 'react-native-svg'
import ListIcons from '../../assets/svgs/svgs'

import { PropsIcon } from '../../globalComponents/IconSvg/iconSvg.types'

const IconSvg = ({ name, height, width, style }: PropsIcon) => {
    return (
        <SvgCss
            xml={ListIcons[name]}
            width={width}
            height={height}
            style={style}
        />
    )
}

export default IconSvg
