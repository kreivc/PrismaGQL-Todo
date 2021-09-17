import React from "react";
import Image from "next/image";
import Load from "../assets/Loading.svg";
import { Center } from "@chakra-ui/react";

export default function Loading() {
	return (
		<div>
			<Center>
				<Image src={Load} alt="loading" />
			</Center>
		</div>
	);
}
