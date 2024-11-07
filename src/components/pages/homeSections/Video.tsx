 
"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	Text,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Modal,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";

import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Video = () => {
	const { t } = useLanguageStore();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedVideo, setSelectedVideo] = useState("");

	const videos = [
		{ id: 1, link: "1MILPY1bPVY" },
		{ id: 2, link: "1MILPY1bPVY" },
		{ id: 3, link: "1MILPY1bPVY" },
		{ id: 4, link: "1MILPY1bPVY" },
		{ id: 5, link: "1MILPY1bPVY" },
	];

	const openModal = (videoId:string) => {
		const autoplayLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
		setSelectedVideo(autoplayLink);
		onOpen();
	};

	return (
		<Box padding={{ md: "100px 0", base: "50px 0" }} position="relative">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex justifyContent="center" alignItems="center">
					<Text
						fontSize={{ lg: "56", base: "32" }}
						fontFamily="Montserrat, sans-serif"
						fontWeight={600}
						p={4}>
						{t("Отзывы", "Пикирлер")}
					</Text>
				</Flex>

				<Flex
					mt="25px"
					w="100%"
					overflowX="auto"
					overflowY="hidden"
					className="unscroll"
					justifyContent={{ md: "center", base: "start" }}>
					<Flex gap="20px">
						{videos.map((el) => (
							<Box key={el.id} position="relative" w="240px" h="400px" marginTop={el.id % 2 === 1 ? { md: "50px", base: "0" } : "0"}>
								<Image
									src={`https://img.youtube.com/vi/${el.link}/hqdefault.jpg`}
									alt="Video Thumbnail"
									width="100%"
									height="100%"
									objectFit="cover"
									borderRadius="10px"
									onClick={() => openModal(el.link)}
									cursor="pointer"
								/>
								<Button
									onClick={() => openModal(el.link)}
									position="absolute"
									bottom="50%"
									left="50%"
									transform="translate(-50%, 50%)"
									borderRadius="50%"
									display="flex"
									w={12}
									h={12}
									bg="white"
									color="#E03124"
									fontSize={20}>
									<FaPlay />
								</Button>
							</Box>
						))}
					</Flex>
				</Flex>
			</Container>

			<Modal size="6xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader></ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box
							as="iframe"
							src={selectedVideo}
							width="100%"
							height="500px"
							allow="autoplay; encrypted-media"
							borderRadius="10px"
							border="none"
						/>
					</ModalBody>

					<ModalFooter>
						<Button bg="black" color="white" mr={3} onClick={onClose}>
							{t("Закрыть", "Close")}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Video;

{/* <Box
display="flex"
justifyContent="center"
key={el.id}
w={{ md: "240px", base: "280px" }}
h="100%"
marginTop={el.id % 2 === 1 ? { md: "50px", base: "0" } : "0"}>
<Box w="100%" h={{ md: "400px", base: "440px" }}>
	<iframe
		className="video"
		width="100%"
		height="100%"
		style={{ borderRadius: "10px" }}
		src={el.link}></iframe>

	<Button
		onClick={() => openModal(el.link)}
		// position="absolute"
		bottom="50%"
		left="50%"
		transform="translate(-50%, -40%)"
		// zIndex="2"
		borderRadius="50%"
		display="flex"
		w={24}
		h={24}
		bg="white"
		color="#E03124"
		fontSize={26}>
		<FaPlay />
	</Button>
</Box>
</Box>
 */}


