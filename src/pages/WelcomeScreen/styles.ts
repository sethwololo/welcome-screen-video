import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Video from 'react-native-video';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundVideo = styled(Video)`
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  width: 100%;
  height: 100%;
`;

export const AppLogo = styled.Image`
  margin-top: 32px;
`;

export const DescriptionText = styled.Text`
  color: #f9f9fb;
  font-size: 32px;
  margin-top: 16px;
`;

export const BottomWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  border: 2px #f9f9fb;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const SignInButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  margin-left: 12px;
  border: 2px #05a081;
  background-color: #05a081;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #f9f9fb;
  font-size: 18px;
`;

export const GuestContinue = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const GuestContinueText = styled.Text`
  color: #f9f9fb;
  font-size: 16px;
  text-decoration: underline;
  text-decoration-color: #f9f9fb;
`;
