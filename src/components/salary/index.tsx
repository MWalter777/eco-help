import { MONTHS, TOTALMONTHS } from '@/constant/data';
import { getSalary, validateSalary } from '@/helpers/getSalary';
import { IMonths } from '@/interfaces/Months';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

type KeyMonth = keyof typeof MONTHS;

type Props = {
	handleSalary: (props: {
		total: number;
		mensual: {
			label: string;
			total: number;
			isss: number;
			afp: number;
			tax: number;
			salary: number;
		}[];
		totalTax: number;
		totalNeto: number;
		ag: number;
		va: number;
	}) => void;
};

const Salary = ({ handleSalary: setTotal }: Props) => {
	const [isOpen, setIsOpen] = useState(true);
	const [salary, setSalary] = useState<IMonths>(TOTALMONTHS);
	const [salaryPerMonth, setSalaryPerMonth] = useState<IMonths>(MONTHS);
	const [sameSalary, setSameSalary] = useState(true);
	const [error, setError] = useState('');

	const toggleSameSalary = () => setSameSalary(!sameSalary);
	const toggleSubMenu = () => setIsOpen(!isOpen);

	const calculate = () => {
		const s = sameSalary ? salary : salaryPerMonth;
		const validate = validateSalary({ sameSalary, salary: s });

		if (validate) {
			setError('');
			const total = getSalary({ sameSalary, salary: s });
			setTotal(total);
		} else setError('Verifique que los datos sean correctos');
	};

	const handleSalaryPerMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as { name: KeyMonth; value: string };
		const s = +e.target.value;
		if (e.target.value && s >= 0)
			setSalaryPerMonth((prev) => ({
				...prev,
				[name]: { ...prev[name], salary: Number(value) },
			}));
		else
			setSalaryPerMonth((prev) => ({
				...prev,
				[name]: { ...prev[name], salary: undefined },
			}));
	};

	const handleSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as { name: KeyMonth; value: string };
		const s = +e.target.value;
		if (e.target.value && s >= 0)
			setSalary((prev) => ({
				...prev,
				[name]: { ...prev[name], salary: Number(value) },
			}));
		else
			setSalary((prev) => ({
				...prev,
				[name]: { ...prev[name], salary: undefined },
			}));
	};

	return (
		<div
			className={`flex flex-col p-4 items-start gap-2 ${
				isOpen ? 'h-full' : 'h-[60px]'
			}`}
		>
			{error && (
				<div className='bg-red-100 rounded-lg w-full flex justify-center py-1'>
					<p className='text-red-500'>{error}</p>
				</div>
			)}
			<div className='w-full flex justify-between'>
				<h1>Ingresos</h1>
				<button
					onClick={toggleSubMenu}
					className='bg-focus w-7 h-7 flex justify-center items-center text-white rounded-full hover:bg-other'
				>
					<AiOutlineRight
						className={`${isOpen ? 'open-icon-menu' : 'close-icon-menu'}`}
					/>
				</button>
			</div>
			<div
				className={`w-full flex flex-col gap-2 justify-between ${
					isOpen ? 'open-menu' : 'close-menu'
				}`}
			>
				{sameSalary
					? Object.entries(salary).map(([key, value]) => (
							<div className='w-full flex justify-between' key={key}>
								<label htmlFor='salary' className='w-3/12'>
									{value.label}:
								</label>
								<input
									type='number'
									name={key}
									id={key}
									onChange={handleSalary}
									className='w-9/12 border-b border-b-focus border-opacity-25 outline-none bg-transparent'
									placeholder={`${value.isExtra ? '' : 'Salario '}${
										value.label
									}`}
								/>
							</div>
					  ))
					: Object.entries(salaryPerMonth).map(([key, value]) => (
							<div className='w-full flex justify-between' key={key}>
								<label htmlFor='salary' className='w-3/12'>
									{value.label}:
								</label>
								<input
									type='number'
									name={key}
									id={key}
									onChange={handleSalaryPerMonth}
									className='w-9/12 border-b border-b-focus border-opacity-25 outline-none bg-transparent'
									placeholder={`${value.isExtra ? '' : 'Salario de '}${
										value.label
									}`}
								/>
							</div>
					  ))}
				<div className='flex gap-2'>
					<input
						type='checkbox'
						checked={sameSalary}
						name='equal_all_month'
						id='equal_all_month'
						onChange={toggleSameSalary}
					/>
					<label htmlFor='equal_all_month'>
						Es el mismo para todos los meses
					</label>
				</div>
				<button
					onClick={calculate}
					className='bg-focus text-white font-bold w-full py-1 rounded-lg hover:bg-other uppercase'
				>
					Calcular
				</button>
			</div>
		</div>
	);
};

export default Salary;
