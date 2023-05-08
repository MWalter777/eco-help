import React from 'react';
import Link from 'next/link';
import { menuItems } from '@/constant/data';
import { IMenuItem } from '@/interfaces/Menu';

const simpleMenu = menuItems.reduce(
	(acc, item) => [...acc, ...item.subMenu],
	[] as IMenuItem[]
);

const SimpleMenu = () => {
	return (
		<>
			{simpleMenu.map((subItem) => {
				return (
					<Link
						href={subItem.path}
						key={subItem.id}
						className='flex flex-row gap-2 items-center p-2 rounded-lg hover:bg-focus hover:text-white'
					>
						<subItem.Icon />
						<span>{subItem.title}</span>
					</Link>
				);
			})}
		</>
	);
};

export default SimpleMenu;
