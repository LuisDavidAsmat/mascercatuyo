import { FieldValues } from 'react-hook-form';

export interface ClientRequestService extends FieldValues
{
  categoria: string,
  descripcion: string,
  plazos: string,
  solicitanteId: number,
  latitude?: number,
  longitude?: number
}

