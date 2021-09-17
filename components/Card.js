import { Box, Stack, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GET_BLOGPOSTS, DELETE_BLOGPOST } from "../graphql/queries";
import { useMutation } from "@apollo/client";

const Card = ({ text, id, onOpen, openModal }) => {
	const [deleteBlogPost] = useMutation(DELETE_BLOGPOST, {
		refetchQueries: [{ query: GET_BLOGPOSTS }],
	});

	const onDelete = (id, e) => {
		e.preventDefault();
		deleteBlogPost({ variables: { id } });
	};

	const handleEdit = () => {
		onOpen();
		openModal(id);
	};

	return (
		<>
			<Stack bg="teal" p="20px" color="white" m="10px" rounded="lg" w="300px">
				<Box>{text}</Box>
				<Flex color="teal" justifyContent="space-between">
					<Button leftIcon={<FiEdit3 />} bg="white" onClick={handleEdit}>
						Edit
					</Button>
					<Button
						leftIcon={<RiDeleteBin5Line />}
						onClick={(e) => onDelete(id, e)}
						bg="white"
					>
						Delete
					</Button>
				</Flex>
			</Stack>
		</>
	);
};

export default Card;
