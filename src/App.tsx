import { useEffect, useState } from 'react';
import './App.css';
import {
	Strings,
	Numbers,
	Arrays,
	Object,
	RestApi,
	Functions,
	Status,
	Heading,
	Oscar,
} from './components';

type Posts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
interface User {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function App() {
	const fff: Array<string | number> = ['dsd', 13];
	const [array, setArray] = useState<string[]>([
		'sprawdzanie',
		'tablicy',
		'przekazanie w propsach',
	]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => setPosts(data.slice(0, 10)));
	}, []);
	const [posts, setPosts] = useState<User[]>([]);

	const objCar = { car: 'Audi', model: 'a4', age: 10 };
	return (
		<div className='App'>
			<h1>Test type-script</h1>
			<Strings text1={'props przekazany'} text2={'drugi props przekazany'} />
			<Numbers number={50} number2={100} />
			<Arrays arrayX={array} />
			<Object objX={objCar} car={'Fiat'} />
			<RestApi postsX={posts} />
			<Functions />
			<Status status={'error'} />
			<Heading>Heading Children</Heading>
			<Oscar>
				<Heading>Heading Children 2.0</Heading>
			</Oscar>
		</div>
	);
}

export default App;
