import { FieldValues } from 'react-hook-form';

export interface ClientRequestService extends FieldValues
{
  category: string,
  description: string,
  priority: string,
  latitude?: number,
  longitude?: number
  userId: number,
}
