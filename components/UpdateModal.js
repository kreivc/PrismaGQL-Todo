import {
	Modal,
	Button,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Textarea,
	Box,
} from "@chakra-ui/react";
import { GET_BLOGPOSTS, EDIT_BLOGPOST } from "../graphql/queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const UpdateModal = ({ isOpen, onClose, editId }) => {
	const [updateText, setUpdateText] = useState("");

	const [editBlogPost] = useMutation(EDIT_BLOGPOST, {
		refetchQueries: [{ query: GET_BLOGPOSTS }],
	});

	const onUpdate = (id, text, e) => {
		e.preventDefault();
		editBlogPost({ variables: { id: id, text: text } });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit Todo</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Textarea
						w="400px"
						h="100px"
						placeholder="Update Todo here.."
						value={updateText}
						onChange={(e) => setUpdateText(e.target.value)}
					/>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="gray" mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button
						colorScheme="teal"
						type="submit"
						onClick={(e) => onUpdate(editId, updateText, e)}
					>
						Update
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateModal;
