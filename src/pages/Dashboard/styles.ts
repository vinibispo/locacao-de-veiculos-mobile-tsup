import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #f7f7f9;
  flex: 1;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: blue;
`;

export const Image = styled.Image`
  margin-top: 30px;
  width: 128px;
  height: 128px;
  align-self: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: #000;
  font-weight: bold;
`;

export const BrandButton = styled(RectButton)`
  background: #f2f2f2;
  border-radius: 3px;
  padding: 3px;
`;
