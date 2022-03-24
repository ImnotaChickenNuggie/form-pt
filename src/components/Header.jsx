import React from 'react';
import FormImg from '../assets/formulario.png';

const Header = () => {
	return (
		<div className='bg-pink-300 p-4 rounded-md flex justify-between'>
			<div className='ml-2 mr-5'>
				<h1 className='font-black text-2xl mx-auto'>Formulario.</h1>
				<p className='flex mt-5 italic text-gray-600'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mr-1'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					En menos de 5 minutos.
				</p>
			</div>
			<div className='ml-10'>
				<img
					className='w-16 h-20'
					src={FormImg}
					alt='Imagen de formulario'
				/>
			</div>
		</div>
	);
};

export default Header;
