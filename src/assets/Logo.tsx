import React from 'react';

type Props = {
	className?: string;
	ecoColor?: `#${string}`;
	iconColor?: `#${string}`;
	helpColor?: `#${string}`;
	width?: number;
	height?: number;
};

const Logo = ({
	className,
	ecoColor = '#d94343',
	helpColor = '#d94343',
	iconColor = '#d94343',
	width = 375.7,
	height = 68.2,
}: Props) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 356.8987716976726 64.8'
			className={className}
		>
			<defs id='SvgjsDefs1193'></defs>
			<g
				id='SvgjsG1194'
				transform='matrix(1.088270798286477,0,0,1.088270798286477,-3.482466087481567,7.425635721339838)'
				fill={ecoColor}
			>
				<path d='M27.24 32.84 c0.36 0 1.16 0.12 1.16 1.36 l0 4.4 c0 1.24 -0.8 1.36 -1.16 1.36 l-14.2 0 c-1.76 0 -3.24 -0.2 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.16 -3.12 -2.2 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.28 -1.32 -0.48 -2.92 -0.52 -4.8 l0 -0.2 l0.08 -5.04 c0.08 -0.36 0.24 -0.68 0.44 -1 c0.56 -1 1.56 -1.6 2.72 -1.68 l20.64 -0.04 c0.32 0 1.12 0.12 1.12 1.36 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-17.88 0 c-0.04 0 -0.08 2.88 -0.08 2.88 l0.08 0.68 c0.12 0.76 0.36 1.36 0.68 1.8 c0.32 0.4 0.68 0.68 1.2 0.88 c0.56 0.16 1.24 0.28 2.08 0.28 l14.08 0 z M27.28 6.960000000000001 c0.32 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-23 -0.04 c-0.32 0 -1.08 -0.12 -1.08 -1.36 l0 -3.12 c0 -1.28 0.76 -1.44 1.08 -1.44 l23 0 z M62.369 7.039999999999999 c0.32 0 1.12 0.16 1.12 1.4 l0 3.08 c0 1.28 -0.8 1.44 -1.12 1.44 l-14.36 0 c-0.84 0 -1.56 0.08 -2.08 0.28 c-0.52 0.16 -0.88 0.44 -1.2 0.88 s-0.52 1 -0.68 1.76 c-0.12 0.76 -0.2 1.76 -0.2 2.96 l0 9.32 c0 1.2 0.08 2.2 0.2 3 c0.16 0.76 0.36 1.36 0.68 1.76 c0.32 0.44 0.68 0.72 1.2 0.88 c0.52 0.2 1.24 0.28 2.08 0.28 l14.36 0 c0.32 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-14.56 0 c-1.76 0 -3.28 -0.24 -4.52 -0.68 s-2.28 -1.2 -3.08 -2.2 c-0.8 -1.04 -1.4 -2.36 -1.76 -3.92 c-0.36 -1.6 -0.52 -3.52 -0.52 -5.76 l0 -7.92 c0 -2.2 0.16 -4.12 0.52 -5.68 c0.36 -1.6 0.96 -2.92 1.76 -3.92 c0.76 -1 1.8 -1.76 3.08 -2.24 c1.24 -0.44 2.76 -0.68 4.52 -0.68 l14.56 0 z M100.258 9.96 c0.8 1 1.36 2.32 1.72 3.92 c0.32 1.56 0.52 3.48 0.52 5.68 l0 7.92 c0 2.24 -0.2 4.16 -0.52 5.72 c-0.36 1.6 -0.92 2.92 -1.72 3.96 c-0.8 1 -1.84 1.76 -3.12 2.2 c-1.24 0.44 -2.76 0.68 -4.52 0.68 l-9.76 0 c-1.76 0 -3.28 -0.24 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.2 -3.12 -2.24 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.36 -1.56 -0.52 -3.48 -0.52 -5.72 l0 -7.92 c0 -2.24 0.16 -4.12 0.52 -5.68 c0.36 -1.6 0.96 -2.92 1.72 -3.92 c0.8 -1 1.84 -1.76 3.12 -2.24 c1.24 -0.44 2.72 -0.68 4.48 -0.68 l9.76 0 c1.76 0 3.28 0.24 4.52 0.68 c1.28 0.48 2.32 1.24 3.12 2.24 z M96.538 18.88 c0 -1.16 -0.04 -2.16 -0.2 -2.96 c-0.12 -0.76 -0.36 -1.36 -0.68 -1.8 c-0.28 -0.4 -0.68 -0.68 -1.2 -0.88 c-0.52 -0.16 -1.2 -0.28 -2.04 -0.28 l-9.36 0 c-0.84 0 -1.52 0.12 -2.04 0.28 c-0.52 0.2 -0.92 0.48 -1.2 0.88 c-0.32 0.44 -0.52 1.04 -0.68 1.8 c-0.12 0.8 -0.2 1.8 -0.2 2.96 l0 9.32 c0 1.16 0.08 2.16 0.2 2.96 c0.16 0.72 0.36 1.36 0.68 1.76 c0.28 0.44 0.68 0.72 1.2 0.88 c0.52 0.2 1.2 0.28 2.04 0.28 l9.36 0 c0.84 0 1.52 -0.08 2.04 -0.28 c0.52 -0.16 0.92 -0.44 1.2 -0.88 c0.32 -0.4 0.56 -1.04 0.68 -1.76 c0.16 -0.8 0.2 -1.8 0.2 -2.96 l0 -9.32 z'></path>
			</g>
			<g
				id='SvgjsG1195'
				transform='matrix(1.0451612903225806,0,0,1.0451612903225806,108.14193548387097,-19.858064516129033)'
				fill={iconColor}
			>
				<path
					xmlns='http://www.w3.org/2000/svg'
					d='M23.5,76h8c0.6,0,1-0.4,1-1V50c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v25C22.5,75.6,22.9,76,23.5,76z M24.5,51h6v23h-6V51z   M68.5,76h8c0.6,0,1-0.4,1-1V20c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v55C67.5,75.6,67.9,76,68.5,76z M69.5,21h6v53h-6V21z M53.5,76  h8c0.6,0,1-0.4,1-1V30c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v45C52.5,75.6,52.9,76,53.5,76z M54.5,31h6v43h-6V31z M38.5,39  c-0.6,0-1,0.4-1,1v35c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V40c0-0.6-0.4-1-1-1H38.5z M45.5,74h-6V41h6V74z M81,80c0,0.6-0.4,1-1,1H20  c-0.6,0-1-0.4-1-1s0.4-1,1-1h60C80.6,79,81,79.4,81,80z M25.6,41.3c-0.3-0.4-0.2-1.1,0.2-1.4l21.9-15.6l-2.4-0.3  c-0.5-0.1-0.9-0.6-0.9-1.1c0.1-0.5,0.6-0.9,1.1-0.9l5,0.7c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1  c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2l-0.7,5  c-0.1,0.5-0.5,0.9-1,0.9c0,0-0.1,0-0.1,0c-0.5-0.1-0.9-0.6-0.9-1.1l0.4-2.7L26.9,41.5c-0.2,0.1-0.4,0.2-0.6,0.2  C26.1,41.7,25.7,41.5,25.6,41.3z'
				></path>
			</g>
			<g
				id='SvgjsG1196'
				transform='matrix(1.088270672790016,0,0,1.088270672790016,183.7374920214836,7.425636594795152)'
				fill={helpColor}
			>
				<path d='M52.729 7.039999999999999 c0.36 0 1.16 0.16 1.16 1.4 l0 30.2 c0 1.24 -0.8 1.4 -1.16 1.4 l-3.68 0 c-0.32 0 -1.08 -0.16 -1.08 -1.4 l0 -12.32 l-15.16 0 l0 12.32 c0 1.24 -0.76 1.4 -1.12 1.4 l-3.64 0 c-0.36 0 -1.16 -0.16 -1.16 -1.4 l0 -30.2 c0 -1.24 0.8 -1.4 1.16 -1.4 l3.64 0 c0.36 0 1.12 0.16 1.12 1.4 l0 11.96 l15.16 0 l0 -11.96 c0 -1.24 0.76 -1.4 1.08 -1.4 l3.68 0 z M87.458 32.84 c0.36 0 1.16 0.12 1.16 1.36 l0 4.4 c0 1.24 -0.8 1.36 -1.16 1.36 l-14.2 0 c-1.76 0 -3.24 -0.2 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.16 -3.12 -2.2 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.28 -1.32 -0.48 -2.92 -0.52 -4.8 l0 -0.2 l0.08 -5.04 c0.08 -0.36 0.24 -0.68 0.44 -1 c0.56 -1 1.56 -1.6 2.72 -1.68 l20.64 -0.04 c0.32 0 1.12 0.12 1.12 1.36 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-17.88 0 c-0.04 0 -0.08 2.88 -0.08 2.88 l0.08 0.68 c0.12 0.76 0.36 1.36 0.68 1.8 c0.32 0.4 0.68 0.68 1.2 0.88 c0.56 0.16 1.24 0.28 2.08 0.28 l14.08 0 z M87.49799999999999 6.960000000000001 c0.32 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-23 -0.04 c-0.32 0 -1.08 -0.12 -1.08 -1.36 l0 -3.12 c0 -1.28 0.76 -1.44 1.08 -1.44 l23 0 z M121.227 34.08 c0.36 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.76 1.4 -1.12 1.4 l-13.2 0 c-1.76 0 -3.28 -0.24 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.2 -3.12 -2.24 c-0.8 -1 -1.36 -2.32 -1.72 -3.92 c-0.36 -1.56 -0.56 -3.48 -0.56 -5.72 l0 -19.04 c0 -1.28 0.8 -1.4 1.16 -1.4 l3.68 0 c0.32 0 1.12 0.12 1.12 1.4 l0 19.72 c0 1.2 0.04 2.2 0.2 3 c0.12 0.72 0.36 1.32 0.68 1.76 c0.28 0.44 0.68 0.72 1.16 0.88 c0.56 0.2 1.24 0.28 2.08 0.28 l13 0 z M151.476 7.039999999999999 c2.72 0 4.68 0.84 5.88 2.56 c1.16 1.6 1.72 3.92 1.76 7 c0 3.16 -0.56 5.56 -1.76 7.24 s-3.16 2.52 -5.88 2.52 l-13.68 0.04 l0 12.24 c0 1.24 -0.8 1.4 -1.12 1.4 l-3.68 0 c-0.32 0 -1.12 -0.16 -1.12 -1.4 l0 -16.8 c0 -1.24 0.8 -1.36 1.12 -1.36 l17.44 0 c1 0 1.72 -0.28 2.12 -0.88 c0.44 -0.6 0.64 -1.56 0.64 -2.88 s-0.2 -2.28 -0.64 -2.88 c-0.4 -0.6 -1.12 -0.88 -2.12 -0.88 l-17.44 0 c-0.32 0 -1.12 -0.12 -1.12 -1.36 l0 -3.16 c0 -1.28 0.8 -1.4 1.12 -1.4 l18.48 0 z'></path>
			</g>
		</svg>
	);
};

export default Logo;
