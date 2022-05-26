import { IconsTypePropTypes } from "../../../../globalComponents/IconSvg/iconSvg.types";

export interface ITabBarPropTypes {
  options: Array<TOption>;
  active: number;
  handleChangeTabs: (index: number) => void;
}

export type TOption = {
  kind: string;
  iconOn: IconsTypePropTypes;
  iconOff: IconsTypePropTypes;
  active: boolean;
}