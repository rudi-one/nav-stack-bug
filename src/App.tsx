import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import BackgroundGradient from 'src/modules/BackgroundGradient';
import SafeArea from 'src/components/SafeArea';

const App = () => {
  return (
    <BackgroundGradient>
      <SafeArea>
        <RootNavigation />
      </SafeArea>
    </BackgroundGradient>
  );
};

export default App;
