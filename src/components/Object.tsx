import { useState } from 'react';
type User = {
	name: string;
	surName: string;
	age?: number;
};
// type Cars = {
// 	readonly car: string;
//   readonly model: string;
// 	readonly age: number;
// };
type Props = {
	objX: {
		car: string;
		model: string;
		age: number;
	};
	car: string;
};
function Object({ objX, car }: Props) {
	const [obj, setObj] = useState<User[]>([
		{
			name: 'Daniel',
			surName: 'Hys',
			age: 29,
		},
		{
			name: 'Bogdan',
			surName: 'Kowalski',
		},
	]);
	return (
		<div>
			<h1>Objects</h1>
			{obj.map((el) => {
				return (
					<div>
						<p>{el.name}</p>
						<p>{el.surName}</p>
						<p>{el.age}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Object;
