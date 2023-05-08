import { IMenu } from '@/interfaces/Menu';
import { BiDollarCircle, BiHome } from 'react-icons/bi';
import { MdFeed } from 'react-icons/md';

export const menuItems: IMenu[] = [
	{
		id: 1,
		title: 'Menu',
		subMenu: [
			{
				id: 1,
				title: 'Simple ISR',
				Icon: MdFeed,
				path: '/',
			},
			{
				id: 2,
				title: 'Hipoteca',
				path: '/hipoteca',
				Icon: BiHome,
			},
		],
	},
];

export const MONTHS = {
	ag: { label: 'Aginaldo', salary: undefined, isExtra: true },
	va: { label: 'Vacaciones', salary: undefined, isExtra: true },
	Jan: { label: 'Enero', salary: undefined },
	Feb: { label: 'Febrero', salary: undefined },
	Mar: { label: 'Marzo', salary: undefined },
	Apr: { label: 'Abril', salary: undefined },
	May: { label: 'Mayo', salary: undefined },
	Jun: { label: 'Junio', salary: undefined },
	Jul: { label: 'Julio', salary: undefined },
	Aug: { label: 'Agosto', salary: undefined },
	Sep: { label: 'Septiembre', salary: undefined },
	Oct: { label: 'Octubre', salary: undefined },
	Nov: { label: 'Noviembre', salary: undefined },
	Dec: { label: 'Diciembre', salary: undefined },
};

export const TOTALMONTHS = {
	ag: { label: 'Aginaldo', salary: undefined, isExtra: true },
	va: { label: 'Vacaciones', salary: undefined, isExtra: true },
	salary: { label: 'Mensual', salary: undefined },
};
