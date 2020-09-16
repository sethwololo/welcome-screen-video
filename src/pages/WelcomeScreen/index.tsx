import React from 'react';
import { SafeAreaView } from 'react-native';

import exampleVideo from '../../assets/example.mp4';
import appLogo from '../../assets/AppLogo.png';

import {
  Container,
  BackgroundVideo,
  AppLogo,
  Content,
  DescriptionText,
  BottomWrapper,
  ButtonsWrapper,
  SignInButton,
  SignUpButton,
  ButtonText,
  GuestContinue,
  GuestContinueText,
} from './styles';

const WelcomeScreen: React.FC = () => {
  return (
    <Container>
      <BackgroundVideo
        source={exampleVideo}
        muted
        repeat
        resizeMode="cover"
        rate={1.0}
        ignoreSilentSwitch="obey"
      />

      <SafeAreaView>
        <Content>
          <AppLogo source={appLogo} />

          <DescriptionText>Seja bem-vindo</DescriptionText>

          <BottomWrapper>
            <ButtonsWrapper>
              <SignUpButton onPress={() => {}}>
                <ButtonText>FAZER PARTE</ButtonText>
              </SignUpButton>

              <SignInButton onPress={() => {}}>
                <ButtonText>ENTRAR</ButtonText>
              </SignInButton>
            </ButtonsWrapper>
            <GuestContinue onPress={() => {}}>
              <GuestContinueText>Continuar como visitante</GuestContinueText>
            </GuestContinue>
          </BottomWrapper>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default WelcomeScreen;
