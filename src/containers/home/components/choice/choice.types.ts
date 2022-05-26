export interface IChoicePropTypes {
  type: TColorChoice;
}

export interface IColorsChoice {
  like: string;
  nope: string;
}

type TColorChoice = 'like' | 'nope'