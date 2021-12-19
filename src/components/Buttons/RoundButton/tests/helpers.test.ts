import {ViewStyle} from 'react-native';
import {buttonSizeProperties} from '../helpers';

describe('RoundButton helpers tests', () => {
  it('setNewToken should call tokenSet action', () => {
    const buttonStyle: ViewStyle = {
      width: 100,
      height: 100,
      borderRadius: 50,
    };

    expect(buttonSizeProperties(100)).toMatchObject(buttonStyle);
  });
});
