import React from 'react';
import { menuItems } from '@/constant/data';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';

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
					{menuItems.map((item) => {
						return (
							<div key={item.id} className='flex flex-col text-sm'>
								<div className='flex flex-row items-center justify-between my-3'>
									<span className='uppercase'>{item.title}</span>
									<AiOutlineRight />
								</div>
								<div className='submenu flex flex-col gap-1'>
									{item.subMenu.map((subItem) => {
										return (
											<Link
												href={subItem.path}
												key={subItem.id}
												className='flex flex-row gap-2 items-center'
											>
												<subItem.Icon />
												<span>{subItem.title}</span>
											</Link>
										);
									})}
								</div>
							</div>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
