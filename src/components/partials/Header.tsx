import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { BiSearch, BiMailSend, BiUserCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { TbBookmarks } from 'react-icons/tb';
import { FiInbox, FiLogOut } from 'react-icons/fi';
import { LuSettings } from 'react-icons/lu';


import { pacifico } from 'config/font';
import {client} from 'config/pocketbase';
import Image from 'next/image';


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

const USER_MENU = [
	{
		name: 'profile',
		path: '/user/profile',
		icon: BiUserCircle,
	},
	{
		name: 'account settings',
		path: '/user/account-settings',
		icon: LuSettings,
	},
	{
		name: 'verify email',
		path: '/user/verify-email',
		icon: BiMailSend,
	},
];

export const Header = ({hideLogin = false, hideSearch = false, hideRegister=false,  setIsSearch} : HeaderProps) => {
	const activeTab = useRouter().pathname.split('/').pop();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		setIsAuth(!!client.authStore.token);
	}, []);
	
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
							className="px-1 text-content2 tooltip tooltip-bottom"
							data-tooltip="Search"
						>
							<BiSearch size={24} />
						</button>
					)}
					{!isAuth && (
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
					)}
					{isAuth && (
						<button className="px-1 text-content2 tooltip tooltip-bottom" data-tooltip="Bookmarks">
							<FiInbox size={24} />
						</button>
					)}
					{isAuth && (
						<div className="dropdown z-50 flex h-fit w-full cursor-pointer">
							<label
								className="whites mx-2 flex h-fit w-full cursor-pointer p-0"
								tabIndex={0}
							>
								<div className="avatar avatar-md avatar-ring">
									<Image
										width={150}
										height={150}
										src="https://i.pravatar.cc/150?img=30"
										alt="avatar"
									/>
								</div>
							</label>
							<div className="dropdown-menu dropdown-menu-bottom-left top-[120%] ml-2">
								{USER_MENU.map((item) => (
									<Link
										href={item.path}
										key={item.path}
										className="dropdown-item text-sm flex-row items-center gap-2"
									>
										{<item.icon size={18} />}
										<p>{item.name}</p>
									</Link>
								))}
								<span className="divider my-0"></span>
								<button className="text-rose-400 dropdown-item text-sm flex-row items-center gap-2">
									<FiLogOut size={18} />
									<p>Logout</p>
								</button>
							</div>
						</div>
					)}
				</section>
			</header>
			<div className="h-16"></div>
		</>
	);
}