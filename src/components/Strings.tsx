type Typs = {
	readonly text1: string;
	readonly text2: string;
};

function Strings(props: Typs) {
	const stringFirst: string = 'to jest zwykla zmienan ze stringu';

	const showString = (): string => {
		return 'To jest string z funkcji';
	};
	const showString2 = (textOne: string, textTwo: string): string => {
		return `${textOne} ${textTwo}`;
	};
	return (
		<div>
			<h2>Strings</h2>
			<p>{stringFirst}</p>
			<p>{showString()}</p>
			<p>{showString2('To jest pierwszy argument', '+ a to jest drugi')}</p>
			<p>{props.text1}</p>
			<p>{props.text2}</p>
		</div>
	);
}

export default Strings;
