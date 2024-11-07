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

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionFlex = motion(Flex as any);

const Parentschildren = () => {
	const { t } = useLanguageStore();

	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
			title: t("программирование с 4 класса", "4-класстан баштап программалоо"),
		},
		{
			title: t("учебные проекты", "Окуу долбоорлору"),
		},
		{
			title: t("многообразие иностранных языков", "чет тилинин көп түрдүүлүгү"),
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
			<Box ref={ref} bg="#F2F5EB" w="100%" pt="48px">
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
							<Text
								lineHeight={{ md: "81px", base: "41px" }}
								textAlign="start"
								color="black"
								fontSize={{ md: 70, base: 30 }}
								fontWeight={500}>
								{t(
									"Почему родители и дети выбирают наc",
									"Ата-энелер бизди тандоо себеби"
								)}
							</Text>
							<Description
								color="black"
								mt={6}
								w={{ md: "90%", base: "100%" }}
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
										zIndex={1}
										borderRadius="50px"
										p="10px 14px"
										border="solid 1px grey"
										transition="0.3s"
										_hover={{bg:"#FF9100", transition:"0.3s",color:"white",border:"solid 1px white"}}
										>
										<Text fontSize={{ md: 16, base: 12 }} fontWeight={400}>
											{item.title}
										</Text>
									</Box>
								))}
							</Flex>
						</Flex>

						<MotionFlex
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 1 }}
							marginTop={{ md: 0, base: 6 }}
							flexDirection="column"
							alignItems="end">
							<Image src={img2} alt="img" />
							<Image className="kit_img" src={img} alt="img" />
						</MotionFlex>
					</Flex>
				</Container>
				<MotionFlex
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 1 }}>
					<Image className="cloud" src={img3} alt="" />
				</MotionFlex>
			</Box>
		</>
	);
};

export default Parentschildren;
