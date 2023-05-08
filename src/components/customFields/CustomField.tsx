import { Field, ErrorMessage } from 'formik';

type Props = {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
	className?: string;
	as?: string;
	rows?: number;
	cols?: number;
	min?: number;
	max?: number;
	step?: number;
};

const CustomField = ({ name, label, ...props }: Props) => {
	return (
		<div className='flex justify-between gap-4'>
			<label className='w-11/12 text-text' htmlFor={name}>
				{label}
			</label>
			<Field
				className='outline-none border-b border-focus border-opacity-50 w-full bg-transparent'
				id={name}
				name={name}
				placeholder={label}
				{...props}
			/>
			<span className='text-red-700'>
				<ErrorMessage name={name} />
			</span>
		</div>
	);
};

export default CustomField;
