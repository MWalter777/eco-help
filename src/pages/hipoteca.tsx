import Details from '@/components/customFields/Details';
import HipotecaForm from '@/components/hipoteca';
import { ResultHipoteca } from '@/interfaces/ResultHipoteca';
import Layout from '@/layout';
import React, { useEffect, useState } from 'react';

const initial: ResultHipoteca = {
	amount: 0,
	interestRate: 0,
	monthlyPayment: 0,
	term: 0,
	totalInsurance: 0,
	showInterestRate: false,
	monthlyFee: 0,
	years: 0,
};

type Months = {
	corr: number;
	month: number;
	year: number;
	credit: number;
	withCapital: number;
};

const Hipoteca = () => {
	const [result, setResult] = useState<ResultHipoteca>(initial);
	const [months, setMonths] = useState<Months[]>([]);
	const [payment, setPayment] = useState(0);
	const [data, setData] = useState({ years: 0, months: 0, totalAmount: 0 });

	useEffect(() => {
		setPayment(+result.monthlyPayment.toFixed(2));
	}, [result.monthlyPayment]);

	useEffect(() => {
		if (months.length > 0) {
			const withCapital = months.filter((m) => m.withCapital > 0);
			const years = Math.floor(withCapital.length / 12);
			const m = withCapital.length % 12;
			const total = m + years * 12;
			setData({ years, months: m, totalAmount: total * payment });
		}
	}, [months]);

	const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = +e.target.value;
		setPayment(value);
	};

	const handleMonths = (months: Months[]) => {
		setMonths(months);
	};
	return (
		<Layout title='Calculo de hipoteca'>
			<HipotecaForm
				handlePayment={handlePayment}
				payment={payment}
				result={result}
				setResult={setResult}
				totalAmount={data.totalAmount}
				years={data.years}
				months={data.months}
			/>
			<div>
				<Details
					amount={result.amount}
					interestRate={result.interestRate}
					monthlyFee={result.monthlyFee}
					payment={+payment - result.monthlyFee * result.totalInsurance}
					years={result.years}
					handleMonths={handleMonths}
				/>
			</div>
		</Layout>
	);
};

export default Hipoteca;
