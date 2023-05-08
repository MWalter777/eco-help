type PropsSavings = {
	initialCapital: number;
	savings: number;
	interestRate: number;
	terms: number;
	capitalize: number;
};

export const calculateSavings = ({
	initialCapital,
	interestRate,
	savings,
	terms,
	capitalize,
}: PropsSavings) => {
	const interestMonthly = interestRate / (12 * 100);
	const factorInterest = Math.pow(1 + interestMonthly, terms / capitalize);
	const factor = (factorInterest - 1) / interestMonthly;
	const total = initialCapital * factorInterest + savings * factor;
	const totalSavings = savings * terms + initialCapital;
	const interest = total - totalSavings;
	return {
		total,
		interest,
		savings: totalSavings,
	};
};
