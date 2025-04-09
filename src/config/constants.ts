import { MCTUserRole } from "../features/Auth/types/MCTUser";
import Home from "../features/Home/Home";
import Login from "../features/Login/Login";
import OfferService from "../features/OfferService/OfferService";
import Register from "../features/Register/Register";
import RequestService from "../features/RequestService/RequestService";
import SwitchRole from "../features/SwitchRole/SwitchRole";


export interface Category 
{
    value: string;
    label: string;
}

export const categories: Category[] = [
    { value: 'actividadFisica', label: 'Actividad física' },
    { value: 'alimentacion', label: 'Alimentación' },
    { value: 'asesoriaDelHogar', label: 'Asesora del hogar' },
    { value: 'bellezaYEstetica', label: 'Belleza y estética' },
    { value: 'cerrajero', label: 'Cerrajero' },
    { value: 'construccion', label: 'Construcción' },
    { value: 'cuidadoresDeAdultosMayores', label: 'Cuidadores de adultos mayores' },
    { value: 'cuidadoresDeNinos', label: 'Cuidadores de niños(as)' },
    { value: 'controlDePlagas', label: 'Control de plagas' },
    { value: 'educacion', label: 'Educación' },
    { value: 'electricista', label: 'Electricista' },
    { value: 'eventos', label: 'Eventos' },
    { value: 'instalacionDeSistemasDeSeguridad', label: 'Instalación de sistemas de seguridad' },
    { value: 'instalacionDeArtefactosDomesticos', label: 'Instalación de artefactos domésticos' },
    { value: 'jardineria', label: 'Jardinería' },
    { value: 'limpiezaYAseo', label: 'Limpieza y aseo' },
    { value: 'mascotas', label: 'Mascotas' },
    { value: 'mudanzaOFletes', label: 'Mudanza o fletes' },
    { value: 'pintura', label: 'Pintura' },
    { value: 'plomeria', label: 'Plomería'},
    { value: 'mecanica', label: 'Mecánica'},
    { value: 'reparaciones', label: 'Reparaciones'},
    { value: 'carpinteria', label: 'Carpintería' },
    { value: 'reparacionDeElectrodomesticos', label: 'Reparaciones de electrodomésticos' },
    { value: 'gasfiter', label: 'Gásfiter' },
    { value: 'otro', label: 'Otro' }
];

export interface Status 
{
    value: string;
    label: string;
}

export const estados: Status[] = 
[
  { value: 'AVAILABLE', label: 'Disponible' },
  { value: 'BUSSY', label: 'Ocupado' },
  { value: 'INACTIVE', label: 'Inactivo' }
];

export const statusClasses = 
{
  disponible: 'text-emerald-500 font-semibold',
  ocupado: 'text-yellow-600 font-semibold',
  inactivo: 'text-neutral-600 font-semibold',
} as { [key: string]: string }


export interface EstimatedTime
{
    value: string;
    label: string;
}

export const tiempos: EstimatedTime[] = [
  { value: 'HALF_HOUR', label: '1/2 Hora' },
  { value: 'ONE_HOUR', label: '1 Hora' },
  { value: 'ONE_AND_HALF_HOURS', label: '1 Hora y media' },
  { value: 'TWO_HOURS', label: '2 Horas' },
  { value: 'TWO_AND_HALF_HOURS', label: '2 Horas y media' },
  { value: 'THREE_HOURS', label: '3 Horas' }
];

// export const tiempos: EstimatedTime[] = [
//     { value: '0.5', label: '1/2 Hora' },
//     { value: '1', label: '1 Hora' },
//     { value: '1.5', label: '1 Hora y media' },
//     { value: '2', label: '2 Horas' },
//     { value: '2.5', label: '2 Horas y media' },
//     { value: '3', label: '3 Horas' }
//   ];

export interface Deadlines 
{
    value: string;
    label: string;
}


export const plazos: Deadlines[] =
[
  { value: 'URGENT', label: 'Urgente' },
  { value: 'THREE_DAYS', label: '3 días de espera' },
  { value: 'ONE_WEEK', label: '1 semana de espera'},
  { value: 'sin_plazo_de_espera', label: 'Sin plazo de espera'}

];



// constants/routes.ts
export const PUBLIC_ROUTES = [
  { path: '/', element: Home  },
  { path: '/login', element: Login },
  { path: '/register', element: Register }
];

export const PROTECTED_ROUTES = [
  { path: '/servicio-solicitar', element: RequestService, roles: [MCTUserRole.ROLE_CLIENT]  },
  { path: '/servicio-ofrecer', element: OfferService, roles: [MCTUserRole.ROLE_PROVIDER] },
  { path: '/cambiar-rol', element: SwitchRole, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] }
  // {
  //   path: '/admin',
  //   element: AdminDashboard,
  //   roles: ['ROLE_ADMIN']
  // }
];

export const getRolesForPath = (path: string): MCTUserRole[] | undefined => 
{
  const route = PROTECTED_ROUTES.find(r => r.path === path);

  return route?.roles
}