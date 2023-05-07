import React, { useState } from 'react';
import { IMenu } from '@/interfaces/Menu';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';

type Props = {
	item: IMenu;
};

const SideMenu = ({ item }: Props) => {
	const [isOpen, setIsOpen] = useState<Boolean | null>(null);
	const toggleSubMenu = () => setIsOpen(!isOpen);
	return (
		<div key={item.id} className='flex flex-col text-sm'>
			<button
				className='flex flex-row items-center justify-between my-3'
				onClick={toggleSubMenu}
			>
				<span className='uppercase'>{item.title}</span>
				<AiOutlineRight
					className={`${
						isOpen !== null && (isOpen ? 'open-icon-menu' : 'close-icon-menu')
					}`}
				/>
			</button>
			<div
				className={`flex flex-col gap-1 ${isOpen ? 'open-menu' : 'close-menu'}`}
			>
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
};

export default SideMenu;
