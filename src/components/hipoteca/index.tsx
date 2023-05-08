import { calculateMonthlyPayment } from '@/helpers/newHouse';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import CustomField from '../customFields/CustomField';
import { Result } from '../customFields/Result';
import { AiOutlineRight } from 'react-icons/ai';

type InitialValues = {
	amountSolicited: number;
	financedPercentage: number;
	term: number;
	lifeInsurance: number;
	damageInsurance: number;
	interestRate: number;
	monthlyPayment: number;
	showInterestRate: boolean;
};

const initialValues: InitialValues = {
	amountSolicited: 90_000,
	financedPercentage: 90,
	term: 30,
	lifeInsurance: 6.6,
	damageInsurance: 5.4,
	interestRate: 6.95,
	monthlyPayment: 0,
	showInterestRate: true,
};

const validationSchema = Yup.object({
	amountSolicited: Yup.number()
		.required('Required')
		.min(
			1_000,
			'Debes prestar al menos 1000, aunque esto no te alcanza ni para un metro de terreno'
		),
	financedPercentage: Yup.number()
		.required('Required')
		.min(70, 'Si no quieren financiar más del 70% mandalos a chupar un limon'),
	term: Yup.number()
		.required('Required')
		.min(1, 'Imagino que tardaras al menos un año en pagar'),
	lifeInsurance: Yup.number().required('Required').default(0),
	damageInsurance: Yup.number().required('Required').default(0),

	interestRate: Yup.number(),

	monthlyPayment: Yup.number(),
});

type Result = {
	amount: number;
	interestRate: number;
	monthlyPayment: number;
	term: number;
	totalInsurance: number;
	showInterestRate: boolean;
	monthlyFee: number;
	years: number;
};

const initial: Result = {
	amount: 0,
	interestRate: 0,
	monthlyPayment: 0,
	term: 0,
	totalInsurance: 0,
	showInterestRate: false,
	monthlyFee: 0,
	years: 0,
};

const HipotecaForm = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [result, setResult] = useState<Result>(initial);

	const toggleSubMenu = () => setIsOpen(!isOpen);

	const onSubmit = (values: InitialValues) => {
		const { amountFinanced, interest, monthly, totalInsurance, monthlyFee } =
			calculateMonthlyPayment(values);
		setResult({
			amount: amountFinanced,
			interestRate: interest,
			monthlyPayment: monthly,
			term: values.term,
			totalInsurance,
			showInterestRate: values.showInterestRate,
			monthlyFee,
			years: values.term,
		});
	};

	return (
		<div className='w-full'>
			<div
				className={`w-6/12 bg-primary p-4 rounded-lg border-shadow text-text flex flex-col gap-4 ${
					isOpen ? 'h-full' : 'h-[60px]'
				}`}
			>
				<div className='w-full flex justify-between'>
					<h1>Calculo hipoteca</h1>
					<button
						onClick={toggleSubMenu}
						className='bg-focus w-7 h-7 flex justify-center items-center text-white rounded-full hover:bg-other'
					>
						<AiOutlineRight
							className={`${isOpen ? 'open-icon-menu' : 'close-icon-menu'}`}
						/>
					</button>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ values: { showInterestRate } }) => (
						<Form
							noValidate
							className={`w-full flex flex-col gap-2 justify-between ${
								isOpen ? 'open-menu' : 'close-menu'
							}`}
						>
							<CustomField
								label='Monto'
								name='amountSolicited'
								placeholder='Amount Solicited'
								type='number'
							/>

							<CustomField
								name='financedPercentage'
								type='number'
								label='Porcentaje Financiado (%)'
							/>
							<CustomField name='term' type='number' label='Cantidad de años' />

							<CustomField
								name='lifeInsurance'
								type='number'
								label='Seguro de vida en %'
							/>
							<CustomField
								name='damageInsurance'
								type='number'
								label='Seguro de daños en %'
							/>
							<div className=''>
								<label>
									<Field
										id='showInterestRate'
										type='checkbox'
										name='showInterestRate'
									/>
									Conozco la tasa de interes
								</label>
							</div>
							{showInterestRate && (
								<CustomField
									name='interestRate'
									type='number'
									label='Tasa de interes anual (%)'
								/>
							)}
							{!showInterestRate && (
								<CustomField
									name='monthlyPayment'
									type='number'
									label='Cuota mensual'
								/>
							)}
							<button
								className='bg-focus text-white font-bold w-full py-1 rounded-lg hover:bg-other uppercase'
								type='submit'
							>
								Calcular
							</button>
						</Form>
					)}
				</Formik>
			</div>
			<Result {...result} />
		</div>
	);
};

export default HipotecaForm;
