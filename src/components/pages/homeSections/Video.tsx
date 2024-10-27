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
} from "@chakra-ui/react";

import { FaAngleRight, FaPlay } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useRef, useState } from "react";

import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Video = () => {
	const { t } = useLanguageStore();
	const sliderRef = useRef<Slider | null>(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedVideo, setSelectedVideo] = useState("");

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const videos = [
		{ id: 1, link: "https://www.youtube.com/embed/1MILPY1bPVY" },
		{ id: 2, link: "https://www.youtube.com/embed/1MILPY1bPVY" },
		{
			id: 3,
			link: "https://www.youtube.com/embed/1MILPY1bPVY",
		},
		{ id: 4, link: "https://www.youtube.com/embed/1MILPY1bPVY" },
	];

	const openModal = (link: string) => {
		const autoplayLink = link.includes("?")
			? `${link}&autoplay=1`
			: `${link}?autoplay=1`;
		setSelectedVideo(autoplayLink);
		setSelectedVideo("");
		onOpen();
		setTimeout(() => setSelectedVideo(autoplayLink), 0);
	};

	return (
		<Box padding="100px 0" position="relative">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex justifyContent="space-between" alignItems="center">
					<Text
						fontSize={{ lg: "56", base: "32" }}
						fontFamily="Unbounded"
						fontWeight={600}
						p={4}>
						{t("Отзывы", "Пикирлер")}
					</Text>

					<Button
						onClick={() => sliderRef.current?.slickNext()}
						border="solid 1px #D4D4D4"
						padding="2px"
						bg="white"
						color="black">
						<FaAngleRight />
					</Button>
				</Flex>

				<Box position="relative">
					<Slider ref={sliderRef} {...settings}>
						{videos.map((el) => (
							<Box
								key={el.id}
								display="flex"
								w="200px"
								h="500px"
								borderRadius={20}
								padding="0 20px"
								position="relative">
								<iframe
									className="video"
									width="100%"
									height="100%"
									style={{ borderRadius: "20px" }}
									src={el.link}></iframe>

								<Box
									position="absolute"
									top="0"
									left="0"
									width="100%"
									height="100%"
									borderRadius="20px"
									background="transparent"
									zIndex="1"
								/>

								<Box bg="red" w="100%" display="flex" justifyContent="center">
									<Button
										onClick={() => openModal(el.link)}
										position="absolute"
										bottom="200px"
										zIndex="2"
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
						))}
					</Slider>
				</Box>
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
