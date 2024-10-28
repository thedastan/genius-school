"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useEffect, useRef } from "react";

import { CONTAINER_WIDTH } from "@/config/_variables.config";
import url1 from "@/assets/gallerea/gal.jpg";
import url2 from "@/assets/gallerea/gal1.jpg";
import url3 from "@/assets/gallerea/gal2.jpg";
import url4 from "@/assets/gallerea/gal3.jpg";
import url5 from "@/assets/gallerea/gal4.jpg";

import Image from "next/image";

const SuccessSlider1 = () => {
	const sliderRef = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 1 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1 },
			},
		],
	};

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	return (
		<Box>
			<Box
				display={{ md: "flex", base: "none " }}
				justifyContent="space-between"
				position="relative">
				<Button
					onClick={() => sliderRef.current?.slickPrev()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					position="absolute"
					left="-10px"
					mt={250}
					ml={14}
					p={2}
					zIndex={1}>
					<FaAngleLeft />
				</Button>
				<Button
					onClick={() => sliderRef.current?.slickNext()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					position="absolute"
					right={14}
					mt={250}
					ml={-14}
					p={2}
					zIndex={1}>
					<FaAngleRight />
				</Button>
			</Box>
			<Box
				display={{ md: "flex", base: "none" }}
				flexDirection="column"
				mt="50px">
				<Slider ref={sliderRef} {...settings}>
					<Box w="100%">
						<Flex justifyContent="center" gap={4}>
							<Flex gap={4} flexDirection="column">
								<Flex gap={4}>
									<Box w="200px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url1}
											alt="Image 1"
										/>{" "}
									</Box>

									<Box w="400px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url2}
											alt="Image 3"
										/>
									</Box>
								</Flex>
								<Flex gap={4}>
									<Box w="400px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url3}
											alt="Image 3"
										/>
									</Box>
									<Box w="200px" h="200px">
										{" "}
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url4}
											alt="Image 1"
										/>{" "}
									</Box>
								</Flex>
							</Flex>
							<Flex>
								<Box w="400px" h="416px">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											borderRadius: "10px",
										}}
										src={url5}
										alt="Image 3"
									/>
								</Box>
							</Flex>
						</Flex>
					</Box>

					<Box w="100%">
						<Flex justifyContent="center" gap={4}>
							<Flex gap={4} flexDirection="column">
								<Flex gap={4}>
									<Box w="200px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url1}
											alt="Image 1"
										/>{" "}
									</Box>

									<Box w="400px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url2}
											alt="Image 3"
										/>
									</Box>
								</Flex>
								<Flex gap={4}>
									<Box w="400px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url3}
											alt="Image 3"
										/>
									</Box>
									<Box w="200px" h="200px">
										{" "}
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",
											}}
											src={url4}
											alt="Image 1"
										/>{" "}
									</Box>
								</Flex>
							</Flex>
							<Flex>
								<Box w="400px" h="416px">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											borderRadius: "10px",
										}}
										src={url5}
										alt="Image 3"
									/>
								</Box>
							</Flex>
						</Flex>
					</Box>
				</Slider>
			</Box>

			<Box
				display={{ md: "none", base: "block" }}
				justifyContent="space-between"
				position="relative">
				<Button
					onClick={() => sliderRef2.current?.slickPrev()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					position="absolute"
					left={0}
					mt={150}
					// ml={14}
					p={2}
					zIndex={1}>
					<FaAngleLeft />
				</Button>
				<Button
					onClick={() => sliderRef2.current?.slickNext()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					position="absolute"
					right={0}
					mt={150}
					// ml={-14}
					p={2}
					zIndex={1}>
					<FaAngleRight />
				</Button>
			</Box>

			<Box w="100%" display={{ md: "none", base: "block" }} mt="50px">
				<Slider ref={sliderRef2} {...settings}>
					 
						<Box w="100%" h={300}>
							<Image
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "10px",
								}}
								src={url1}
								alt="Image 1"
							/>
						</Box>

						<Box w="100%" h={300}>
							<Image
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "10px",
								}}
								src={url2}
								alt="Image 1"
							/>
						</Box>

						<Box w="100%" h={300}>
							<Image
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "10px",
								}}
								src={url3}
								alt="Image 1"
							/>
						</Box>

						<Box w="100%" h={300}>
							<Image
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "10px",
								}}
								src={url4}
								alt="Image 1"
							/>
						</Box>

						<Box w="100%" h={300}>
							<Image
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "10px",
								}}
								src={url5}
								alt="Image 1"
							/>
						</Box>
					 
				</Slider>
			</Box>
		</Box>
	);
};

export default SuccessSlider1;
