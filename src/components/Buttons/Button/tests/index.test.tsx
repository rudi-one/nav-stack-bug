import {render} from '@testing-library/react-native';
import Button from 'buttons/Button';
import React from 'react';

describe('<Button /> tests', () => {
  it('should match normal button snapshot', () => {
    const component = <Button text={'test'} type={'normal'} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match normal disabled button snapshot', () => {
    const component = <Button text={'test'} type={'normal'} disabled={true} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match dark button snapshot', () => {
    const component = <Button text={'test'} type={'dark'} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match dark disabled button snapshot', () => {
    const component = <Button text={'test'} type={'dark'} disabled={true} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match transparent button snapshot', () => {
    const component = <Button text={'test'} type={'transparent'} />;

    expect(render(component)).toMatchSnapshot();
  });
  it('should match transparent disabled button snapshot', () => {
    const component = (
      <Button text={'test'} type={'transparent'} disabled={true} />
    );

    expect(render(component)).toMatchSnapshot();
  });
});
