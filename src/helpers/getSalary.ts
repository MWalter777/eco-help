import { IMonths } from '@/interfaces/Months';
import { calculate } from './isr';

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
	const newVa = (va.salary || 0) * 2.7;
	const taxForVa = calculate(newVa);
	const taxForAg = calculate(ag.salary || 0);
	const total =
		Object.entries(months).reduce(
			(acc, [key, value]) => (value.salary || 0) + acc,
			0
		) * multiplier;
	const mensual: { salary: number; label: string }[] = sameSalary
		? Array(12)
				.fill(total / 12)
				.map((s, i) => ({ salary: s, label: `Mes ${i + 1}` }))
		: Object.values(months).map((m) => ({ ...m, salary: m.salary || 0 }));

	const taxes = mensual.map((m) => ({
		label: m.label,
		...calculate(m.salary),
	}));
	const totalTax =
		taxes.reduce((acc, tax) => acc + tax.tax, 0) + taxForVa.tax + taxForAg.tax;
	const totalNeto = total - totalTax;

	return {
		total,
		mensual: taxes,
		totalTax,
		totalNeto,
		ag: taxForAg.total || 0,
		va: taxForVa.salary / 2.7,
	};
};
