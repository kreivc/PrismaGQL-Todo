import { useQuery } from "@apollo/client";
import { GET_BLOGPOSTS } from "../graphql/queries";
import Card from "./Card";
import Loading from "./Loading";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

const BlogPosts = () => {
	const { loading, error, data } = useQuery(GET_BLOGPOSTS);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [editId, setEditId] = useState("");

	const openModal = (id) => setEditId(id);

	return (
		<>
			{error && <p>Error</p>}
			{loading ? (
				<Loading loading={loading} />
			) : (
				<>
					<UpdateModal isOpen={isOpen} onClose={onClose} editId={editId} />
					<Grid
						templateColumns="repeat(3, 1fr)"
						justifyItems="center"
						px="150px"
					>
						{data.blogPosts.map((blogPostData) => (
							<Card
								key={blogPostData.id}
								{...blogPostData}
								onOpen={onOpen}
								openModal={openModal}
							/>
						))}
					</Grid>
				</>
			)}
		</>
	);
};

export default BlogPosts;
