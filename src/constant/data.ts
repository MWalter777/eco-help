import { IMenu } from '@/interfaces/Menu';
import { BiDollarCircle } from 'react-icons/bi';

export const menuItems: IMenu[] = [
	{
		id: 1,
		title: 'Menu',
		subMenu: [
			{
				id: 1,
				title: 'Home',
				Icon: BiDollarCircle,
				path: '/',
			},
			{
				id: 2,
				title: 'About',
				path: '/about',
				Icon: BiDollarCircle,
			},
		],
	},
	{
		id: 2,
		title: 'Contact',
		subMenu: [
			{
				id: 3,
				title: 'Facebook',
				Icon: BiDollarCircle,
				path: 'https://www.facebook.com/',
			},
			{
				id: 4,
				title: 'Instagram',
				Icon: BiDollarCircle,
				path: 'https://www.instagram.com/',
			},
		],
	},
];
