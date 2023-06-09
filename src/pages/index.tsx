import { useEffect, useState } from 'react';
import Salary from '@/components/salary';
import Layout from '@/layout';
import { inDollar } from '@/helpers/parseDollar';
import { calculateFinal } from '@/helpers/isr';
import Expenses from '@/components/expenses';

type SalaryType = {
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
};
const initialSalary: SalaryType = {
	total: 0,
	mensual: [],
	totalNeto: 0,
	totalTax: 0,
	ag: 0,
	va: 0,
};

export default function Home() {
	const [salary, setSalary] = useState<SalaryType>(initialSalary);
	const [isrValue, setIsrValue] = useState({
		total: 0,
		tax: 0,
		salary: 0,
	});
	const [expenses, setExpenses] = useState({
		medicalExpenses: 0,
		otherExpenses: 0,
		schoolExpenses: 0,
	});

	useEffect(() => {
		const {
			total,
			tax,
			salary: s,
		} = calculateFinal({
			salary: salary.total,
			aginaldo: salary.ag,
			vacation: salary.va,
			medicalExpenses: expenses.medicalExpenses,
			otherExpenses: expenses.otherExpenses,
			schoolExpenses: expenses.schoolExpenses,
		});
		setIsrValue({ total, tax, salary: s });
	}, [salary]);
	return (
		<Layout>
			<div className='w-full flex-col md:flex-row flex gap-4 text-text'>
				<div className='w-full md:w-6/12 bg-primary rounded-lg border-shadow'>
					<Salary handleSalary={setSalary} />
				</div>
				<div className='w-full md:w-6/12 bg-primary rounded-lg border-shadow'>
					<Expenses expenses={expenses} setExpenses={setExpenses} />
				</div>
			</div>
			<div className='overflow-x-scroll w-full mt-4 rounded-lg bg-primary min-h-[100px] p-2 border-shadow'>
				<table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
					<thead className='bg-gray-50'>
						<tr>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								Mes
							</th>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								Salario
							</th>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								ISSS
							</th>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								AFP
							</th>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								Renta
							</th>
							<th scope='col' className='px-6 py-4 font-medium text-gray-900'>
								Salario Neto
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100 border-t border-gray-100'>
						{salary.mensual.map(
							({ afp, isss, salary: s, tax, total: neto, label }, i) => {
								return (
									<tr className='hover:bg-gray-50' key={i}>
										<td className='px-6 py-4'>{label}</td>
										<td className='px-6 py-4'>{s}</td>
										<td className='px-6 py-4'>{isss}</td>
										<td className='px-6 py-4'>{afp}</td>
										<td className='px-6 py-4'>
											<span className='bg-blue-400 text-white font-bold w-24 flex justify-center rounded-lg'>
												{tax}
											</span>
										</td>
										<td className='px-6 py-4'>
											<span className='bg-green-400 text-white font-bold w-24 flex justify-center rounded-lg'>
												{neto}
											</span>
										</td>
									</tr>
								);
							}
						)}
						<tr className='hover:bg-gray-50'>
							<td className='px-6 py-4'>Vacaciones</td>
							<td className='px-6 py-4'>{salary.va}</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>
								<span className='bg-blue-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									0
								</span>
							</td>
							<td className='px-6 py-4'>
								<span className='bg-green-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{salary.va}
								</span>
							</td>
						</tr>
						<tr className='hover:bg-gray-50'>
							<td className='px-6 py-4'>Aginaldo</td>
							<td className='px-6 py-4'>{salary.ag}</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>
								<span className='bg-blue-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									0
								</span>
							</td>
							<td className='px-6 py-4'>
								<span className='bg-green-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{salary.ag}
								</span>
							</td>
						</tr>
						<tr className='hover:bg-yellow-300 bg-yellow-200'>
							<td className='px-6 py-4'>Total Pagado</td>
							<td className='px-6 py-4'>
								{salary.total + salary.ag + salary.va}
							</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>
								<span className='bg-blue-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{inDollar(salary.totalTax)}
								</span>
							</td>
							<td className='px-6 py-4'>
								<span className='bg-green-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{inDollar(salary.totalNeto)}
								</span>
							</td>
						</tr>
						<tr className='hover:bg-blue-300 bg-blue-200'>
							<td className='px-6 py-4'>Diferencia a calcular</td>
							<td className='px-6 py-4'>
								{isrValue.salary + salary.ag + salary.va}
							</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>
								<span className='bg-blue-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{inDollar(isrValue.tax)}
								</span>
							</td>
							<td className='px-6 py-4'>
								<span className='bg-green-400 text-white font-bold w-24 flex justify-center rounded-lg'>
									{inDollar(isrValue.total)}
								</span>
							</td>
						</tr>
						<tr
							className={`${
								isrValue.tax > salary.totalTax
									? 'hover:bg-red-300 bg-red-200'
									: 'hover:bg-green-300 bg-green-200'
							}`}
						>
							<td className='px-6 py-4'>
								{isrValue.tax > salary.totalTax
									? 'Renta a pagar aprox.'
									: 'Renta que devolveran aprox.'}
							</td>
							<td className='px-6 py-4'>
								{inDollar(salary.total - isrValue.salary)}
							</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>0</td>
							<td className='px-6 py-4'>
								<span
									className={`${
										isrValue.tax > salary.totalTax
											? 'bg-red-500'
											: 'bg-green-300'
									} text-white font-bold w-24 flex justify-center rounded-lg`}
								>
									{inDollar(Math.abs(isrValue.tax - salary.totalTax))}
								</span>
							</td>
							<td className='px-6 py-4'></td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
