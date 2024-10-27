"use client";
import Title from "@/components/ui/texts/Title";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import star from "../../../assets/Star 1.png";
import star1 from "../../../assets/Star 1 (1).png";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";
 

const Mugs = () => {

  const { t } = useLanguageStore();

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	const box = [
		{
			title: t("Комуз", "Kymyz"),
		},
		{
			title: t("АРТ", "ART"),
		},
		{
			title: t("Ментальная арифметика", "Mental Arithmetic"),
		},
		{
			title: t("Актерское мастерство", "Acting Skills"),
		},
		{
			title: t("Хореография", "Choreography"),
		},
	];
	
	const box1 = [
		{
			title1: t("Таэквандо", "Taekwondo"),
		},
		{
			title1: t("Шахматы", "Chess"),
		},
		{
			title1: t("Спортивно-бальные танцы", "Sporting Ballroom Dances"),
		},
	];
	
	return (
		<Box w="100%" p="150px 0">
			<Container maxWidth={CONTAINER_WIDTH}>
				<Box textAlign="center">  
					<Title fontSize={{ md: 56, base: 40 }} fontFamily="Unbounded">
					{t("Кружки", "Кружоктор")}
					</Title>

					<Flex
						flexDirection={{ md: "row", base: "column" }}
						justifyContent="center"
						gap={{ md: 40, base: 20 }}
						mt={{ md: 20, base: 10 }}>
						<Flex flexDirection="column" alignItems="start" gap={2}>
							<Title
								fontFamily="Unbounded"
								fontSize={{ md: 32, base: 24 }}
								fontWeight={500}
								bg="#D5ED9F"
								p={2}
								borderRadius={5}
								>
								{t("Бесплатные", "Акысыз")}
							</Title>
							{box.map((item, index) => (
								<Flex alignItems="start" key={index} mt={4} gap="6px">
									<Image width={27} height={27} src={star} alt="" />
									<Text
										w="90%"
										textAlign="start"
										fontSize={{ md: 22, base: 18 }}
										fontWeight={700}>
										{item.title}
									</Text>
								</Flex>
							))}
						</Flex>

						<Flex flexDirection="column" alignItems="start" gap={2}>
							<Title
								fontFamily="Unbounded"
								fontSize={{ md: 32, base: 24 }}
								fontWeight={500}
								bg="#FF9100"
								w={{ md: 260, base: 210 }}
								p={2}
								borderRadius={5}
								color="white">
							{t("Платные", "Төлөмдүү")}
							</Title>
							{box1.map((item, index) => (
								<Flex alignItems="start" key={index} mt={4} gap="6px">
									<Image width={27} height={27} src={star1} alt="" />
									<Text
										textAlign="start"
										fontSize={{ md: 22, base: 18 }}
										fontWeight={700}>
										{item.title1}
									</Text>
								</Flex>
							))}
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Mugs;
