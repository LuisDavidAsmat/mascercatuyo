import Account from "../features/Account/Account";
import Categories from "../features/Categories/Categories";
import Home from "../features/Home/Home";
import Login from "../features/Login/Login";
import OfferService from "../features/OfferService/OfferService";
import Register from "../features/Register/Register";
import RequestService from "../features/RequestService/RequestService";
import ServiceDetails from "../features/ServiceDetails/ServiceDetails";
import ServicesCatalogue from "../features/ServicesCatalogue/ServicesCatalogue";
import SwitchRole from "../features/SwitchRole/SwitchRole";
import UserUpdate from "../features/UserUpdate/UserUpdate";
import { MCTUserRole } from "../types/UserTypes";


export interface Category 
{
  value: string;
  label: string;
  icon?: string;
}

export const categories: Category[] = 
[
  { value: 'actividadFisica', label: 'Actividad física', icon: '🏋️' },
  { value: 'alimentacion', label: 'Alimentación', icon: '🍽️' },
  { value: 'asesoriaDelHogar', label: 'Asesora del hogar' },
  { value: 'bellezaYEstetica', label: 'Belleza y estética' },
  { value: 'cerrajero', label: 'Cerrajero', icon: '🔐' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'cuidadoresDeAdultosMayores', label: 'Cuidadores de adultos mayores' },
  { value: 'cuidadoresDeNinos', label: 'Cuidadores de niños(as)' },
  { value: 'controlDePlagas', label: 'Control de plagas' },
  { value: 'educacion', label: 'Educación' },
  { value: 'electricista', label: 'Electricista' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'instalacionDeSistemasDeSeguridad', label: 'Instalación de sistemas de seguridad' },
  { value: 'instalacionDeArtefactosDomesticos', label: 'Instalación de artefactos domésticos' },
  { value: 'jardineria', label: 'Jardinería', icon: '🪴' },
  { value: 'limpiezaYAseo', label: 'Limpieza y aseo' },
  { value: 'mascotas', label: 'Mascotas' },
  { value: 'mudanzaOFletes', label: 'Mudanza o fletes' },
  { value: 'pintura', label: 'Pintura' },
  { value: 'plomeria', label: 'Plomería'},
  { value: 'mecanica', label: 'Mecánica', icon: "🔧"},
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

export const PUBLIC_ROUTES = [
  { path: '/', element: Home  },
  { path: '/login', element: Login },
  { path: '/register', element: Register }
];

export const PROTECTED_ROUTES = [
  { path: '/servicio-solicitar', element: RequestService, roles: [MCTUserRole.ROLE_CLIENT]  },
  { path: '/servicio-ofrecer', element: OfferService, roles: [MCTUserRole.ROLE_PROVIDER] },
  { path: '/cambiar-rol', element: SwitchRole, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] },
  { path: '/categorias', element: Categories, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] } ,
  { path: '/servicio/:category', element: ServicesCatalogue , roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] },
  { path: "/servicio/:category/:servicioId", element:ServiceDetails, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] },
  { path: "/account/:userName", element: Account, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] },
  { path: "/account/:userName/update", element: UserUpdate, roles: [MCTUserRole.ROLE_CLIENT, MCTUserRole.ROLE_PROVIDER] }
];

export const getRolesForPath = (path: string): MCTUserRole[] | undefined => 
{
  const route = PROTECTED_ROUTES.find(r => r.path === path);

  return route?.roles
}