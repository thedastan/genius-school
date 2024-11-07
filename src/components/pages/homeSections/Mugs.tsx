"use client";
import Title from "@/components/ui/texts/Title";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import star from "../../../assets/Star 1.png";
import star1 from "../../../assets/star2.png";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionFlex = motion(Flex as any);

const Mugs = () => {
	const { t } = useLanguageStore();

	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	const box = [
		{
			title: t("Комуз", "Комуз"),
		},
		{
			title: t("АРТ", "АРТ"),
		},
		{
			title: t("Ментальная арифметика", "Менталдык арифметика"),
		},
		{
			title: t("Актерское мастерство", "Актёрдук өнөр"),
		},
		{
			title: t("Хореография", "Хореография"),
		},
	];

	const box1 = [
		{
			title1: t("Таэквандо", "Таэквандо"),
		},
		{
			title1: t("Шахматы", "Шахмат"),
		},
		{
			title1: t("Спортивно-бальные танцы", "Спорттук бальный бийлер"),
		},
	];

	return (
		<Box w="100%" p="70px 0">
			<Container maxWidth={CONTAINER_WIDTH}>
				<Box textAlign="center">
					<Title
						fontWeight={500}
						fontSize={{ md: 56, base: 32 }}
						fontFamily="Montserrat ,sans-serif">
						{t("Кружки", "Кружоктор")}
					</Title>

					<Flex ref={ref}
						flexDirection={{ md: "row", base: "column" }}
						justifyContent="center"
						gap={{ md: 40, base: 10 }}
						mt={{ md: 20, base: 10 }}>
						<Flex flexDirection="column" alignItems="start" gap={2}>
							<Title
								fontFamily="Montserrat ,sans-serif"
								fontSize={{ md: 32, base: 24 }}
								fontWeight={600}
								bg="#118A39"
								w={{ md: 280, base: "100%" }}
								p="15px 0px"
								borderRadius={40}
								color="white">
								{t("Бесплатные", "Акысыз")}
							</Title>
							{box.map((item, index) => (
								<MotionFlex initial={{ opacity: 0, x: 20 }}
								animate={
									inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
								}
								transition={{ delay: index * 0.3, duration: 0.5 }} alignItems="start" key={index} mt={4} gap="6px">
									<Image width={27} height={27} src={star} alt="" />
									<Text
										textAlign="start"
										fontSize={{ md: 22, base: 18 }}
										fontWeight={700}>
										{item.title}
									</Text>
								</MotionFlex>
							))}
						</Flex>

						<Flex flexDirection="column" alignItems="start" gap={2}>
							<Title
								fontFamily="Montserrat ,sans-serif"
								fontSize={{ md: 32, base: 24 }}
								fontWeight={600}
								bg="#FF9100"
								w={{ md: 280, base: "100%" }}
								p="15px 0px"
								borderRadius={40}
								color="white">
								{t("Платные", "Төлөмдүү")}
							</Title>
							{box1.map((item, index) => (
								<MotionFlex
									initial={{ opacity: 0, x: 20 }}
									animate={
										inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
									}
									transition={{ delay: index * 0.3, duration: 0.5 }}
									alignItems="start"
									key={index}
									mt={4}
									gap="6px">
									<Image width={27} height={27} src={star1} alt="" />
									<Text
										textAlign="start"
										fontSize={{ md: 22, base: 18 }}
										fontWeight={700}>
										{item.title1}
									</Text>
								</MotionFlex>
							))}
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Mugs;
