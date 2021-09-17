import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: process.env.GQL_URI,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ChakraProvider>
	);
}

export default MyApp;
