import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import BoxInfo from './components/BoxInfo';

function App() {
	const [datos, setDatos] = useState([]);

	// useEffect para comprobar existencia de datos en LS
	useEffect(() => {
		const revisaLS = JSON.parse(localStorage.getItem('datos')) ?? [];
		setDatos(revisaLS);
	}, []);

	// localStorage
	useEffect(() => {
		console.log('ejecutando');
		localStorage.setItem('datos', JSON.stringify(datos));
	}, [datos]);
	return (
		<div className='container mx-auto mt-20'>
			<div className='flex justify-between'>
				<div></div>
				<div>
					<Header />
					<Formulario datos={datos} setDatos={setDatos} />
					{datos.map((dato, index) => {
						return <BoxInfo key={index} dato={dato} />;
					})}
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default App;
