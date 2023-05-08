import React from 'react';
import Logo from '../assets/Logo';
import SimpleMenu from './SimpleMenu';

type Props = {
	toggleSidebar?: () => void;
};

const Sidebar = ({ toggleSidebar = () => {} }: Props) => {
	return (
		<div className='relative min-w-[200px] bg-primary'>
			<div className='fixed flex flex-col w-[200px]'>
				<button
					className='text-white min-h-[50px] w-full flex justify-center items-center'
					onClick={toggleSidebar}
				>
					<Logo className='icon-logo' width={200} height={50} />
				</button>
				<nav className='flex flex-col gap-2 p-4 text-text'>
					<SimpleMenu />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
