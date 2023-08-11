import { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IoCloseOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';

import 'styles/globals.css'
import { inter } from 'config/font';
import { Header, Modal } from 'components';

export default function App({ Component, pageProps }: AppProps) {
  const [isSearch, setIsSearch] = useState(false);
  const isAuth = useRouter().pathname.includes('auth');
  return (
		<main className={`bg-backgroundPrimary min-h-screen ${inter.className}`}>
			<Header
				hideRegister={!isAuth}
				hideSearch={isAuth}
				setIsSearch={setIsSearch}
			/>
			<Component {...pageProps} />
			<Toaster
				toastOptions={{
					position: 'bottom-center',
				}}
			/>
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
		</main>
	);
}
