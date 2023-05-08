import React from 'react';
import Logo from '../assets/Logo';
import SimpleMenu from './SimpleMenu';
import { BiMenuAltLeft } from 'react-icons/bi';

type Props = {
	toggleSidebar?: () => void;
	open: string;
};

const Sidebar = ({ toggleSidebar = () => {}, open }: Props) => {
	return (
		<div className={`bg-primary nav-shadow relative z-10 ${open}`}>
			<div className='fixed flex flex-col w-[200px] items-center'>
				<button
					className='text-white min-h-[50px] w-8/12 flex justify-center items-center border-b border-b-focus border-opacity-30'
					onClick={toggleSidebar}
				>
					<Logo className='icon-logo' width={200} height={50} />
				</button>
				{open === 'remove-sidebar' && (
					<button
						className='absolute top-4 -right-28 bg-focus p-2 rounded-full'
						onClick={toggleSidebar}
					>
						<BiMenuAltLeft className='text-white w-8 h-8' />
					</button>
				)}
				<nav className='flex flex-col w-full gap-2 p-4 text-text'>
					<SimpleMenu />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
