export default function Layout({ children, title }) {
	return (
		<main className={`layout ${title}`}>
			<h1>{title}</h1>

			{children}
		</main>
	);
}
