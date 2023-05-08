import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';

type Props = {
	children: ReactElement | ReactElement[];
	title?: string;
	content?: string;
};

const Layout = ({ children, title = 'Eco help', content = '' }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState('remove-sidebar');
	const fn = (e: unknown) => {
		const event = e as { target: { innerWidth: number } };
		if (event.target.innerWidth < 768) {
			setOpen('remove-sidebar');
		} else setOpen('show-sidebar');
	};

	const toggleSidebar = () => {
		if (open === 'remove-sidebar') {
			setOpen('show-sidebar');
		} else {
			setOpen('remove-sidebar');
		}
	};
	useEffect(() => {
		if (window) {
			fn({ target: { innerWidth: window.innerWidth } });
			window.addEventListener('resize', fn);
		}
		return () => {
			if (window) {
				window.removeEventListener('resize', fn);
			}
		};
	}, []);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div
				id='layout-wrapper'
				className='flex justify-start gap-4 min-h-screen bg-backgroundBody'
			>
				<Sidebar toggleSidebar={toggleSidebar} open={open} />
				<main
					className={`main-content p-4 w-full overflow-x-hidden ${
						open === 'remove-sidebar' && 'absolute -z-0 top-8'
					}`}
				>
					<div className='page-content pr-4'>{children}</div>
					{
						//<Footer />
					}
				</main>
			</div>
		</>
	);
};

export default Layout;
