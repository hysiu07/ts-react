type StatusProps = {
	status: 'loading' | 'error' | 'success';
};

function Status(props: StatusProps) {
	let message;
	if (props.status === 'loading') {
		message = 'Loading...';
	} else if (props.status === 'success') {
		message = 'Success';
	} else if (props.status === 'error') {
		message = 'Error';
	}
	return (
		<div>
			<h1>Status - advanced props ts</h1>
			<h2>{message}</h2>
		</div>
	);
}
export default Status;
