import Persona from '../assets/persona.jpg';

const Foto = () => {
	return (
		<div className='relative inline-block mr-3'>
			<img
				className='inline-block object-cover w-14 rounded-full border-2 border-pink-500'
				src={Persona}
				alt='Foto de asistente'
			/>
			<span className='absolute bottom-0 right-0 inline-block w-4 h-4 bg-pink-600 border-2 border-white rounded-full'></span>
		</div>
	);
};

export default Foto;
