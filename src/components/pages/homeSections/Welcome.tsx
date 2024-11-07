"use client";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import TitleComponent from "@/components/ui/texts/TitleComponent";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { WHATSAPP_LINK } from "@/constants/admin";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

const Welcome = () => {
	const { t } = useLanguageStore();

	return (
		<Box
			id="#home"
			position="relative"
			mt={{ md: 0, base: 10 }}
			padding="100px 0"
			overflow="hidden">
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
						color="white"
						zIndex={1}
						textAlign="center"
						flexDirection="column">
						<Text
							color={{ md: "white", base: "#118A39" }}
							fontSize={{ md: 70, base: 58 }}
							fontWeight={700}>
							GENIUS.KG
						</Text>

						<Text
							color={{ md: "white", base: "black" }}
							lineHeight={{ md: "52px", base: "32px" }}
							// w={{ md: 620, base: "100%" }}
							fontSize={{ md: 52, base: 28 }}
							fontWeight={600}>
							{t(
								"Развиваем таланты \n ваших детей с заботой \n и вниманием",
								"Балдарыңыздын таланттарын \n камкордук жана көңүл \n буруу менен өстүрөбүз."
							)
							.split("\n")
								.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>))
							}
						</Text>

						 
					</Flex>

					<Link href={WHATSAPP_LINK} target={"_blank"}>
						<Button
							mt={8}
							fontFamily="Arial"
							display="flex"
							gap="10px"
							bg={{ md: "#FF9100", base: "#FF9100" }}
							borderRadius="50px"
							p="25px"
							fontSize={16}
							fontWeight={500}
							zIndex={1}
							color="white"
							textTransform="uppercase">
							{t("Записаться на экскурсию", "Экскурсияга жазылыңыз")}
							<span
								style={{
									fontSize: "20px",
								}}>
								<GoArrowRight />
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
