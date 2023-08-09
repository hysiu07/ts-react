export type ProfileNameProps = {
	name: string;
};

export const Profile = ({ name }: ProfileNameProps) => {
    return <div>Private Profile component name : {name}</div>;
};
