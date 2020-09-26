import React from 'react';
import { StatusBar } from 'react-native';

import WelcomeScreen from './pages/WelcomeScreen';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <WelcomeScreen />
    </>
  );
};

export default App;
