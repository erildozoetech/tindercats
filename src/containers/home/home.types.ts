import { ICatItem } from "./services/index.types";

export interface IHomePropTypes {
  states: IHomeLocalState;
  handlers: IHomeHandlers;
}

export interface IHomeLocalState {
  cats: Array<ICatItem>;
  loading: boolean;
  tabBarOptions: any;
  tabActive: number;
  panResponder: any;
  swipe: any;
  tiltSign: any;
}

export interface IHomeHandlers {
  handleChoice: (direction: number, cat: ICatItem) => void;
  handleChangeTabs: (tab: number) => void;
}