type InputProps = {
	value: string;
};
function Input(props: InputProps) {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};
	return (
		<div>
			<h3>Input</h3>
			<input type='text' value={props.value} onChange={handleInputChange} />
		</div>
	);
}
export default Input;


// mozna destrukturyzowac propsy w ts: function Input({value}: InputProps) 