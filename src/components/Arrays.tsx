import { useState } from 'react';
type Types = {
	readonly arrayX: string[];
};
function Arrays(props: Types) {
	const { arrayX } = props;
	const array: string[] = ['banana', 'apple', 'orange'];
	const array4: Array<string> = ['banana', 'apple', 'orange'];
	const array2: number[] = [1, 2, 3];
	const array3: (number | string)[] = [1, 2, 3, 'banana', 'apple', 'orange'];
	const items: Array<number | string | boolean> = [1, 'two', false];

	const [arrayY, setArrayY] = useState([1, 'sdsd', true]);
	return (
		<div>
			<h1>Arrays</h1>
			{array3.map((el) => {
				return <p>{el}</p>;
			})}
			{arrayX.map((el) => {
				return <p>{el}</p>;
			})}
		</div>
	);
}
export default Arrays;
