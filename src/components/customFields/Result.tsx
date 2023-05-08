import { inDollar } from '@/helpers/parseDollar';
import { BiDollar, BiBuildingHouse, BiMoney, BiCalendar } from 'react-icons/bi';

type Props = {
	amount: number;
	interestRate: number;
	monthlyPayment: number;
	term: number;
	totalInsurance: number;
	showInterestRate: boolean;
	monthlyFee: number;
	years: number;
	payment: number;
	months: number;
	totalAmount: number;
	handlePayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Result = ({
	amount,
	payment,
	years,
	months,
	totalAmount,
	handlePayment,
}: Props) => {
	return (
		<div className='w-full md:w-6/12 gap-2 text-text flex justify-between flex-wrap'>
			<div className='w-full bg-primary rounded-lg p-2'>
				<h1>
					Modifique su cuota (el campo donde aparece su cueta es editable),
					agregando a capital para tardar menos años en pagar la deuda y pagar
					menos intereses.
				</h1>
			</div>
			<div className='md:w-6/12 w-full h-20 justify-center mt-6 relative flex flex-col items-end bg-primary rounded-lg p-2'>
				<div className='flex justify-center items-center absolute left-4 h-[60px] -top-6 text-white px-4 rounded-lg bg-orange-500'>
					<BiBuildingHouse className='text-4xl' />
				</div>
				<div className='flex flex-col justify-between items-end'>
					<p className='text-text text-opacity-70'>A financiar</p>
					<p className='text-2xl w-full rounded-lg flex justify-center text-text'>
						{inDollar(amount)}
					</p>
				</div>
			</div>
			<div className='md:w-5/12 w-full h-20 justify-center mt-6 relative flex flex-col items-end bg-primary rounded-lg p-2'>
				<div className='flex justify-center items-center absolute left-4 h-[60px] -top-6 text-white px-4 rounded-lg bg-blue-500'>
					<BiDollar className='text-4xl' />
				</div>
				<div className='hover:cursor-pointer flex flex-col max-w-full justify-between items-end'>
					<label htmlFor='payment' className='text-text text-opacity-70'>
						Cuota
					</label>
					<p
						className='text-2xl rounded-lg font-semibold flex justify-end text-text'
						style={{ width: '100%' }}
					>
						<input
							id='payment'
							name='payment'
							type='number'
							value={payment}
							onChange={handlePayment}
							className='bg-transparent outline-none flex justify-end w-6/12 md:w-10/12'
							style={{ textAlign: 'end' }}
						/>
					</p>
				</div>
			</div>
			<div className='md:w-6/12 w-full h-20 justify-center mt-6 relative flex flex-col items-end bg-primary rounded-lg p-2'>
				<div className='flex justify-center items-center absolute left-4 h-[60px] -top-6 text-white px-4 rounded-lg bg-red-500'>
					<BiMoney className='text-4xl' />
				</div>
				<div className='flex flex-col justify-between items-end'>
					<p className='text-text text-opacity-70'>Total a pagar</p>
					<p className='text-2xl w-full rounded-lg font-semibold flex justify-center text-text'>
						{inDollar(totalAmount)}
					</p>
				</div>
			</div>
			<div className='md:w-5/12 w-full h-20 justify-center mt-6 relative flex flex-col items-end bg-primary rounded-lg p-2'>
				<div className='flex justify-center items-center absolute left-4 h-[60px] -top-6 text-white px-4 rounded-lg bg-yellow-500'>
					<BiCalendar className='text-4xl' />
				</div>
				<div className='flex flex-col justify-between items-end'>
					<p className='text-text text-opacity-70'>Años</p>
					<p className='text-2xl w-full rounded-lg flex justify-center text-text'>
						{(years + months / 12).toFixed(0)}
					</p>
				</div>
			</div>
		</div>
	);
};
