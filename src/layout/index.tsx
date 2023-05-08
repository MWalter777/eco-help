import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

type Props = {
	children: ReactElement | ReactElement[];
	title?: string;
	content?: string;
};

const Layout = ({ children, title = 'Eco help', content = '' }: Props) => {
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
				className='flex gap-4 min-h-screen bg-backgroundBody'
			>
				<Sidebar />
				<main className='main-content p-4 overflow-hidden'>
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
