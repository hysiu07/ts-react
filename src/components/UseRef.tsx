import { useEffect, useRef } from 'react';

function UseRef() {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    })
	return (
		<div>
            <h2>UseRef</h2>
            <input type="text" ref={inputRef} />
		</div>
	);
}
export default UseRef;
