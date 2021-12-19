import {render} from '@testing-library/react-native';
import RoundButton from 'buttons/RoundButton';
import React from 'react';

describe('<Button /> tests', () => {
  it('should match snapshot of small button', () => {
    const component = <RoundButton text={'test'} size={'small'} />;
    expect(render(component)).toMatchSnapshot();
  });
  it('should match snapshot of big button', () => {
    const component = <RoundButton text={'test'} size={'big'} />;
    expect(render(component)).toMatchSnapshot();
  });
  it('should match snapshot of disabled button', () => {
    const component = (
      <RoundButton text={'test'} size={'small'} disabled={true} />
    );
    expect(render(component)).toMatchSnapshot();
  });
});
