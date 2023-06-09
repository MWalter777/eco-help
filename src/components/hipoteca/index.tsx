import { calculateMonthlyPayment } from '@/helpers/newHouse';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomField from '../customFields/CustomField';
import { Result } from '../customFields/Result';
import { ResultHipoteca } from '@/interfaces/ResultHipoteca';

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

type Props = {
	setResult: React.Dispatch<React.SetStateAction<ResultHipoteca>>;
	result: ResultHipoteca;
	payment: number;
	handlePayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
	years: number;
	months: number;
	totalAmount: number;
};

const HipotecaForm = ({
	result,
	setResult,
	payment,
	handlePayment,
	months,
	totalAmount,
	years,
}: Props) => {
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
		<div className='w-full gap-4 min-h-max flex justify-between md:flex-row flex-col'>
			<div className='w-full md:w-6/12 bg-primary p-4 rounded-lg border-shadow text-text flex flex-col gap-4 h-full'>
				<div className='w-full flex justify-between'>
					<h1>Calculo hipoteca</h1>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ values: { showInterestRate } }) => (
						<Form
							noValidate
							className='w-full flex flex-col gap-2 justify-between'
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
			<Result
				{...result}
				years={years}
				months={months}
				totalAmount={totalAmount}
				payment={payment}
				handlePayment={handlePayment}
			/>
		</div>
	);
};

export default HipotecaForm;
