import { TileCard } from 'components';
import Head from 'next/head';

const MockData = [
	{
		src: 'https://picsum.photos/2000/1500',
		alt: 'test',
		title: 'Working is fun!',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti soluta quibusdam laborum porro ratione tenetur dolore quam sequi praesentium sapiente consectetur aperiam fugit ullam incidunt, fuga a et sint?',
		button: 'More',
		slug: '1',
		like: 10,
		isLiked: true,
		isBookmarked: false,
		tags: [
			{
				title: 'Technology',
				id: '1',
				color: '#8ecae6',
			},
			{
				title: 'New',
				id: '2',
				color: '#f4a261',
			},
		],
	},
	{
		src: 'https://picsum.photos/2000/1500',
		alt: 'test',
		title: 'Working is fun!',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti soluta quibusdam laborum porro ratione tenetur dolore quam sequi praesentium sapiente consectetur aperiam fugit ullam incidunt, fuga a et sint?',
		button: 'More',
		slug: '1',
		isLiked: false,
		isBookmarked: true,
		like: 10,
		tags: [
			{
				title: 'Technology',
				id: '1',
				color: '#8ecae6',
			},
			{
				title: 'New',
				id: '1',
				color: '#f4a261',
			},
		],
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Slog | Home</title>
			</Head>
		
				<section className="my-5 mx-auto px-5 justify-items-center max-w-5xl grid grid-cols-2 gap-5">
					{MockData.map((item, index) => (
						<TileCard data={item} key={index} />
					))}
				</section>
		</>
	);
}
