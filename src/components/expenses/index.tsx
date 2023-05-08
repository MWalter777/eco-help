import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

type ExpensesType = {
	medicalExpenses?: number;
	otherExpenses?: number;
	schoolExpenses?: number;
};

type Props = {
	setExpenses: (
		fn: (props: Required<ExpensesType>) => Required<ExpensesType>
	) => void;
	expenses: {
		schoolExpenses: number;
		medicalExpenses: number;
		otherExpenses: number;
	};
};

const initialExpenses: ExpensesType = {
	medicalExpenses: undefined,
	schoolExpenses: undefined,
	otherExpenses: undefined,
};

const labels = {
	medicalExpenses: 'Gastos médicos',
	otherExpenses: 'Gastos varios (donaciones, etc)',
	schoolExpenses: 'Gastos escolares',
};

const Expenses = ({ setExpenses, expenses }: Props) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSubMenu = () => setIsOpen(!isOpen);

	const handleExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as {
			name: keyof ExpensesType;
			value: string;
		};
		const s = +value;
		if (value && s >= 0)
			setExpenses((prev) => ({
				...prev,
				[name]: s <= 800 ? s : 800,
			}));
		else
			setExpenses((prev) => ({
				...prev,
				[name]: 0,
			}));
	};

	return (
		<div
			className={`flex flex-col p-4 items-start justify-between gap-2 ${
				isOpen ? 'h-full' : 'h-[60px]'
			}`}
		>
			<div className='w-full flex justify-between'>
				<h1>Egresos (800 max c/u)</h1>
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
				{Object.entries(initialExpenses).map(([key]) => (
					<div className='w-full flex justify-between' key={key}>
						<label htmlFor='salary' className='w-3/12'>
							{labels[key as keyof ExpensesType]}:
						</label>
						<input
							type='number'
							name={key}
							id={key}
							onChange={handleExpenses}
							value={expenses[key as keyof ExpensesType]}
							className='w-9/12 border-b border-b-focus border-opacity-25 outline-none bg-transparent'
							placeholder='Gastos'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Expenses;
