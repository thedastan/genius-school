"use client";
import { CONTAINER_ABOUT } from "@/config/_variables.config";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../../assets/about.png";

import image1 from "../../../assets/Frame 2087328236.png";
import image2 from "../../../assets/darts.png";
import image3 from "../../../assets/lampa.png";
import image4 from "../../../assets/lisson.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Link as ScrollLink } from "react-scroll";
import { IoArrowDownSharp } from "react-icons/io5";

const About = () => {
	const { t } = useLanguageStore();
	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	const card = [
		{
			url: image1,
			title: t(
				"Достижения учеников и школы",
				"Окуучулар менен мектептин жетишкендиктери"
			),
			disc: t(
				"Наши ученики — победители республиканских и международных олимпиад.",
				"Биздин окуучулар — республикалык жана эл аралык олимпиадалардын жеңүүчүлөрү."
			),
		},
		{
			url: image2,
			title: t("Цели обучения", "Learning Goals"),
			disc: t(
				"Мы воспитываем социально ответственных и уверенных в своих силах учеников.",
				"We nurture socially responsible and self-confident students."
			),
		},
		{
			url: image3,
			title: t("Современные методики", "Modern Methods"),
			disc: t(
				"Мы успешно сочетаем проверенные практики прошлого и современные подходы.",
				"We successfully combine proven practices of the past with modern approaches."
			),
		},
		{
			url: image4,
			title: t("Genius School", "Genius School"),
			disc: t(
				"Наша школа — это лестница, по которой ученики развиваются всесторонне.",
				"Our school is a ladder for students to develop comprehensively."
			),
		},
	];

	const links = [
		{
			name: t("узнать больше", "learn more"),
			link: "#what",
		},
	];
	return (
		<Box id="#about" w="100%" p="100px 0">
			<Container maxW={CONTAINER_ABOUT}>
				<Box>
					<Flex flexDirection={{ md: "row", base: "column" }} gap={2}>
						<Text
							color="black"
							fontFamily="Unbounded"
							fontSize={{ md: 56, base: 40 }}
							fontWeight={500}>
							{t("О нашей", "Биздин")}
						</Text>
						<Box
							mt={{ md: "16px", base: "-15px" }}
							w={{ md: "255px", base: "185px" }}
							h={{ md: "60px", base: "45px" }}
							p={1}
							borderRadius={10}
							textAlign="center"
							bg="#FF9100"
							transform="rotate(-2deg)">
							<Text
								mt={{ md: "-16px", base: "-10px" }}
								color="white"
								transform="rotate(2deg)"
								fontFamily="Unbounded"
								fontSize={{ md: 56, base: 40 }}
								fontWeight={500}>
								{t("Школе", "Мектеп")}
							</Text>
						</Box>
					</Flex>

					<Flex mt="40px" flexWrap="wrap" justifyContent="center" gap={10}>
						<Box
							boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
							w={{ md: 760, base: "100%" }}
							h={{ md: 300, base: "100%" }}
							p={{ md: 8, base: 4 }}
							bg="#D5ED9F"
							borderRadius={20}>
							<Image width={23} height={23} src={img} alt="" />
							<Box p={6}>
								<Text
									color="#00712D"
									fontSize={{ md: 40, base: 28 }}
									fontWeight={400}
									lineHeight="40px">
									&quot;{t("Гениус.Кейджи", "Genius. Cage.")}&quot;{" "}
									{t("– частная", "- private")}
									<Box ml={{ md: "12px", base: "0px" }}>
										{t(
											"общеобразовательная школа.",
											"general education school."
										)}
									</Box>
								</Text>

							 
								{links.map((item, index) => (
									<Button
										key={index}
										bg="#00712D"
										mt={8}
										fontFamily="Arial"
										display="flex"
										alignItems="center"
										gap="10px"
										borderRadius="50px"
										p="20px 10px 20px 20px"
										fontSize="14px"
										fontWeight="700"
										color="white">
										<ScrollLink
											activeClass="active"
											to={item.link}
											spy={true}
											smooth={true}
											offset={0}
											duration={700}
											style={{
												display: "flex",
												alignItems: "center",
												gap: "10px",
											}}>
											{item.name}
											<Box
												bg="white"
												color="#00712D"
												borderRadius="50px"
												p="5px"
												fontSize="14px">
												<IoArrowDownSharp />
											</Box>
										</ScrollLink>
									</Button>
								))}
							</Box>
						</Box>

						{/* <Flex flexWrap="wrap"> */}
						{card.map((item, index) => (
							<Flex
								boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
								flexDirection="column"
								gap={4}
								w={{ md: 360, base: "100%" }}
								bg="#FFFFFF"
								borderRadius={20}
								p={8}
								key={index}>
								<Image src={item.url} alt="" />
								<Text fontSize={22} fontWeight={700}>
									{item.title}
								</Text>
								<Text fontSize={16} fontWeight={400}>
									{item.disc}
								</Text>
							</Flex>
						))}
						{/* </Flex> */}
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default About;
