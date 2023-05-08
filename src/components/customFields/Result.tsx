import { inDollar } from '@/helpers/parseDollar';
import { useState, useEffect } from 'react';
import Details from './Details';

type Props = {
	amount: number;
	interestRate: number;
	monthlyPayment: number;
	term: number;
	totalInsurance: number;
	showInterestRate: boolean;
	monthlyFee: number;
	years: number;
};

export const Result = ({
	amount,
	interestRate,
	monthlyPayment,
	showInterestRate,
	term,
	totalInsurance,
	monthlyFee,
}: Props) => {
	const [showDetails, setShowDetails] = useState(false);
	const [payment, setPayment] = useState<string>('');

	useEffect(() => {
		setPayment(monthlyPayment.toFixed(2));
	}, [monthlyPayment]);

	const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPayment(value);
	};
	return (
		<div className={`flex-col ${monthlyPayment > 0 ? 'flex' : 'hidden'}`}>
			<div className='border border-gray-500 rounded-md p-2 gap-1 bg-gray-200 mt-4 flex flex-col items-center'>
				<h3>Cantidad financiada</h3>
				<h1 className='font-bold text-3xl'>{inDollar(amount)}</h1>
				<p>
					Interes Anual
					{interestRate > 0 ? (
						<span className='font-bold'> {interestRate}%</span>
					) : (
						<span className='text-red-700'>
							No hay interes valido para esa cantidad
						</span>
					)}
					{!showInterestRate && (
						<span className='text-red-700'>
							{interestRate >= 10 &&
								`Corre de ahi, seguramente no te querian decir la tasa de interes (mayor a ${interestRate} ni siquiera la he calculado, es mayor a esta candidad por lo tanto es una estafa) por que te estan robando! con este interes ni vendiendo todos tus organos vas a terminar de pagarlos en tu vida!`}
							{interestRate === 0 && ' seguramente es una estafa'}
						</span>
					)}
				</p>
				<h3>Cuota mensual</h3>
				<h1 className='font-bold text-xl'>{inDollar(monthlyPayment)}</h1>
				<h3>Pago mensual + capital</h3>
				<input
					className='px-3 pt-1 rounded-md w-fit'
					type='number'
					value={payment}
					onChange={handlePayment}
				/>
				<h3>Cuota mensual sin seguro</h3>
				<h1 className='font-bold text-xl'>{inDollar(monthlyFee)}</h1>
				<p>
					Plazo <span>{term}</span> años
				</p>
				<p>
					Total Seguro{' '}
					<span className='font-bold'>{(totalInsurance * 100).toFixed()}%</span>
				</p>
				<p>
					Total a pagar{' '}
					<span className='font-bold'>
						{inDollar(monthlyPayment * term * 12)}
					</span>
				</p>
			</div>
			<button
				className='bg-green-700 text-white py-2 rounded-md mt-3 w-full'
				onClick={() => setShowDetails(!showDetails)}
			>
				Detalles
			</button>
			{showDetails && (
				<Details
					amount={amount}
					interestRate={interestRate}
					monthlyFee={monthlyFee}
					years={term}
					payment={+payment - monthlyFee * totalInsurance}
				/>
			)}
		</div>
	);
};
