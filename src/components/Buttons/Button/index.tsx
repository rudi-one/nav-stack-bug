import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {roundRippleConfig} from 'src/styles/consts';
import styles from './styles';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {disabled, type} = props;
  const isTransparent = type === 'transparent';
  const isDark = type === 'dark';
  const isWhiteText = isTransparent || isDark;

  return (
    <View
      style={[
        styles.container,
        disabled ? styles.disabled : {},
        isTransparent ? styles.transparentContainer : {},
        isDark ? styles.darkContainer : {},
      ]}>
      <Pressable
        {...props}
        style={styles.pressable}
        android_disableSound={true}
        android_ripple={roundRippleConfig}>
        <Text
          numberOfLines={1}
          style={[styles.text, isWhiteText ? styles.whiteText : {}]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
