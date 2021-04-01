import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Container, Image, Wrapper, Text, BrandButton} from './styles';

export default function Dashboard() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Wrapper>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/callstack/react-native-paper-login-template/8d88cdbf1c551d3403b36c09c63dfd046adf776e/src/assets/logo.png',
          }}
        />
        <Text>Bem vindo a Locacao do Loucao</Text>
        <BrandButton onPress={() => navigate('Brand')}>
          <Text>Cadastrar Marca</Text>
        </BrandButton>
      </Wrapper>
    </Container>
  );
}
