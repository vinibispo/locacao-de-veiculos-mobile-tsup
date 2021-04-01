import React, {useEffect, useMemo, useState} from 'react';
import {Container} from './styles';
import {DataTable} from 'react-native-paper';
import api from '../../services/api';
import {format} from 'date-fns';
interface Marca {
  id: number;
  nome: string;
  created_at: string;
  updated_at: string;
}

export function Brand() {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  useEffect(() => {
    api.get<Marca[]>('marcas.json').then((res) => {
      setMarcas(res.data);
    });
  }, []);
  const marcasFormatted = useMemo(() => {
    return marcas.map((marca) => ({
      ...marca,
      created_at: format(new Date(marca.created_at), 'dd/MM/yyyy kk:mm'),
      updated_at: format(new Date(marca.updated_at), 'dd/MM/yyyy kk:mm'),
    }));
  }, [marcas]);
  return (
    <Container>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Criado Em</DataTable.Title>
          <DataTable.Title>Atualizado Em</DataTable.Title>
        </DataTable.Header>

        {marcasFormatted.map((marca) => (
          <DataTable.Row key={marca.id}>
            <DataTable.Cell>{marca.nome}</DataTable.Cell>
            <DataTable.Cell>{marca.created_at}</DataTable.Cell>
            <DataTable.Cell numeric>{marca.updated_at}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Container>
  );
}
