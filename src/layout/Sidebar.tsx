import React from 'react';
import { menuItems } from '@/constant/data';
import SideMenu from './SideMenu';

type Props = {
	toggleSidebar?: () => void;
};

const Sidebar = ({ toggleSidebar = () => {} }: Props) => {
	return (
		<div className='relative min-w-[200px] bg-red-800'>
			<div className='fixed flex flex-col w-[200px]'>
				<button
					className='text-white min-h-[50px] w-full flex justify-center items-center'
					onClick={toggleSidebar}
				>
					icon
				</button>
				<nav className='flex flex-col p-4 text-white bg-blue-900'>
					{menuItems.map((item) => (
						<SideMenu key={item.id} item={item} />
					))}
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
