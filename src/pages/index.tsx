import Layout from '@/layout';

export default function Home() {
	return (
		<Layout>
			<div>
				{new Array(100).fill(0).map((_, i) => (
					<h1 key={i} className='text-3xl font-bold underline'>
						Hello world!
					</h1>
				))}
			</div>
		</Layout>
	);
}
