import { useState, useRef } from 'react';

type Employee = string;
interface IEmployeeRepository {
	baseUrl: string;
	getFirst(): Employee;
}

function Functions() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [text, setText] = useState('');
	const getFirst = (x: string, y: string): Employee => {
		return `nazywam sie ${x} ${y}`;
	};
	const reset = () => {
		setText('');
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};
	const change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		event.preventDefault();
		setText(event.target.value);
		console.log(text);
	};
	const onclick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		if (inputRef.current) {
			console.log(inputRef.current.value);
		}
	};

	return (
		<div>
			<h1>Functions</h1>
			<p>{getFirst('Daniel', 'Hys')}</p>
			<input type='text' name='text' onChange={change} ref={inputRef} />
			<button onClick={reset}>reset</button>
			<button type='submit' onClick={onclick}>
				Submit
			</button>
		</div>
	);
}
export default Functions;
