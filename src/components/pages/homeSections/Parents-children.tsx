"use client";
import Description from "@/components/ui/texts/Description";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../../assets/kit.png";
import img2 from "../../../assets/bird.png";
import img3 from "../../../assets/cloud.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Title from "@/components/ui/texts/Title";

const Parentschildren = () => {
	const { t } = useLanguageStore();


	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	const box = [
		{
			title: t("кружки", "Кружоктор"),
		},
		{
			title: t(
				"программирование после 4-класса",
				"4-класстан кийин программалоо"
			),
		},
		{
			title: t("учебные проекты", "Окуу долбоорлору"),
		},
		{
			title: t("китайский язык", "Кытай тили"),
		},
		{
			title: t("секции", "Секциялар"),
		},
		{
			title: t("трехразовое питание", "Үч жолу тамактануу"),
		},
		{
			title: t("образовательный туризм", "Билим берүү туризми"),
		},
	];

	return (
		<>
			<Box w="100%" p="50px 0">
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						flexDirection={{ md: "row", base: "column" }}
						bg="#F2F5EB"
						p={{ md: 10, base: 4 }}
						borderRadius={20}>
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
								fontFamily="Montserrat ,sans-serif"
								fontSize={{ md: 50, base: 34 }}
								fontWeight={500}
								zIndex={1}>
								{t("", "")}
							</Title>
							<Flex
								flexWrap="wrap"
								textAlign="center"
								alignItems={{ md: "start", base: "center" }}
								flexDirection={{ md: "row", base: "column" }}
								gap={2}>
								<Text
									color="black"
									fontFamily="Montserrat ,sans-serif"
									fontSize={{ md: 50, base: 34 }}
									fontWeight={500}
									zIndex={1}>
									{t("Почему нас ", "Бизди тандоо")}
								</Text>

								<Box
									p={1}
									borderRadius={10}
									bg="#D5ED9F"
									transform="rotate(-2deg)">
									<Text
										color="#00712D"
										transform="rotate(2deg)"
										fontFamily="Montserrat ,sans-serif"
										fontSize={{ md: 50, base: 34 }}
										fontWeight={500}>
										{t("выбирают", "   себеби")}
									</Text>
								</Box>
							</Flex>

							<Description
								color="black"
								mt={6}
								w={{ md: "80%", base: "100%" }}
								fontSize={20}
								textAlign="start">
								{t(
									"Школа ПРЕДЛАГАЕТ ЦЕЛОСТНУЮ СИСТЕМУ ОБРАЗОВАНИЯ, ВКЛЮЧАЮЩУЮ ИНТЕЛЛЕКТУАЛЬНОЕ, НРАВСТВЕННОЕ, ЭСТЕТИЧЕСКОЕ И ФИЗИЧЕСКОЕ РАЗВИТИЕ:",
									"Мектеп интеллектуалдык, моралдык, эстетикалык жана физикалык өнүгүүнү камтыган комплекстүү билим берүү системасын сунуштайт:"
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
										p="10px 14px"
										border="solid 1px grey">
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
