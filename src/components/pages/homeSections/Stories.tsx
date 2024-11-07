"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";

import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useEffect, useRef } from "react";

import { CONTAINER_WIDTH } from "@/config/_variables.config";

import img1 from "@/assets/gallerea/photo_5258488427005993358_y.jpg";
import img2 from "@/assets/gallerea/photo_5258488427005993357_y.jpg";
import img3 from "@/assets/gallerea/photo_5258488427005993353_y.jpg";
import img4 from "@/assets/gallerea/his3.jpg";

import img5 from "@/assets/gallerea/medal.jpg";
import img6 from "@/assets/gallerea/medal1.jpg";
import img7 from "@/assets/gallerea/medal2.jpg";
import img8 from "@/assets/gallerea/medal4.jpg";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Stories = () => {
	const { t } = useLanguageStore();
	const sliderRef1 = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const box = [
		{
			url: img3,
			title: t("Международная олимпиада", "Эл аралык олимпиада"),
			disc: t(
				"Пару предложений о событии, его значимости и участниках",
				"Иш-чара, анын мааниси жана катышуучулары жөнүндө бир нече сүйлөм."
			),
			data: "12.03.2024",
		},
		{
			url: img2,
			title: t("Олимпиада по футболу", "Футбол олимпиадасы"),
			disc: t(
				"Пару предложений о событии, его значимости и участниках",
				"Иш-чара, анын мааниси жана катышуучулары жөнүндө бир нече сүйлөм."
			),
			data: "12.03.2024",
		},
		{
			url: img1,
			title: t("Международная олимпиада", "Эл аралык олимпиада"),
			disc: t(
				"Пару предложений о событии, его значимости и участниках",
				"Иш-чара, анын мааниси жана катышуучулары жөнүндө бир нече сүйлөм."
			),
			data: "12.03.2024",
		},
		{
			url: img4,
			title: t("Олимпиада по футболу", "Футбол олимпиадасы"),
			disc: t(
				"Пару предложений о событии, его значимости и участниках",
				"Иш-чара, анын мааниси жана катышуучулары жөнүндө бир нече сүйлөм."
			),
			data: "12.03.2024",
		},
	];

	const box2 = [{ url: img5 }, { url: img6 }, { url: img7 }, { url: img8 }];

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	return (
		<Box padding={{ md: "100px 0", base: "50px 0" }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Tabs
					p={{ md: "50px 30px", base: "50px 0" }}
					bg="#F8F5FE"
					borderRadius={20}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center">
					<TabList>
						<Tab
							color="#D4D4D4"
							fontWeight={700}
							sx={{
								_selected: {
									color: "black",
									borderBottom: "2px solid black",
								},
								_focus: { boxShadow: "none" },
							}}>
							{t("Истории", "Тарыхтар")}
						</Tab>

						<Tab
							color="#D4D4D4"
							fontWeight={700}
							sx={{
								_selected: {
									color: "black",
									borderBottom: "2px solid black",
								},
								_focus: { boxShadow: "none" },
							}}>
							{t("Награды", "Сыйлыктар")}
						</Tab>
					</TabList>

					<TabPanels>
						<TabPanel display="flex" flexDirection={{ md: "column", base: "column-reverse" }}>
							<Flex
								justifyContent="space-between"
								alignItems="center"
								position="relative"
								flexDirection="row-reverse"
								mt="20px">
								<Button
									onClick={() => sliderRef1.current?.slickNext()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									color="black"
									marginTop={{ md: 300, base: 0 }}
									position={{ md: "absolute", base: "relative" }}
									right={{ md:-10, base: 28 }}
									zIndex={1}>
									<FaChevronRight />
								</Button>
								<Button
									onClick={() => sliderRef1.current?.slickPrev()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									color="black"
									marginTop={{ md: 300, base: 0 }}
									left={{ md:-10, base: 28 }}
									position={{ md: "absolute", base: "relative" }}
									zIndex={1}>
									<FaChevronLeft />
								</Button>
							</Flex>
							<Box
								display="flex"
								justifyContent="space-between"
								gap={20}
								flexDirection="column">
								<Slider ref={sliderRef1} {...settings}>
									{box.map((el, index) => (
										<Box key={index} px={2}>
											<Box
												display="flex"
												flexDirection="column"
												gap={2}
												bg="white"
												borderRadius={10}
												p={4}>
												<Box
													borderRadius={10}
													objectFit="cover"
													overflow="hidden"
													w="100%"
													h={200}>
													<Image
														style={{
															objectFit: "cover",
															width: "100%",
															height: "100%",
														}}
														src={el.url}
														alt=""
													/>
												</Box>

												<Text fontSize={18} fontWeight={400}>
													{el.title}
												</Text>
												<Text color="grey" fontSize={16} fontWeight={400}>
													{el.disc}
												</Text>
												<Text color="grey" fontSize={16} fontWeight={400}>
													{el.data}
												</Text>
											</Box>
										</Box>
									))}
								</Slider>
							</Box>
						</TabPanel>

						<TabPanel display="flex" flexDirection={{ md: "column", base: "column-reverse" }}>
						<Flex
								justifyContent="space-between"
								alignItems="center"
								position="relative"
								flexDirection="row-reverse"
								mt="20px">
								<Button
									onClick={() => sliderRef2.current?.slickNext()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									color="black"
									marginTop={{ md: 300, base: 0 }}
									position={{ md: "absolute", base: "relative" }}
									right={{ md:-10, base: 28 }}
									zIndex={1}>
									<FaChevronRight />
								</Button>
								<Button
									onClick={() => sliderRef2.current?.slickPrev()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									color="black"
									marginTop={{ md: 300, base: 0 }}
									left={{ md:-10, base: 28 }}
									position={{ md: "absolute", base: "relative" }}
									zIndex={1}>
									<FaChevronLeft />
								</Button>
							</Flex>
							<Box
								display="flex"
								justifyContent="space-between"
								gap={20}
								flexDirection="column">
								<Slider ref={sliderRef2} {...settings}>
									{box2.map((el, index) => (
										<Box key={index} px={2}>
											<Box
												display="flex"
												flexDirection="column"
												gap={2}
												bg="white"
												borderRadius={10}
												p={4}>
												<Box
													borderRadius={10}
													objectFit="cover"
													overflow="hidden"
													w="100%"
													h={330}>
													<Image
														style={{
															objectFit: "cover",
															width: "100%",
															height: "100%",
														}}
														src={el.url}
														alt=""
													/>
												</Box>
											</Box>
										</Box>
									))}
								</Slider>
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</Box>
	);
};

export default Stories;
