import { IconType } from 'react-icons';

export interface IMenuItem {
	id: number;
	title: string;
	Icon: IconType;
	path: string;
}

export interface IMenu {
	id: number;
	title: string;
	subMenu: IMenuItem[];
}
