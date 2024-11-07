"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

import img1 from "@/assets/propose.png";
import img2 from "@/assets/propose2.png";
import img3 from "@/assets/propose3.png";
import img4 from "@/assets/propose4.png";

import Image from "next/image";

import fon from "@/assets/fon.png";
import { GoArrowRight } from "react-icons/go";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Link } from "react-scroll";


const Propose = () => {
	const { t } = useLanguageStore();
	const data = [
		{
			url: img1,
			title: t("Достижения учеников", "Окуучулардын жетишкендиктери"),
			desc: t(
				"Наши ученики — победители республиканских и международных олимпиад.",
				"Биздин окуучулар республика жана эл аралык олимпиадалардын жеңүүчүлөрү."
			),
		},
		{
			url: img2,
			title: t("Цели обучения", "Окуу максаттары"),
			desc: t(
				"Мы воспитываем социально ответственных и уверенных в своих силах учеников.",
				"Биз социалдык жоопкерчиликтүү жана өз күчүнө ишенген окуучуларды тарбиялайбыз."
			),
		},
		{
			url: img3,
			title: t("Современные методики", "Заманыбыздын методдору"),
			desc: t(
				"Мы успешно сочетаем проверенные практики прошлого и современного.",
				"Биз өткөндүн жана азыркы мезгилдин текшерилген тажрыйбаларын ийгиликтүү айкалыштырабыз."
			),
		},
		{
			url: img4,
			title: t("Развитие", "Өнүгүү"),
			desc: t(
				"Наша школа — это лестница, по которой ученики развиваются всесторонне.",
				"Биздин мектеп — бул окуучулардын ар тараптуу өнүгүүсүнө шарт түзгөн баскыч."
			),
		},
	];

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			w="100%"
			p="100px 0"
			bgImage={`url(${fon.src})`}
			bgSize="cover"
			bgPosition="center"
			bgRepeat="no-repeat">
			<Container maxW={CONTAINER_WIDTH} display="flex" justifyContent="center">
				<Box w={{ md: "1235px", base: "100%" }}>
					<Flex
						alignItems="start"
						flexDirection="column"
						gap={4}
						py={{ md: 20, base: 10 }}
						color="white">
						<Text fontSize={{ md: 60, base: 32 }} fontWeight={500}>
							{t("О нашей школе", "Биздин мектеп жөнүндө")}
						</Text>
						<Text fontSize={{ md: 32, base: 22 }} fontWeight={600}>
							{t(
								'"Гениус.Кейджи" – частная общеобразовательная школа.',
								'"Гениус.Кейджи" – жеке жалпы билим берүү мектеби.'
							)}
						</Text>

						<Link
							activeClass="active"
							to="#branches"
							spy={true}
							smooth={true}
							offset={-100}
							duration={700}>
							<Button gap={2} border="none" borderRadius={10}>
								{t("Узнать больше", "Көбүрөөк малымат алуу")}

								<span
									style={{
										fontSize: "20px",
									}}>
									<GoArrowRight />
								</span>
							</Button>
						</Link>
					</Flex>
					<Flex justifyContent="center" flexWrap="wrap" gap={6}>
						{data.map((el, index) => (
							<Flex
								alignItems="start"
								gap={4}
								flexDirection={{ md: "column", base: "row" }}
								key={index}
								borderRadius={10}
								w={{ md: 290, base: "100%" }}
								minH={{ md: 250, base: "100%" }}
								bg="#212121"
								border="solid 1px #484848"
								p={5}>
								<Image width={60} height={60} src={el.url} alt="img" />
								<Box>
									<Text color="white" fontSize={19} fontWeight={400}>
										{el.title}
									</Text>
									<Text mt={3} fontSize={16} fontWeight={400} color="#858585">
										{el.desc}
									</Text>
								</Box>
							</Flex>
						))}
					</Flex>
				</Box>
			</Container>
		</Flex>
	);
};

export default Propose;
