import {HeaderBackButton} from '@react-navigation/elements';
import React from 'react';
import styles from './styles';
import {StackOptionProps} from './types';

export const renderBackButton = (props: StackOptionProps) => (
  <HeaderBackButton
    {...props}
    style={styles.backButtonOverride}
    labelVisible={false}
    onPress={props.onPress || props.navigation.goBack}
  />
);
