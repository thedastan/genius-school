"use client";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { WHATSAPP_LINK } from "@/constants/admin";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Welcome = () => {
	const { t } = useLanguageStore();

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	return (
		<Box id="#home" position="relative" padding="100px 0" overflow="hidden">
			<Container maxW={CONTAINER_WIDTH} position="relative">
				{" "}
				{/* Set position to relative for absolute children */}
				{/* Background Video */}
				<video
					autoPlay
					loop
					muted
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "30px",
						zIndex: -1, // Position behind other content
					}}>
					<source src="/genius.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				{/* Gradient Overlay */}
				<Box
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					borderRadius="30px"
					bgGradient="linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" // Adjust colors and opacity as needed
					zIndex={0} // Set to lower value than the text content
				/>
				<Flex
					className="fon"
					bgSize="cover"
					bgPosition="center"
					w="100%"
					h="80vh"
					borderRadius={20}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap="6px"
					zIndex={1}
					textAlign={{ md: "start", base: "center" }}>
					<Flex
						alignItems={{ md: "start", base: "center" }}
						flexDirection={{ md: "row", base: "column" }}
						gap={2}>
						<Box
							mt={{ md: "16px", base: "-15px" }}
							w={{ md: "275px", base: "210px" }}
							h={{ md: "60px", base: "45px" }}
							p={1}
							borderRadius={10}
							bg="#D5ED9F"
							transform="rotate(2deg)">
							<Text
								mt={{ md: "-16px", base: "-10px" }}
								color="#00712D"
								transform="rotate(-2deg)"
								fontFamily="Unbounded"
								fontSize={{ md: 56, base: 40 }}
								fontWeight={500}>
								GENIUS
							</Text>
						</Box>
						<Text
							color="white"
							fontFamily="Unbounded"
							fontSize={{ md: 56, base: 40 }}
							fontWeight={500}
							zIndex={1}>
							SCHOOL
						</Text>
					</Flex>

					<Title
						color="white"
						fontFamily="Unbounded"
						fontSize={{ md: 56, base: 40 }}
						fontWeight={500}
						zIndex={1}>
						 {t("образование будущего","Education of the future.")}
					</Title>
					<Description
						textAlign={{ md: "start", base: "center" }}
						color="white"
						zIndex={1}
						mt={8}
						fontSize={20}>
						{t(
							"Развиваем таланты ваших детей с заботой и вниманием",
							"Developing your children's talents with care and attention."
						)}
					</Description>
      <Link href={WHATSAPP_LINK} target={"_blank"}> 
					<Button
						mt={8}
						fontFamily="Arial"
						display="flex"
						gap="10px"
						borderRadius="50px"
						p="20px 10px 20px 20px"
						fontSize={14}
						fontWeight={700}
						color="#00712D">
						 {t("Записаться на пробный урок","Sign up for a trial lesson")}
						<span
							style={{
								background: "#00712D",
								color: "white",
								borderRadius: "50px",
								padding: "5px",
							}}>
							<MdOutlineArrowOutward />
						</span>
					</Button>
					</Link>
				</Flex>
			</Container>
		</Box>
	);
};

export default Welcome;
