import { inDollar } from '@/helpers/parseDollar';
import { useState, useEffect } from 'react';
import { BiTransfer } from 'react-icons/bi';
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
		<div className='mt-6 border-shadow bg-primary p-4 rounded-lg relative'>
			<div
				className={`absolute -top-8 right-4 flex items-center p-4 justify-between h-[60px] gap-4 
				${interestRate > 10 && 'bg-red-700'}
				${interestRate > 7.5 && interestRate <= 10 && 'bg-orange-500'}
				${interestRate > 7 && interestRate <= 7.5 && 'bg-yellow-500'}
				${interestRate >= 6 && interestRate <= 7 && 'bg-green-500'}
				${interestRate < 6 && 'bg-red-950'}
				`}
			>
				<BiTransfer className='text-3xl text-white' />
				<span className='text-white font-bold text-xl'>{interestRate} %</span>
			</div>
			<table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
				<thead className='bg-gray-50'>
					<tr>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Año
						</th>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Mes
						</th>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Deuda
						</th>
						<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
							Deuda abonando a capital
						</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-gray-100 border-t border-gray-100'>
					{months.map((y) => (
						<tr key={y.corr} className='hover:bg-gray-50'>
							<td className='px-6 py-4'>{y.year}</td>
							<td className='px-6 py-4'>{y.month}</td>
							<td className='px-6 py-4 '>
								{y.credit >= -payment && (
									<span
										className={`font-semibold px-4 py-1 rounded-lg text-white 
									${y.credit > 80_000 && 'bg-red-500'}
									${y.credit > 60_000 && y.credit <= 80_000 && 'bg-orange-500'}
									${y.credit > 40_000 && y.credit <= 60_000 && 'bg-yellow-500'}
									${y.credit > 20_000 && y.credit <= 40_000 && 'bg-green-500'}
									${y.credit > 0 && y.credit <= 20_000 && 'bg-blue-500'}
									${y.credit <= 0 && 'bg-gray-500'}
									`}
									>
										{inDollar(y.credit)}
									</span>
								)}
							</td>
							<td className='px-6 py-4'>
								<span
									className={`font-semibold px-4 py-1 rounded-lg text-white 
									${y.withCapital > 80_000 && 'bg-red-500'}
									${y.withCapital > 60_000 && y.withCapital <= 80_000 && 'bg-orange-500'}
									${y.withCapital > 40_000 && y.withCapital <= 60_000 && 'bg-yellow-500'}
									${y.withCapital > 20_000 && y.withCapital <= 40_000 && 'bg-green-500'}
									${y.withCapital > 0 && y.withCapital <= 20_000 && 'bg-blue-500'}
									${y.withCapital <= 0 && 'bg-gray-500'}
									`}
								>
									{inDollar(y.withCapital)}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Details;
