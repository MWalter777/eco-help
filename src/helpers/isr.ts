type Section = {
	name: string;
	since: number;
	until: number;
	percentage: number;
	about: number;
	fixed: number;
};

type Input = {
	target: {
		value: string;
		name: string;
	};
};

const sections: Section[] = [
	{ name: 'I', since: 0.01, until: 472, percentage: 0.1, about: 0, fixed: 0 },
	{
		name: 'II',
		since: 472.01,
		until: 895.24,
		percentage: 0.1,
		about: 472,
		fixed: 17.67,
	},
	{
		name: 'III',
		since: 895.25,
		until: 2038.1,
		percentage: 0.2,
		about: 895.24,
		fixed: 60,
	},
	{
		name: 'IV',
		since: 2038.11,
		until: Infinity,
		percentage: 0.3,
		about: 2038.1,
		fixed: 288.57,
	},
];

const afp = 0.0725;
const isss = 0.03;

const getTax = (preTax: number) => {
	const findSection = sections.find((section) => {
		if (preTax >= section.since && preTax <= section.until) return section;
	});
	return (
		findSection || {
			name: 'I',
			since: 0.01,
			until: 487.6,
			percentage: 0.1,
			about: 0,
			fixed: 0,
		}
	);
};

export const calculate = (salary: number) => {
	const ISSS = salary > 1000 ? 30 : salary * isss;
	const AFP = salary * afp;
	const preTax = salary - AFP - ISSS;
	const section = getTax(preTax);
	const applyTax =
		(preTax - section.about) * section.percentage + section.fixed;
	const total = preTax - applyTax;
	return {
		total: +total.toFixed(2),
		isss: +ISSS.toFixed(2),
		afp: +AFP.toFixed(2),
		tax: +applyTax.toFixed(2),
		salary,
		section,
	};
};
