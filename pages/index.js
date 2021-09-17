import Head from "next/head";
import BlogPosts from "../components/BlogPosts";
import Form from "../components/Form";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Todo GQL Prisma</title>
				<meta name="description" content="Todo GQL Prisma" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Form />
			<BlogPosts />
		</div>
	);
}
