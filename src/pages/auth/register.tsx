import React from 'react'
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import { emailRegex } from 'utils/regex';
import { pacifico } from 'config/font';
import { client } from 'config/pocketbase';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

type RegisterInputs = {
	username: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

const Register = () => {
	const {register,handleSubmit, watch, formState: {errors}} = useForm<RegisterInputs>();
	const [isLoad, setIsLoad] = React.useState(false);
  
	const router = useRouter();


	const onRegister: SubmitHandler<RegisterInputs> = (value) => {
		setIsLoad(true);
		client
			.collection('users')
			.create(value)
			.then((res) => {
				toast.success('Register success');
				router.push('/auth/login');
			})
			.catch((err) => {
				toast.error(err.message);
			}).finally(() => {
				setIsLoad(false);
			});
	};

	return (
		<>
			<Head>
				<title>Slog | Register</title>
			</Head>

			<section className="px-6 md:px-0 mx-auto max-w-sm h-[calc(100vh-100px)] flex flex-col justify-center">
				<h2 className={clsx('text-center text-4xl my-3', pacifico.className)}>
					Sign Up
				</h2>
				<form onSubmit={handleSubmit(onRegister)} className="form-group">
					<div className="form-field">
						<section className="flex justify-between items-center">
							<label htmlFor="username" className="form-label">
								Username
							</label>
						</section>
						<input
							{...register('username')}
							placeholder="Type here"
							type="text"
							id="username"
							className={clsx('input-custom')}
						/>
					</div>
					<div className="form-field">
						<section className="flex justify-between items-center">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							{errors.email && (
								<label className="form-label">
									<span className="text-error form-label-alt">
										{errors.email.message}
									</span>
								</label>
							)}
						</section>
						<input
							{...register('email', {
								required: {
									message: 'Email address is required.',
									value: true,
								},
								pattern: {
									message: 'Please enter a valid email.',
									value: emailRegex,
								},
							})}
							placeholder="Type here"
							type="text"
							id="email"
							className={clsx(
								'input-custom',
								errors.email && 'input-custom-error'
							)}
						/>
					</div>
					<div className="form-field">
						<section className="flex justify-between items-center">
							<label htmlFor="password" className="form-label">
								<span>Password</span>
							</label>
							{errors.password && (
								<label className="form-label">
									<span className="text-error form-label-alt">
										{errors.password.message}
									</span>
								</label>
							)}
						</section>
						<div className="form-control">
							<input
								{...register('password', {
									required: {
										message: 'Password is required.',
										value: true,
									},
									minLength: {
										message: 'Password must be at least 8 characters.',
										value: 8,
									},
								})}
								placeholder="Type here"
								type="password"
								id="password"
								className={clsx(
									'input-custom',
									errors.password && 'input-custom-error'
								)}
							/>
						</div>
					</div>
					<div className="form-field">
						<section className="flex justify-between items-center">
							<label htmlFor="password" className="form-label">
								<span>Confirm Password</span>
							</label>
							{errors.passwordConfirm && (
								<label className="form-label">
									<span className="text-error form-label-alt">
										{errors.passwordConfirm.message}
									</span>
								</label>
							)}
						</section>
						<div className="form-control">
							<input
								{...register('passwordConfirm', {
									required: {
										message: 'Confirm password is required.',
										value: true,
									},
									validate: (value) =>
										value === watch('password') || 'Password does not match.',
								})}
								placeholder="Type here"
								type="password"
								id="password"
								className={clsx(
									'input-custom',
									errors.password && 'input-custom-error'
								)}
							/>
						</div>
					</div>
					<div className="form-field">
						<div className="form-control justify-between">
							<button
								type="submit"
								disabled={isLoad}
								className={clsx(
									'btn btn-primary w-full',
									isLoad && 'btn-loading'
								)}
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register