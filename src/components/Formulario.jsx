import { useState } from 'react';
import Foto from './Foto';

const Formulario = ({ datos, setDatos }) => {
	// hooks
	const [nombre, setNombre] = useState('');
	const [segundoNombre, setSegundoNombre] = useState('');
	const [apMaterno, setApMaterno] = useState('');
	const [apPaterno, setApPaterno] = useState('');
	const [dia, setDia] = useState('');
	const [mes, setMes] = useState('');
	const [year, setYear] = useState('');
	const [email, setEmail] = useState('');
	const [telefono, setTelefono] = useState('');

	// objeto para obtener todos los datos
	const objetoDatos = {
		nombre,
		segundoNombre,
		apPaterno,
		apMaterno,
		dia,
		mes,
		year,
		email,
		telefono,
	};

	// envío de datos
	const handleSubmit = (e) => {
		e.preventDefault();
		setDatos([...datos, objetoDatos]);

		// reiniciar form
		setNombre('');
		setSegundoNombre('');
		setApPaterno('');
		setApMaterno('');
		setDia('');
		setMes('');
		setYear('');
		setEmail('');
		setTelefono('');
	};

	return (
		<div className='overflow-y-auto h-96'>
			<form onSubmit={handleSubmit}>
				<div className='flex mt-10'>
					<div>
						<Foto />
					</div>
					<div className='flex flex-col grow bg-gray-200 p-4 rounded-md'>
						<label
							htmlFor='nombre'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1'
						>
							Nombre
						</label>
						<input
							id='nombre'
							type='text'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Nombre'
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
						/>
						<label
							htmlFor='segundoNombre'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Segundo Nombre
						</label>
						<input
							id='segundoNombre'
							type='text'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Segundo Nombre'
							value={segundoNombre}
							onChange={(e) => setSegundoNombre(e.target.value)}
						/>
						<label
							htmlFor='apPaterno'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Apellido Paterno
						</label>
						<input
							id='apPaterno'
							type='text'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Apellido Paterno'
							value={apPaterno}
							onChange={(e) => setApPaterno(e.target.value)}
						/>
						<label
							htmlFor='apMaterno'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Apellido Materno
						</label>
						<input
							id='apMaterno'
							type='text'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow mb-2'
							placeholder='Apellido Materno'
							value={apMaterno}
							onChange={(e) => setApMaterno(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex justify-end mt-5'>
					<div className='bg-indigo-400 p-3 rounded-md'>
						<p className='font-semibold'>
							Nombre:{' '}
							<span className='font-normal capitalize'>
								{nombre} {segundoNombre} {apPaterno} {apMaterno}
							</span>
						</p>
					</div>
				</div>
				<div className='flex mt-10'>
					<div>
						<Foto />
					</div>
					<div className='flex flex-col grow bg-gray-200 p-4 rounded-md'>
						<label
							htmlFor='dia'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1'
						>
							Día
						</label>
						<input
							id='dia'
							type='number'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Día'
							value={dia}
							onChange={(e) => setDia(e.target.value)}
						/>
						<label
							htmlFor='mes'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Mes
						</label>
						<input
							id='mes'
							type='text'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Mes'
							value={mes}
							onChange={(e) => setMes(e.target.value)}
						/>
						<label
							htmlFor='year'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Año
						</label>
						<input
							id='year'
							type='number'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow mb-2'
							placeholder='Año'
							value={year}
							onChange={(e) => setYear(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex justify-end mt-5'>
					<div className='bg-indigo-400 p-3 rounded-md'>
						<p className='font-semibold'>
							Fecha de Nacimiento:{' '}
							<span className='font-normal capitalize'>
								{dia} {mes} {year}
							</span>
						</p>
					</div>
				</div>
				<div className='flex mt-10'>
					<div>
						<Foto />
					</div>
					<div className='flex flex-col grow bg-gray-200 p-4 rounded-md'>
						<label
							htmlFor='email'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1'
						>
							E-mail
						</label>
						<input
							id='email'
							type='email'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label
							htmlFor='telefono'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1 mt-3'
						>
							Teléfono Celular
						</label>
						<input
							id='telefono'
							type='number'
							autoComplete='off'
							className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow mb-2'
							placeholder='Teléfono celular'
							value={telefono}
							onChange={(e) => setTelefono(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex justify-end mt-5'>
					<div className='bg-indigo-400 p-3 rounded-md'>
						<p className='font-semibold'>
							E-mail: <span className='font-normal'>{email}</span>
						</p>
						<p className='font-semibold'>
							Teléfono:{' '}
							<span className='font-normal'>{telefono}</span>
						</p>
					</div>
				</div>
				<input
					type='submit'
					className='bg-pink-400 w-full mt-5 mb-5 p-3 text-white font-bold hover:bg-pink-600 cursor-pointer transition-colors rounded-xl'
				/>
			</form>
		</div>
	);
};

export default Formulario;
