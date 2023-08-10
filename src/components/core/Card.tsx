import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


type TileCardProps = {
	data: {
		src: string;
		alt: string;
		title: string;
		description: string;
		button: string;
		isLiked: boolean;
		isBookmarked: boolean;
		tags: {
			title: string;
			id: string;
			color: string;
		}[];
		like: number;
		slug: string;
	};
};


export const TileCard = ({
 data,
}: TileCardProps) => {
  const tags = data.tags;
  return (
		<article className="shadow-sm shadow-black max-w-3xl card col-span-2 lg:col-span-1 border border-border overflow-hidden card-image-cover">
			<header className="relative before:absolute before:w-full before:z-20 before:h-full before:inset-0 ">
				<Image
					className="max-h-64 object-cover"
					src={data.src}
					alt={data.alt}
					width={900}
					height={500}
				/>
				<button className='absolute z-40 top-3 right-3 btn w-10 aspect-square p-0 border border-border'>
					{data.isBookmarked ? <BsBookmarksFill size={18} /> : <BsBookmarks size={18} />}
				</button>
			</header>
			<main className="card-body pt-3 gap-1">
				{tags.length !== 0 && (
					<nav className="space-x-2 mb-4">
						{tags.map((t) => (
							<Link
								className="text-xs link link-underline-hover"
								style={{
									color: t.color,
								}}
								href={`tags/${t.id}`}
								key={`tags/${t.id}`}
							>
								#{t.title}
							</Link>
						))}
					</nav>
				)}
				<h1 className="card-header">{data.title}</h1>
				<p className="text-content2">{data.description}</p>
				<footer className="card-footer items-center">
					<span
						className={clsx(
							'flex items-center gap-1',
							data.isLiked ? 'text-content1' : 'text-content3'
						)}
					>
						{
							data.isLiked ? 
							<AiFillHeart size={23} />
							:
						<AiOutlineHeart size={23} />
						}
						{data.like}
					</span>
					<span className="flex-grow" />
					<Link href={data.slug}>
						<button className="btn btn-solid-primary">{data.button}</button>
					</Link>
				</footer>
			</main>
		</article>
	);
}
