import { useState } from 'react';
import Salary from '@/components/salary';
import Layout from '@/layout';
import { inDollar } from '@/helpers/parseDollar';

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
	return (
		<Layout>
			<div className='w-full flex gap-4 text-text'>
				<div className='w-6/12 bg-primary rounded-lg border-shadow'>
					<Salary handleSalary={setSalary} />
				</div>
				<div className='w-6/12'></div>
			</div>
			<div className='w-full mt-4 rounded-lg bg-primary min-h-[100px] p-2 border-shadow'>
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
							<td className='px-6 py-4'>{salary.total}</td>
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
						<tr className='hover:bg-green-300 bg-green-200'>
							<td className='px-6 py-4'>Renta a pagar/cobrar</td>
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
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
