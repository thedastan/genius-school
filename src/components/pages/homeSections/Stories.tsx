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

import img1 from "@/assets/stor1.png";
import img2 from "@/assets/stor2.png";
import img3 from "@/assets/stor3.png";
import img4 from "@/assets/stor4.png";

import img5 from "@/assets/stor5.png";
import img6 from "@/assets/stor6.png";
import img7 from "@/assets/stor7.png";
import img8 from "@/assets/stor8.png";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Stories = () => {
	const { t } = useLanguageStore();
	const sliderRef1 = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	const settings = {
		dots: true,
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
			url: img1,
			title: t("Международная олимпиада", "International Olympiad"),
			disc: t("Пару предложений о событии, его значимости и участниках", "A few sentences about the event, its significance, and participants."),
			data: "12.03.2024",
		},
		{
			url: img2,
			title: t("Олимпиада по футболу", "Football Olympiad"),
			disc: t("Пару предложений о событии, его значимости и участниках", "A few sentences about the event, its significance, and participants."),
			data: "12.03.2024",
		},
		{
			url: img3,
			title: t("Международная олимпиада", "International Olympiad"),
			disc: t("Пару предложений о событии, его значимости и участниках", "A few sentences about the event, its significance, and participants."),
			data: "12.03.2024",
		},
		{
			url: img4,
			title: t("Олимпиада по футболу", "Football Olympiad"),
			disc: t("Пару предложений о событии, его значимости и участниках", "A few sentences about the event, its significance, and participants."),
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
		<Box bg="#F8F5FE" padding="100px 0">
			<Container maxW={CONTAINER_WIDTH}>
				<Tabs
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center">
					<TabList>
						<Tab
							fontWeight={700}
							sx={{
								_selected: {
									color: "#FF9100",
									borderBottom: "2px solid #FF9100",
								},
								_focus: { boxShadow: "none" },
							}}>
							{t("Истории", "Stories")}
						</Tab>
						<Tab
							fontWeight={700}
							sx={{
								_selected: {
									color: "#FF9100",
									borderBottom: "2px solid #FF9100",
								},
								_focus: { boxShadow: "none" },
							}}>
							{t("Награды", "Awards")}
						</Tab>
					</TabList>

					<Flex
						textAlign="center"
						justifyContent="center"
						alignItems="center"
						p="30px 0"
						flexDirection={{ md: "row", base: "column" }}
						gap={2}>
						<Text
							color="black"
							fontFamily="Unbounded"
							fontSize={{ md: 56, base: 40 }}
							fontWeight={500}>
								{t("Истории", "Stories")}
						</Text>
						<Box
							mt={{ md: "16px", base: "-15px" }}
							w={{ md: "360px", base: "270px" }}
							h={{ md: "60px", base: "45px" }}
							borderRadius={10}
							// p={1}
							bg="#FF9100"
							transform="rotate(-2deg)">
							<Text
								mt={{ md: "-16px", base: "-10px" }}
								color="white"
								transform="rotate(2deg)"
								fontFamily="Unbounded"
								fontSize={{ md: 56, base: 40 }}
								fontWeight={500}
								p={1}>
									{t("Награды", "Awards")}
							</Text>
						</Box>
					</Flex>

					<TabPanels>
						<TabPanel>
							<Flex
								justifyContent="flex-end"
								alignItems="center"
								position="relative"
								mt="30px">
								<Button
									onClick={() => sliderRef1.current?.slickNext()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									color="black"
									marginTop={300}
									position="absolute"
									zIndex={1}>
									<FaAngleRight />
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
												<Image src={el.url} alt="" />
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

						<TabPanel>
							<Flex
								justifyContent="flex-end"
								alignItems="center"
								position="relative"
								mt="30px">
								<Button
									onClick={() => sliderRef2.current?.slickNext()}
									border="solid 1px #D4D4D4"
									padding="8px 12px"
									bg="white"
									marginTop={300}
									position="absolute"
									color="black"
									zIndex={1}>
									<FaAngleRight />
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
												<Image src={el.url} alt="" />
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
