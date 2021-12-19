import {TextStyle} from 'react-native';
import {fontPicker, moderateScaleToMax} from 'src/utils/helpers';
import {colors} from './colors';

export type FontSize = 'x6' | 'x8' | 'x10' | 'x20' | 'x30' | 'x40' | 'x50';
type HeaderSize = 'x10' | 'x20' | 'x30' | 'x40';
type SubHeaderSize = 'x8' | 'x10' | 'x20' | 'x30';
type BodySize = 'x6' | 'x8' | 'x10' | 'x20' | 'x30';

type FontWeight = 'bold' | 'normal';
type TextAlign = 'left' | 'center';
type FontFamily = 'roboto' | 'coreMellow';

export const fontSize: Record<FontSize, TextStyle> = {
  x6: {
    fontSize: moderateScaleToMax(10),
  },
  x8: {
    fontSize: moderateScaleToMax(12),
  },
  x10: {
    fontSize: moderateScaleToMax(14),
  },
  x20: {
    fontSize: moderateScaleToMax(16),
  },
  x30: {
    fontSize: moderateScaleToMax(18),
  },
  x40: {
    fontSize: moderateScaleToMax(24),
  },
  x50: {
    fontSize: moderateScaleToMax(30),
  },
};

export const fontWeight: Record<FontWeight, TextStyle> = {
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
};

export const textAlign: Record<TextAlign, TextStyle> = {
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
};

export const fontFamily: Record<FontFamily, TextStyle> = {
  roboto: {
    fontFamily: fontPicker('Roboto'),
  },
  coreMellow: {
    fontFamily: fontPicker('CoreMellow'),
  },
};

const baseHeaderStyle: TextStyle = {
  ...fontFamily.coreMellow,
  ...textAlign.center,
  color: colors.white,
};

const baseSubHeaderStyle: TextStyle = {
  ...fontFamily.roboto,
  ...textAlign.center,
  ...fontWeight.bold,
  color: colors.white,
};

const baseBodyStyle: TextStyle = {
  ...fontFamily.roboto,
  color: colors.white,
};

export const headerStyles: Record<HeaderSize, TextStyle> = {
  x10: {
    ...baseHeaderStyle,
    ...fontSize.x10,
  },
  x20: {
    ...baseHeaderStyle,
    ...fontSize.x20,
  },
  x30: {
    ...baseHeaderStyle,
    ...fontSize.x30,
  },
  x40: {
    ...baseHeaderStyle,
    ...fontSize.x40,
  },
};

export const subHeaderStyles: Record<SubHeaderSize, TextStyle> = {
  x8: {
    ...baseSubHeaderStyle,
    ...fontSize.x8,
  },
  x10: {
    ...baseSubHeaderStyle,
    ...fontSize.x10,
  },
  x20: {
    ...baseSubHeaderStyle,
    ...fontSize.x20,
  },
  x30: {
    ...baseSubHeaderStyle,
    ...fontSize.x30,
  },
};

export const bodyStyles: Record<BodySize, TextStyle> = {
  x6: {
    ...baseBodyStyle,
    ...fontWeight.normal,
    ...fontSize.x6,
  },
  x8: {
    ...baseBodyStyle,
    ...fontWeight.normal,
    ...fontSize.x8,
  },
  x10: {
    ...baseBodyStyle,
    ...fontWeight.normal,
    ...fontSize.x10,
  },
  x20: {
    ...baseBodyStyle,
    ...fontWeight.normal,
    ...fontSize.x20,
  },
  x30: {
    ...baseBodyStyle,
    ...fontWeight.normal,
    ...fontSize.x30,
  },
};

export const boldBodyStyles: Record<BodySize, TextStyle> = {
  x6: {
    ...baseBodyStyle,
    ...fontWeight.bold,
    ...fontSize.x6,
  },
  x8: {
    ...baseBodyStyle,
    ...fontWeight.bold,
    ...fontSize.x8,
  },
  x10: {
    ...baseBodyStyle,
    ...fontWeight.bold,
    ...fontSize.x10,
  },
  x20: {
    ...baseBodyStyle,
    ...fontWeight.bold,
    ...fontSize.x20,
  },
  x30: {
    ...baseBodyStyle,
    ...fontWeight.bold,
    ...fontSize.x30,
  },
};
