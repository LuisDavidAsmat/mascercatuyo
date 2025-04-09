import { FieldValues } from 'react-hook-form';

export interface ClientRequestService extends FieldValues
{
  category: string,
  description: string,
  priority: string,
  // solicitanteId: number,
  latitude?: number,
  longitude?: number
}

// export interface ClientRequestService extends FieldValues
// {
//   categoria: string,
//   descripcion: string,
//   plazos: string,
//   solicitanteId: number,
//   latitude?: number,
//   longitude?: number
// }

