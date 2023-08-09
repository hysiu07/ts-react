import { useEffect, useState } from 'react';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContexProvider } from './components/context/UserContext';
import { User } from './components/context/User';
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
	Button,
	Input,
	Style,
	Usehook,
	UsehookAdvancetype,
} from './components';
import UseRef from './components/UseRef';
import { Private } from './components/ComponentProp/Private';
import { Profile } from './components/ComponentProp/Profile';
import { Generic } from './components/Generic';

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
			<Button
				handleClick={(event, id) => {
					console.log('clicked button', event, id);
				}}
			/>
			<Input value='value' />
			<Style styles={{ border: '1px dolid black', padding: '1rem' }} />
			<Usehook />
			<UsehookAdvancetype />
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContexProvider>
				<User />
			</UserContexProvider>
			<UseRef />
			<Private isLoggedIn={true} component={Profile} />
			{/* <Generic items={['1', '2', '3']} onClick={(item) => console.log(item)} />
			<Generic items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
			<Generic
				items={[
					{
						first: 'Bruce',
						last: 'Wayne',
						id: 1,
					},
					{
						first: 'Daniel',
						last: 'Hys',
						id: 2,
					},
					{
						first: 'Eliza',
						last: 'Mlot',
						id: 3,
					},
				]}
				onClick={(item) => console.log(item)}
			/>
		</div>
	);
}

export default App;
