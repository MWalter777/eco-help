import { inDollar } from '@/helpers/parseDollar';
import { useState, useEffect } from 'react';
type Props = {
	monthlyFee: number;
	years: number;
	interestRate: number;
	amount: number;
	payment: number;
	handleMonths: (months: any[]) => void;
};

const getMonths = (
	years: number,
	amount: number,
	monthlyFee: number,
	interestRate: number,
	payment: number
) => {
	let currentAmount = amount;
	let currentWithCapital = amount;
	return Array.from({ length: years * 12 }, (_, i) => {
		currentAmount = currentAmount * interestRate - monthlyFee;
		currentWithCapital = currentWithCapital * interestRate - payment;
		const withCapital =
			currentWithCapital > 0 ? +currentWithCapital.toFixed(2) : 0;
		return {
			corr: i + 1,
			month: (i + 1) % 12 || 12,
			year: Math.floor(i / 12) + 1,
			credit: +currentAmount.toFixed(2),
			withCapital,
		};
	});
};

const Details = ({
	years,
	amount,
	monthlyFee,
	interestRate,
	payment,
	handleMonths,
}: Props) => {
	const [months, setMonths] = useState(() =>
		getMonths(years, amount, monthlyFee, 1 + interestRate / 100 / 12, payment)
	);
	useEffect(() => {
		if (payment >= monthlyFee) {
			const m = getMonths(
				years,
				amount,
				monthlyFee,
				1 + interestRate / 100 / 12,
				payment
			);
			setMonths(m);
			handleMonths(m);
		}
	}, [payment]);
	return (
		<div className='mt-4'>
			<table className='border'>
				<thead>
					<tr>
						<th className='px-1'>Year</th>
						<th className='px-1'>Month</th>
						<th className='px-1'>Credit</th>
						<th className='px-1'>With Capital</th>
					</tr>
				</thead>
				<tbody>
					{months.map((y) => (
						<tr key={y.corr} className='border'>
							<td className='border text-right'>{y.year}</td>
							<td className='border text-right'>{y.month}</td>
							<td className='border text-right px-2'>{inDollar(y.credit)}</td>
							<td className='border text-right px-2'>
								{inDollar(y.withCapital)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Details;
