import React from 'react';
import Logo from '../assets/Logo';
import SimpleMenu from './SimpleMenu';

type Props = {
	toggleSidebar?: () => void;
};

const Sidebar = ({ toggleSidebar = () => {} }: Props) => {
	return (
		<div className='relative min-w-[200px] bg-primary nav-shadow'>
			<div className='fixed flex flex-col w-[200px] items-center'>
				<button
					className='text-white min-h-[50px] w-8/12 flex justify-center items-center border-b border-b-focus border-opacity-30'
					onClick={toggleSidebar}
				>
					<Logo className='icon-logo' width={200} height={50} />
				</button>
				<nav className='flex flex-col w-full gap-2 p-4 text-text'>
					<SimpleMenu />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
