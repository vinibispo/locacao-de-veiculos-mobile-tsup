import React, {useEffect, useMemo, useState} from 'react';
import {Container} from './styles';
import {DataTable} from 'react-native-paper';
import api from '../../services/api';
interface Transport {
  id: number;
  nome: string;
  cor: string;
  qnt_passageiros: number;
  placa: string;
  valor: number;
  marca_id: number;
}

export function Veiculo() {
  const [veiculos, setVeiculos] = useState<Transport[]>([]);
  useEffect(() => {
    api.get<Transport[]>('veiculos.json').then((res) => {
      setVeiculos(res.data);
    });
  }, []);
  return (
    <Container>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Valor</DataTable.Title>
          <DataTable.Title>Qnt Passageiros</DataTable.Title>
          <DataTable.Title>Cor</DataTable.Title>
        </DataTable.Header>

        {veiculos.map((veiculo) => (
          <DataTable.Row key={veiculo.id}>
            <DataTable.Cell>{veiculo.nome}</DataTable.Cell>
            <DataTable.Cell>{veiculo.valor}</DataTable.Cell>
            <DataTable.Cell>{veiculo.qnt_passageiros}</DataTable.Cell>
            <DataTable.Cell>{veiculo.cor}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Container>
  );
}
