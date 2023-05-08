type Props = {
	amountSolicited: number;
	financedPercentage: number;
	term: number;
	lifeInsurance: number;
	damageInsurance: number;
	interestRate: number;
	monthlyPayment: number;
};

type ReturnValue = {
	amountFinanced: number;
	totalInsurance: number;
	interest: number;
	monthly: number;
	monthlyFee: number;
};

const calculateMonthly = (props: Props) => {
	const {
		amountSolicited,
		financedPercentage,
		term,
		lifeInsurance,
		damageInsurance,
		interestRate,
	} = props;
	const amountFinanced = (amountSolicited * financedPercentage) / 100;
	const totalInsurance = (lifeInsurance + damageInsurance) / 100;
	const interest = interestRate / (12 * 100);
	const factorInterest = Math.pow(1 + interest, term * 12);
	const monthly =
		(amountFinanced * interest * factorInterest) / (factorInterest - 1);
	return {
		amountFinanced,
		totalInsurance,
		interest: interestRate,
		monthly: monthly * (1 + totalInsurance),
		monthlyFee: monthly,
	};
};

const calculateInterestRate = (props: Props) => {
	const {
		amountSolicited,
		financedPercentage,
		term,
		lifeInsurance,
		damageInsurance,
		monthlyPayment,
	} = props;
	const amountFinanced = (amountSolicited * financedPercentage) / 100;
	const totalInsurance = (lifeInsurance + damageInsurance) / 100;
	const monthly = monthlyPayment / (1 + totalInsurance);
	const interest = findInterest({
		monthly,
		amountFinanced,
		term,
	});
	return {
		amountFinanced,
		totalInsurance,
		interest,
		monthly: monthlyPayment,
		monthlyFee: monthly,
	};
};

const findInterest = (props: {
	monthly: number;
	amountFinanced: number;
	term: number;
}) => {
	const { monthly, amountFinanced, term } = props;
	const interestOptions = Array.from(
		{ length: 1900 },
		(_, i) => Math.round((20 - i * 0.01) * 100) / 100
	);
	const monthlies = interestOptions.map((interest) => {
		const interestRate = interest / (12 * 100);
		const factorInterest = Math.pow(1 + interestRate, term * 12);
		return (
			(amountFinanced * interestRate * factorInterest) / (factorInterest - 1)
		);
	});
	const index = monthlies.findIndex((m) => m <= monthly);
	const i = index === 0 ? 0 : index;
	return index >= 0 ? interestOptions[i] : 0;
};

export const calculateMonthlyPayment = (
	props: Props & { showInterestRate: boolean }
): ReturnValue => {
	const { showInterestRate, ...res } = props;
	if (showInterestRate) return calculateMonthly(res);
	return calculateInterestRate(res);
};
