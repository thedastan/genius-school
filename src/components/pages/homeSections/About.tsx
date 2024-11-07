 "use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import {
	Box,
	Container,
	Flex,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/react";

import img from "@/assets/about.png";
import img1 from "@/assets/about1.png";
import img2 from "@/assets/about2.png";
import img3 from "@/assets/about3.png";
import img4 from "@/assets/about4.png";
import img5 from "@/assets/about5.png";
import img6 from "@/assets/about6.png";
import img7 from "@/assets/about7.png";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionFlex = motion(Flex as any);

const About = () => {
	const { t } = useLanguageStore();
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	const data = [
		{
			url: img,
			title: t("Школа полного дня", "Толук күндүк мектеп"),
			descrip: [
				{
					desc: t(
						"8:00 - 17:00 дети заняты,",
						"8:00 - 17:00 балдар мектепте алек болушат."
					),
				},
				{
					desc: t(
						"17:00 дети садятся на трансфер, ",
						"17:00 балдар трансферге отурушат."
					),
				},
				{
					desc: t(
						"ожидание родителей до 18:30.",
						"18:30 чейин ата-энелерин күтүп турушат."
					),
				},
			],
		},
	];

	const data2 = [
		{
			url: img1,
			title: t("До 16 учеников", "16 окуучуго чейин"),
			desc: t(
				"Учителя могут уделить внимание каждому ребенку благодаря малочисленным классам.",
				"Кичи класстар ар бир окуучуга мугалимдердин жетиштүү көңүл буруусуна шарт түзөт."
			),
		},
		{
			url: img2,
			title: t("3-разовое питание", "3 маал тамактануу"),
			desc: t(
				"В течение дня дети получают полноценное питание, что помогает поддерживать их энергию и здоровье.",
				"Күн ичинде балдар толук кандуу тамактануу менен энергиясын жана ден соолугун сакташат."
			),
		},
		{
			url: img3,
			title: t("Изучение 5 языков", "5 тилди үйрөнүү"),
			desc: t(
				"Мы обучаем английскому, русскому, китайскому, кыргызскому и программированию.",
				"Биз англис, орус, кытай, кыргыз тилдерин жана программалоону окутабыз."
			),
		},
		{
			url: img4,
			title: t("Выполнение Д/З в школе", "Үй тапшырмасын мектепте аткаруу"),
			desc: t(
				"Домашние задания выполняются под присмотром учителей, что освобождает время для семьи.",
				"Үй тапшырмалары мугалимдердин көзөмөлүндө аткарылат, бул үй-бүлөгө көбүрөөк убакыт калтырат."
			),
		},
		{
			url: img5,
			title: t("5 филиалов по Бишкеку", "Бишкек боюнча 5 филиал"),
			desc: t(
				"Удобное расположение филиалов по городу позволяет легко выбрать школу рядом с домом.",
				"Шаар боюнча филиалдардын ыңгайлуу жайгашуусу мектепти үйгө жакын жерден тандоого мүмкүнчүлүк берет."
			),
		},
		{
			url: img6,
			title: t("Комфортный трансфер", "Ыңгайлуу трансфер"),
			desc: t(
				"Мы обеспечиваем удобный и безопасный трансфер детей из дома в школу и обратно.",
				"Биз балдарды үйдөн мектепке жана кайра коопсуз жана ыңгайлуу жеткирүү менен камсыздайбыз."
			),
		},
		{
			url: img7,
			title: t("Кружки", "Кружоктор"),
			desc: t(
				"Мы предлагаем спортивные секции, творческие студии, интеллектуальные игры и музыкальные занятия.",
				"Биз спорт секцияларын, чыгармачыл студияларды, интеллектуалдык оюндарды жана музыкалык сабактарды сунуштайбыз."
			),
		},
	];

	return (
		<Box id="#about" py={{ md: 20, base: 0 }} pb={{ md: 20, base: 20 }} ref={ref}>
			<Container maxW={CONTAINER_WIDTH}>
				<Text textAlign="center" pb={10} fontSize={{ md: 60, base: 32 }} fontWeight={500}>
					{t("Что предлагает", "биздин сунуш")}{" "}
					<span style={{ color: "#118A39", textTransform: "uppercase" }}>
						{t("GENIUS.KG", "GENIUS.KG")}
					</span>
				</Text>

				<Box>
					<Flex gap={3} flexWrap="wrap">
						{data.map((el, index) => (
							<MotionFlex
								initial={{ opacity: 0, y: 22 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: index * 0.3, duration: 0.5 }}
								alignItems="start"
								gap={4}
								flexDirection={{ md: "column", base: "row" }}
								key={index}
								borderRadius={10}
								w={{ md: 321, base: "100%" }}
								bg="#118A39"
								p={5}
							>
								<Image width={56} height={56} src={el.url} alt="img" />
								<Box>
									<Text color="white" fontSize={22} fontWeight={600}>
										{el.title}
									</Text>
									<UnorderedList color="white">
										{el.descrip.map((el, index) => (
											<ListItem key={index}>
												<Text fontSize={15} fontWeight={400} color="white">
													{el.desc}
												</Text>
											</ListItem>
										))}
									</UnorderedList>
								</Box>
							</MotionFlex>
						))}
						{data2.map((el, index) => (
							<MotionFlex
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: index * 0.3, duration: 0.5 }}
								alignItems="start"
								gap={4}
								flexDirection={{ md: "column", base: "row" }}
								key={index}
								borderRadius={10}
								w={{ md: 321, base: "100%" }}
								bg="#E3E3E3"
								p={5}
							>
								<Image width={56} height={56} src={el.url} alt="img" />
								<Box>
									<Text fontSize={22} fontWeight={600}>
										{el.title}
									</Text>
									<Text fontSize={15} fontWeight={400} color="#8A8A8A">
										{el.desc}
									</Text>
								</Box>
							</MotionFlex>
						))}
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default About;
