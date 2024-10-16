import {
  RiCalendarTodoFill,
  RiCalendarTodoLine,
  RiFileChartLine,
  RiFileUserLine,
  RiHome4Line,
  RiMoneyDollarCircleLine,
  RiSettings2Line,
} from '@remixicon/react';

export const appsNavigate = [
  {
    name: 'Intranet',
    description: 'Descrip. de la app Intranet...',
    href: '#',
    icon: RiHome4Line,
    hover: 'group-hover:text-yellow-600',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'Presupuesto',
    description: 'Descrip. de la app Presupuesto...',
    href: '#',
    icon: RiMoneyDollarCircleLine,
    hover: 'group-hover:text-green-600',
    iconColor: 'text-green-600',
  },
  {
    name: 'Planificador',
    description: 'Descrip. de la app Planificador...',
    href: '#',
    icon: RiCalendarTodoLine,
    hover: 'group-hover:text-gray-600',
    iconColor: 'text-gray-600',
  },
  {
    name: 'Solicitudes ciudadanas',
    description: 'Descrip. de la app Solicitudes ciudadanas...',
    href: '#',
    icon: RiFileUserLine,
    hover: 'group-hover:text-blue-600',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Informes mensuales',
    description: 'Descrip. de la app Informes menusales...',
    href: '#',
    icon: RiFileChartLine,
    hover: 'group-hover:text-red-600',
    iconColor: 'text-red-600',
  },
  {
    name: 'Trazabilidad',
    description: 'Descrip. de la app Trazabilidad...',
    href: '#',
    icon: RiCalendarTodoFill,
    hover: 'group-hover:text-orange-600',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Configuraciones',
    description: 'Descrip. de la app Configuraciones...',
    href: '#',
    icon: RiSettings2Line,
    hover: 'group-hover:text-black',
    iconColor: 'text-black',
  },
];