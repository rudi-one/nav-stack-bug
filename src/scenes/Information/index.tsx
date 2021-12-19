import {useNavigation} from '@react-navigation/native';
import Button from 'buttons/Button';
import SwitchRow from 'components/SwitchRow';
import {StackNavigationProps} from 'src/navigation/StackNavigator/types';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

const Information = () => {
  const navigation = useNavigation<StackNavigationProps>();
  const [value, setValue] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionBottom}>
        <SwitchRow
          testID={'scanHintsSwitch'}
          type={'small'}
          text={"Don't show this information again"}
          value={value}
          onValueChange={() => {
            setValue(!value);
          }}
        />
        <Button text={'Go Back'} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Information;
