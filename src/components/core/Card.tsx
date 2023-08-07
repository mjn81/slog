import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type TileCardProps = {
	data: {
		src: string;
		alt: string;
		title: string;
		description: string;
		button: string;
		tags: {
			title: string;
			id: string;
			color: string;
		}[];

		slug: string;
	};
};


export const TileCard = ({
 data,
}: TileCardProps) => {
  const tags = data.tags;
  return (
		<article className="shadow-sm shadow-black card max-w-2xl border border-border overflow-hidden card-image-cover">
			<header className='relative before:absolute before:w-full before:z-20 before:h-full before:inset-0 '>

			<Image
				className="max-h-64 object-cover"
				src={data.src}
				alt={data.alt}
				width={900}
				height={500}
			/>
			</header>
			<main className="card-body pt-3 gap-1">
				{tags.length !== 0 && (
					<nav className="space-x-2 mb-4">
						{tags.map((t) => (
							<Link
								className="text-xs underline"
								style={{
									color: t.color,
								}}
								href={t.id}
								key={t.id}
							>
								#{t.title}
							</Link>
						))}
					</nav>
				)}
				<h1 className="card-header">{data.title}</h1>
				<p className="text-content2">{data.description}</p>
				<footer className="card-footer justify-end">
					<Link href={data.slug}>
						<button className="btn btn-solid-primary">{data.button}</button>
					</Link>
				</footer>
			</main>
		</article>
	);
}
