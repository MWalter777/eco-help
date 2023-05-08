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

const finalSections: Section[] = [
	{
		name: 'I',
		since: 0.01,
		until: 5664.0,
		percentage: 0,
		about: 0,
		fixed: 0,
	},
	{
		name: 'II',
		since: 5664.01,
		until: 10742.86,
		percentage: 0.1,
		about: 5664.0,
		fixed: 212.12,
	},
	{
		name: 'III',
		since: 10742.87,
		until: 24457.14,
		percentage: 0.2,
		about: 10742.86,
		fixed: 720.0,
	},
	{
		name: 'IV',
		since: 24457.15,
		until: Infinity,
		percentage: 0.3,
		about: 24457.14,
		fixed: 3462.86,
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

const getFinalTax = (preTax: number) => {
	const findSection = finalSections.find((section) => {
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

type PropFinalISR = {
	salary: number;
	vacation: number;
	aginaldo: number;
	schoolExpenses: number;
	medicalExpenses: number;
	otherExpenses: number;
};

export const calculateFinal = ({
	aginaldo,
	medicalExpenses,
	otherExpenses,
	salary,
	schoolExpenses,
	vacation,
}: PropFinalISR) => {
	const preTax =
		salary +
		aginaldo +
		vacation -
		medicalExpenses -
		otherExpenses -
		schoolExpenses;
	const section = getFinalTax(preTax);
	const applyTax =
		(preTax - section.about) * section.percentage + section.fixed;
	const total = preTax - applyTax;
	return {
		total: +total.toFixed(2),
		isss: 0,
		afp: 0,
		tax: +applyTax.toFixed(2),
		salary,
		section,
	};
};
