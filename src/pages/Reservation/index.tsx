import React, {useEffect, useMemo, useState} from 'react';
import {Container} from './styles';
import {DataTable} from 'react-native-paper';
import api from '../../services/api';
import {format} from 'date-fns';
interface Reserva {
  id: number;
  reservado_de: string;
  reservado_ate: string;
}

export function Reservation() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  useEffect(() => {
    api.get<Reserva[]>('reservas.json').then((res) => {
      setReservas(res.data);
    });
  }, []);
  const reservationFormatted = useMemo(() => {
    return reservas.map((reserva) => ({
      ...reserva,
      reservado_de: format(new Date(reserva.reservado_de), 'dd/MM/yyyy HH:mm'),
      reservado_ate: format(
        new Date(reserva.reservado_ate),
        'dd/MM/yyyy HH:mm',
      ),
    }));
  }, [reservas]);
  return (
    <Container>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Reservado De</DataTable.Title>
          <DataTable.Title>Reservado Até</DataTable.Title>
        </DataTable.Header>

        {reservationFormatted.map((reserva) => (
          <DataTable.Row key={reserva.id}>
            <DataTable.Cell>{reserva.reservado_de}</DataTable.Cell>
            <DataTable.Cell>{reserva.reservado_ate}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Container>
  );
}
