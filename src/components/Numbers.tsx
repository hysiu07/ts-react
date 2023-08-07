type Typs = {
	readonly number: number;
	readonly number2: number;
};

function Numbers(props: Typs) {
	const number: number = 50;
	const showNumber = (): number => {
		return 2 + 3;
	};
	const showNumber2 = (x: number, y: number) => {
		return x + y;
	};
	const showNummber3 = (z: number, p: number) => {
		return z - p
	}
	return (
		<div>
			<h1>Numbers</h1>
			<p>{`mam lat ${number}`}</p>
			<p>{`wynik funkcji dodawania ${showNumber()}`}</p>
			<p>{`wynik funcji drugiej ${showNumber2(2, 50)}`}</p>
			<p>{ `wynik funckji trzeciej ${showNummber3(10,3)}`}</p>
		</div>
	);
}

export default Numbers;
