import {moderateScale} from 'src/utils/helpers';

export const BORDER_RADIUS = moderateScale(30);

export const BORDER_WIDTH = moderateScale(1.5);

export const TRANSPARENT_BUTTON_SCALE = 1 - BORDER_WIDTH / BORDER_RADIUS;
