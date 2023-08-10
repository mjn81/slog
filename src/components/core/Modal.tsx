import { inter } from 'config/font';
import React, { PropsWithChildren } from 'react'
import clsx from 'clsx';

type BackgroundProps = PropsWithChildren<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}>;

const Background = ({children, isOpen, setIsOpen}: BackgroundProps) => {
  return (
		<section
			className={clsx(
        'absolute bg-black bg-opacity-40 inset-0 z-50 backdrop-blur w-full h-full flex justify-center items-center',
        inter.className,
        isOpen ? 'block' : 'hidden'
			)}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					setIsOpen(false);
				}
			}}
		>
			{children}
		</section>
	);
}

const Content = () => {
  return (
    <div>ModalContent</div>
  )
}



export const Modal = {
	Background,
	Content,
};

