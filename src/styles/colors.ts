export type Color =
  | 'white'
  | 'darkBlue'
  | 'transparent'
  | 'magenta'
  | 'lightGreen'
  | 'lightPink'
  | 'pink'
  | 'gray'
  | 'black'
  | 'gold'
  | 'silver'
  | 'lightgray'
  | 'blue'
  | 'coralred'
  | 'orange'
  | 'yellow'
  | 'lightOrange'
  | 'darkgray'
  | 'red'
  | 'green'
  | 'emerald'
  | 'darkMagenta';

export const colors: Record<Color, string> = {
  white: '#FFFFFF',
  darkBlue: '#292C5A',
  transparent: 'transparent',
  magenta: '#C80182',
  lightGreen: '#A1CC76',
  lightPink: '#cf1076',
  pink: '#c80082',
  gray: '#666666',
  black: '#000000',
  gold: '#FFB300',
  silver: 'silver',
  yellow: '#ffb300',
  coralred: '#f35844',
  orange: '#ffa500',
  lightOrange: '#FFB300',
  blue: '#21d0c3',
  lightgray: '#B4B4B4',
  darkgray: '#3E3E3E',
  red: '#ff0000',
  green: '#008000',
  emerald: '#6cf1a6',
  darkMagenta: '#a8006c',
};

export type TransparentColor = 'darkBlue' | 'white';

export const transparentColors: Record<TransparentColor, string> = {
  darkBlue: 'rgba(41, 44, 90, 0.5)',
  white: 'rgba(255, 255, 255, 0.5)',
};
