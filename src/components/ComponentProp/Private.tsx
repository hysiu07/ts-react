import { Login } from './Login';
import { ProfileNameProps } from './Profile';
type PrivatProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileNameProps>
}
export const Private = ({ isLoggedIn, component: Component }: PrivatProps
) => {
	if (isLoggedIn) {
		return <Component name='Daniel'/>;
	} else {
		return <Login />;
	}
};
