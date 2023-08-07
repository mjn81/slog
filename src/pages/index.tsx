import { Header, Modal, TileCard } from 'components';
import { inter } from 'config/font';
import Head from 'next/head';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

const MockData = [
	{
		src: 'https://picsum.photos/2000/1500',
		alt: 'test',
		title: 'Working is fun!',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti soluta quibusdam laborum porro ratione tenetur dolore quam sequi praesentium sapiente consectetur aperiam fugit ullam incidunt, fuga a et sint?',
		button: 'More',
		slug: '1',
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
	},{
		src: 'https://picsum.photos/2000/1500',
		alt: 'test',
		title: 'Working is fun!',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti soluta quibusdam laborum porro ratione tenetur dolore quam sequi praesentium sapiente consectetur aperiam fugit ullam incidunt, fuga a et sint?',
		button: 'More',
		slug: '1',
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
	const [isSearch, setIsSearch] = useState(false);
	return (
		<>
			<Head>
				<title>Slog</title>
			</Head>
			<main className={`bg-backgroundPrimary min-h-screen ${inter.className}`}>
				<Header hideRegister setIsSearch={setIsSearch} />
				<section className="mx-5 items-center my-5 flex flex-col gap-5">
					{MockData.map((item, index) => (
						<TileCard data={item} key={index} />
					))}
				</section>
			</main>

			<Modal.Background isOpen={isSearch} setIsOpen={setIsSearch}>
				<section className="mx-3 w-full max-w-xl min-h-[200px] bg-backgroundSecondary rounded-xl border border-border">
					<section className="flex gap-3 items-center px-3 h-12 border-b border-border">
						<label htmlFor="search" className="text-content2">
							<BiSearch size={24} />
						</label>
						<input
							type="text"
							id="search"
							placeholder="Search your article"
							className="flex-grow input-sm input-solid bg-transparent outline-none border-none"
						/>
						<button
							onClick={() => setIsSearch(false)}
							className="btn btn-xs btn-no-animation"
						>
							Cancel
						</button>
					</section>

					<nav className="menu p-2 rounded-md">
						<section className="menu-section">
							<ul className="menu-items bg-transparent">
								<li className="menu-item menu-item-no-animation hover:bg-gray-3 flex justify-between">
									General
									<span className="rounded-full hover:bg-gray-6 p-1">
										<IoCloseOutline size={18} />
									</span>
								</li>
							</ul>
						</section>
					</nav>
				</section>
			</Modal.Background>
		</>
	);
}
