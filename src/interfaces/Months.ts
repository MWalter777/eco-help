import { MONTHS } from '@/constant/data';

export type IMonths = {
	[key: string]: {
		label: string;
		salary: number | undefined;
		isExtra?: boolean;
	};
};
