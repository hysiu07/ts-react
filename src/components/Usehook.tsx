import { useState } from 'react';

function Usehook() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const handleLogin = () => {
		setLoggedIn(true);
	};
	const handleLogout = () => {
		setLoggedIn(false);
	};
	return (
		<div>
			<h2>Hooks</h2>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div> User is {isLoggedIn ? 'logged in' : ' logged out'}</div>
		</div>
	);
}
export default Usehook;
