import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import RoundButton from 'buttons/RoundButton';
import {scanButtonHandler} from 'src/scenes/Home/helpers';

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.scanButtonContainer}>
          <RoundButton size={'big'} text={'Scan'} onPress={scanButtonHandler} />
        </View>
      </View>
    </>
  );
};

export default Home;
