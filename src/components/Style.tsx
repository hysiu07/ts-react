type TypeStyle = {
    styles: React.CSSProperties
}

function Style(props: TypeStyle) {
    return <div style={props.styles}>Styles</div>;
}
export default Style;
