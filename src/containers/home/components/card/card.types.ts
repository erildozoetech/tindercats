import { ICatItem } from "../../services/index.types";

export interface ICardPropTypes {
  swipe: any;
  tiltSign: any;
  cat: ICatItem;
  handleChoice: (direction: number, cat: ICatItem) => void;
}