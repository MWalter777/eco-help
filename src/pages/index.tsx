import { useState } from 'react';
import Salary from '@/components/salary';
import Layout from '@/layout';

type SalaryType = {
	total: number;
	mensual: number[];
	ag: number;
	va: number;
};
const initialSalary: SalaryType = {
	total: 0,
	mensual: [],
	ag: 0,
	va: 0,
};

export default function Home() {
	const [salary, setSalary] = useState<SalaryType>(initialSalary);
	return (
		<Layout>
			<div className='w-full flex gap-4 text-text'>
				<div className='w-6/12 bg-primary rounded-lg'>
					<Salary handleSalary={setSalary} />
				</div>
				<div className='w-6/12'></div>
			</div>
		</Layout>
	);
}
