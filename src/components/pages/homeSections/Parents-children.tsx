"use client";
import Description from "@/components/ui/texts/Description";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import img from "../../../assets/kit.png";
import img2 from "../../../assets/bird.png";
import img3 from "../../../assets/cloud.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Title from "@/components/ui/texts/Title";

const Parentschildren = () => {
	const { t } = useLanguageStore();

	const box = [
		{
			title: t("кружки", "Clubs"),
		},
		{
			title: t(
				"программирование после 4-класса",
				"Programming after 4th Grade"
			),
		},
		{
			title: t("учебные проекты", "Educational Projects"),
		},
		{
			title: t("китайский язык", "Chinese Language"),
		},
		{
			title: t("секции", "Sections"),
		},
		{
			title: t("трехразовое питание", "Three Meals a Day"),
		},
		{
			title: t("образовательный туризм", "Educational Tourism"),
		},
	];

	return (
		<>
			<Box w="100%" p="50px 0">
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						flexDirection={{ md: "row", base: "column" }}
						bg="#F2F5EB"
						p={{ md: 10, base: 4 }}>
						<Flex
							flexDirection="column"
							justifyContent="start"
							alignItems={{ md: "start", base: "center" }}
							color="black"
							textAlign="center"
							gap={0}>
							<Title
								textAlign="center"
								color="black"
								fontFamily="Unbounded"
								fontSize={{ md: 50, base: 40 }}
								fontWeight={500}
								zIndex={1}>
								{t("Почему родители","Why Parents")}
							</Title>
							<Flex
							flexWrap="wrap"
								textAlign="center"
								alignItems={{ md: "start", base: "center" }}
								flexDirection={{ md: "row", base: "column" }}
								gap={2}>
								<Text
									color="black"
									fontFamily="Unbounded"
									fontSize={{ md: 50, base: 40 }}
									fontWeight={500}
									zIndex={1}>
									{t("и дети", "and children")}
								</Text>

								<Box
									mt={{ md: "16px", base: "-10px" }}
									w={{ md: "500px", base: "100%" }}
									h={{ md: "60px", base: "100%" }}
									p={1}
									borderRadius={10}
									bg="#D5ED9F"
									transform="rotate(-2deg)">
									<Text
										mt={{ md: "-16px", base: "-10px" }}
										color="#00712D"
										transform="rotate(2deg)"
										fontFamily="Unbounded"
										fontSize={{ md: 50, base: 40 }}
										fontWeight={500}>
										{t("выбирают наc", "choose us")}
									</Text>
								</Box>
							</Flex>

							<Description
								color="black"
								mt={6}
								w={{ md: "80%", base: "100%" }}
								fontSize={20}>
								{t(
									"Школа ПРЕДЛАГАЕТ ЦЕЛОСТНУЮ СИСТЕМУ ОБРАЗОВАНИЯ, ВКЛЮЧАЮЩУЮ ИНТЕЛЛЕКТУАЛЬНОЕ, НРАВСТВЕННОЕ, ЭСТЕТИЧЕСКОЕ И ФИЗИЧЕСКОЕ РАЗВИТИЕ:",
									"The school offers a comprehensive education system, Including intellectual, moral, aesthetic, and physical development:"
								)}
							</Description>

							<Flex
								mt={6}
								flexWrap="wrap"
								gap={2}
								w={{ md: "90%", base: "100%" }}>
								{box.map((item, index) => (
									<Box
										key={index}
										borderRadius="50px"
										p="6px"
										border="solid 1px grey"
										 
										>
										<Text fontSize={{ md: 16, base: 12 }} fontWeight={400}>
											{item.title}
										</Text>
									</Box>
								))}
							</Flex>
						</Flex>

						<Flex
							marginTop={{ md: 0, base: 6 }}
							flexDirection="column"
							alignItems="end">
							<Image src={img2} alt="img" />
							<Image className="kit_img" src={img} alt="img" />
						</Flex>
					</Flex>
				</Container>
				<Box>
					<Image className="cloud" src={img3} alt="" />
				</Box>
			</Box>
		</>
	);
};

export default Parentschildren;
