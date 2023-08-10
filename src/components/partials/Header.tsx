import React from 'react'
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { pacifico } from 'config/font';

type HeaderProps = {
  hideSearch?: boolean;
  hideLogin?: boolean;
  hideRegister?: boolean;
  setIsSearch?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TABS = [
	{
		name: 'register',
		path: '/auth/register',
	},
	{
		name: 'login',
		path: '/auth/login',
	},
]

export const Header = ({hideLogin = false, hideSearch = false, hideRegister=false,  setIsSearch} : HeaderProps) => {
	const activeTab = useRouter().pathname.split('/').pop();
	return (
		<>
			<header className="bg-black bg-opacity-30 fixed z-50 backdrop-blur-lg border-b border-border w-full flex items-center mx-auto h-16 py-2 px-4">
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
					<div className="tabs gap-2.5">
						{TABS.filter((item) =>
							hideLogin
								? item.name !== 'login'
								: hideRegister
								? item.name !== 'register'
								: true
						).map((tab) => (
							<Link href={tab.path} key={`nav-tab-${tab.path}`}>
								<button
									className={clsx(
										'font-medium tab tab-pill capitalize',
										activeTab === tab.name && 'tab-active'
									)}
								>
									{tab.name}
								</button>
							</Link>
						))}
					</div>
				</section>
			</header>
			<div className="h-16"></div>
		</>
	);
}
