import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Container, Image, Wrapper, Text, Button} from './styles';

export default function Dashboard() {
  const {logOut} = useAuth();
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
        <Button onPress={() => navigate('Brand')}>
          <Text> Listar marca</Text>
        </Button>

        <Button onPress={() => navigate('Veiculo')}>
          <Text>Listar Veiculo</Text>
        </Button>
        <Button onPress={() => navigate('Reservation')}>
          <Text>Listar Reservas</Text>
        </Button>
        <Button
          onPress={() => {
            logOut();
          }}>
          <Text>Sair</Text>
        </Button>
      </Wrapper>
    </Container>
  );
}
