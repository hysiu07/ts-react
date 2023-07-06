type oscarProps = {
	children: React.ReactNode;
};
function Oscar(props: oscarProps) {
	return (
		<div>
			<div>{props.children}</div>
			<p>Leonardo di Caprio got oscar in last year</p>
		</div>
	);
}
export default Oscar;
