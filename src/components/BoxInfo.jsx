import React from 'react';

const BoxInfo = ({ dato }) => {
	const {
		nombre,
		segundoNombre,
		apPaterno,
		apMaterno,
		dia,
		mes,
		year,
		email,
		telefono,
	} = dato;
	return (
		<div className='flex justify-end mt-5'>
			<div className='bg-indigo-300 p-3 rounded-md'>
				<p className='font-semibold'>
					Nombre Completo:{' '}
					<span className='font-normal'>
						{nombre} {segundoNombre} {apPaterno} {apMaterno}
					</span>
				</p>
				<p className='font-semibold'>
					Fecha de Nacimiento:{' '}
					<span className='font-normal'>
						{dia} de {mes} de {year}
					</span>
				</p>
				<p className='font-semibold'>
					E-mail: <span className='font-normal'>{email}</span>
				</p>
				<p className='font-semibold'>
					Teléfono: <span className='font-normal'>{telefono}</span>
				</p>
			</div>
		</div>
	);
};

export default BoxInfo;
