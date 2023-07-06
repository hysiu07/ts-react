type THeading = {
	children: string;
};

function Heading(props: THeading) {
	return <h1>{props.children}</h1>;
}
export default Heading;
