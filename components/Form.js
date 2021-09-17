import React, { useState } from "react";
import { Button, Flex, Textarea, Box, Divider, Center } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { GET_BLOGPOSTS, ADD_BLOGPOST } from "../graphql/queries";

export default function Form({ loading }) {
	const [todo, setTodo] = useState("");

	const [addBlogPost] = useMutation(ADD_BLOGPOST, {
		refetchQueries: [{ query: GET_BLOGPOSTS }],
	});

	const onSubmit = (e) => {
		e.preventDefault();
		addBlogPost({ variables: { text: e.target.todo.value } });
		setTodo("");
	};

	return (
		<>
			<Box as="form" p="20px" w="100%" onSubmit={onSubmit}>
				<Flex
					d="flex"
					justifyContent="center"
					alignItems="end"
					experimental_spaceX="3"
				>
					<Textarea
						w="500px"
						h="90px"
						placeholder="Add new todo here.."
						name="todo"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<Button
						type="submit"
						bg="teal"
						color="white"
						_hover={{ bg: "teal.500" }}
						isLoading={loading ? true : false}
					>
						Add
					</Button>
				</Flex>
			</Box>
			<Center pb="10px">
				<Divider w="700px" shadow="sm" />
			</Center>
		</>
	);
}
