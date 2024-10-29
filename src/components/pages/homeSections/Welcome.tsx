"use client";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { WHATSAPP_LINK } from "@/constants/admin";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Welcome = () => {
	const { t } = useLanguageStore();

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	return (
		<Box id="#home" position="relative" mt={{ md: 0, base: 10 }} padding="100px 0" overflow="hidden">
			<Container maxW={CONTAINER_WIDTH} position="relative">
				<Box display={{ md: "flex", base: "none" }}>
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
							zIndex: -1,
						}}>
						<source src="/genius.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<Box
						position="absolute"
						top="0"
						left="0"
						width="100%"
						height="100%"
						borderRadius="30px"
						bgGradient="linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
						zIndex={0}
					/>
				</Box>

				<Flex
					className="fon"
					bgSize="cover"
					bgPosition="center"
					w="100%"
					h="80vh"
					maxH={600}
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
							h={{ md: "64px", base: "50px" }}
							p={1}
							borderRadius={10}
							bg="#FF9100 "
							transform="rotate(2deg)">
							<Text
								mt={{ md: "-16px", base: "-10px" }}
								color="#D3D3D3"
								transform="rotate(-2deg)"
								fontFamily="Montserrat ,sans-serif"
								fontSize={{ md: 56, base: 40 }}
								fontWeight={600}>
								{t("GENIUS.KG", "Гениус.Кейжи")}
							</Text>
						</Box>
						<Text
						display={{ md: "flex", base: "none" }}
							color={{ md: "white", base: "black" }}
							fontFamily="Montserrat ,sans-serif"
							fontSize={{ md: 56, base: 36 }}
							fontWeight={500}
							zIndex={1}>
							 {t("SCHOOL", "")}
						</Text>
					</Flex>

					<Title
						color={{ md: "white", base: "black" }}
						fontFamily="Montserrat ,sans-serif"
						fontSize={{ md: 56, base: 36 }}
						fontWeight={500}
						zIndex={1}>
						{t("образование будущего", "Келечектин билими")}
					</Title>
					<Text
					display={{ md: "flex", base: "none" }}
						textAlign={{ md: "start", base: "center" }}
						color={{ md: "white", base: "black" }}
						zIndex={1}
						mt={4}
						fontSize={{ md: 20, base: 20 }}>
						{t(
							"Развиваем таланты ваших детей  с  заботой и вниманием",
							"Балдарыңыздын таланттарын камкордук жана көңүл буруу менен өнүктүрөбүз."
						)
						.split("\n")
								.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>))
						}
					</Text>
					<Text
					display={{ md: "none", base: "block" }}
						textAlign={{ md: "start", base: "center" }}
						color={{ md: "white", base: "black" }}
						zIndex={1}
						mt={4}
						fontSize={{ md: 20, base: 20 }}>
						{t(
							"Развиваем таланты ваших детей \n с  заботой и вниманием",
							"Балдарыңыздын таланттарын камкордук жана көңүл буруу менен өнүктүрөбүз."
						)
						.split("\n")
								.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>))
						}
					</Text>
					<Link href={WHATSAPP_LINK} target={"_blank"}>
						<Button
							mt={8}
							fontFamily="Arial"
							display="flex"
							gap="10px"
							bg={{ md: "white", base: "#FFFBE6" }}
							borderRadius="50px"
							p="25px 10px 25px 25px"
							fontSize={14}
							fontWeight={600}
							zIndex={1}
							color="#00712D"
							textTransform="uppercase"
							letterSpacing="2px">
							{t("Записаться на экскурсию", "Экскурсияга жазылыңыз")}
							<span
								style={{
									background: "#00712D",
									color: "white",
									borderRadius: "50px",
									padding: "5px",
									fontSize: "20px",
								}}>
								<GoArrowUpRight />
							</span>
						</Button>
					</Link>
					<Box mt={20} display={{ md: "none", base: "block" }}>
					<video
						autoPlay
						loop
						muted
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "6px",
							zIndex: -1,
						}}>
						<source src="/genius.mp4" type="video/mp4" />
					</video>
				</Box>
				</Flex>
				 
			</Container>
		</Box>
	);
};

export default Welcome;
