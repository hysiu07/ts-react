import { useState } from 'react';
type AuthUser = {
	name: string;
	email: string;
};
function UsehookAdvancetype() {
	const [user, setUser] = useState<AuthUser | null>(null);
	const handleLogin = () => {
		setUser({
			name: 'Daniel',
			email: 'daniel@example.com',
		});
	};
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div>
			<h2>UsehookAdvancetype</h2>
			<button onClick={handleLogin}>Login Adv.</button>
			<button onClick={handleLogout}>Logout Adv.</button>
			<div> User is {user?.name}</div>
			<div> User is {user?.email}</div>
		</div>
	);
}
export default UsehookAdvancetype;
