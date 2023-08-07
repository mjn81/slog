import React from 'react'
import Link from 'next/link';
import { Pacifico } from 'next/font/google';
import { BiSearch } from 'react-icons/bi';



const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

type HeaderProps = {
  hideSearch?: boolean;
  hideLogin?: boolean;
  hideRegister?: boolean;
  setIsSearch?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({hideLogin = false, hideSearch = false, hideRegister=false,  setIsSearch} : HeaderProps) => {
  return (
		<>
			<header className="bg-transparent fixed z-50 backdrop-blur-lg border-b border-border w-full flex items-center mx-auto h-16 py-2 px-4">
				<Link className="cursor-pointer" href="/">
					<h1 className={`text-2xl ${pacifico.className}`}>Slog</h1>
				</Link>
				<span className="flex-1" />
				<section className="flex items-center gap-2">
					{!hideSearch && setIsSearch && (
						<button
							onClick={() => setIsSearch(true)}
							className="px-1 text-content2"
						>
							<BiSearch size={24} />
						</button>
					)}
					{!hideLogin && (
						<Link href="/auth/login">
							<button className="btn btn-ghost">Login</button>
						</Link>
					)}
					{!hideRegister && (
						<Link href="/auth/register">
							<button className="btn btn-ghost">Register</button>
						</Link>
					)}
				</section>
			</header>
			<div className='h-16'>

			</div>
		</>
	);
}
