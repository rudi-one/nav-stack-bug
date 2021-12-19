import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {roundRippleConfig} from 'src/styles/consts';
import styles from './styles';
import {RoundButtonProps} from './types';

const RoundButton: React.FC<RoundButtonProps> = (props: RoundButtonProps) => {
  const {disabled, text, size} = props;
  const isBig = size === 'big';

  return (
    <View
      style={[
        styles.container,
        isBig ? styles.bigButton : styles.smallButton,
        disabled ? styles.disabled : {},
      ]}>
      <Pressable
        {...props}
        android_disableSound={true}
        android_ripple={roundRippleConfig}
        style={styles.pressable}>
        <Text style={[styles.text, !isBig ? styles.smallText : {}]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default RoundButton;
