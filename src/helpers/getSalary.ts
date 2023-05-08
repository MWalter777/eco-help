import { IMonths } from '@/interfaces/Months';

type PropsValidate = {
	sameSalary: boolean;
	salary: IMonths;
};

type Props = {
	sameSalary: boolean;
	salary: IMonths;
};

export const validateSalary = ({ salary }: PropsValidate) => {
	return Object.values(salary).every(
		(month) => month.salary !== undefined && month.salary >= 0
	);
};

export const getSalary = ({ sameSalary, salary }: Props) => {
	const multiplier = sameSalary ? 12 : 1;
	const { ag, va, ...months } = salary;
	const total =
		Object.entries(months).reduce(
			(acc, [key, value]) => (value.salary || 0) + acc,
			0
		) * multiplier;
	const mensual: number[] = sameSalary
		? Array(12).fill(total / 12)
		: Object.values(months).map((m) => m.salary || 0);

	return {
		total,
		mensual,
		ag: ag.salary || 0,
		va: va.salary || 0,
	};
};
