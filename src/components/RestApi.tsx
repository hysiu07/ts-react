type Props = {
	postsX: { userId: number; id: number; title: string; body: string }[];
};

function RestApi({ postsX }: Props) {
	return (
		<div>
			<h1>Rest Api</h1>
			{postsX.map((post) => {
				return (
					<div>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}

export default RestApi;
