import styles from 'src/modules/BackgroundGradient/styles';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENT_COLORS} from './consts';

const BackgroundGradient: React.FC = ({children}) => (
  <LinearGradient
    start={{x: 0.0, y: 1.0}}
    end={{x: 0.8, y: 0.0}}
    locations={[0.45, 1.0]}
    colors={GRADIENT_COLORS}
    style={styles.linearGradient}>
    {children}
  </LinearGradient>
);

export default BackgroundGradient;
