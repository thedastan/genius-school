"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useEffect, useRef } from "react";
 
import url1 from "@/assets/gallerea/gal10.jpg";
import url2 from "@/assets/gallerea/gal11.jpg";
import url3 from "@/assets/gallerea/gal13.jpg";
import url4 from "@/assets/gallerea/gal3.jpg";
import url5 from "@/assets/gallerea/gal4.jpg";
import Image from "next/image";


import url6 from "@/assets/gallerea/gal5.jpg";
import url7 from "@/assets/gallerea/gal6.jpg";
import url8 from "@/assets/gallerea/gal7.jpg";
import url9 from "@/assets/gallerea/gal8.jpg";
import url10 from "@/assets/gallerea/gal9.jpg";


const SuccessSlider3 = () => {
	const sliderRef = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	const settings = {
		dots: true,  // Отключаем точки
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,  // Отключаем стрелки
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
		<Box  >

				<Box display={{ md: "flex", base: "none " }}  justifyContent="space-between" position="relative">
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
				<Box display={{ md: "flex", base: "none" }} flexDirection="column" mt="50px">
					<Slider ref={sliderRef}  arrows={false}>
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
											src={url10}
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
											src={url6}
											alt="Image 3"
										/>
									</Box>
								</Flex>
								<Flex gap={7}>
									<Box w="400px" h="200px">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "10px",

											}}
											src={url8}
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
											src={url9}
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
										src={url1}
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
											src={url2}
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
											src={url3}
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
											src={url4}
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

        

				<Box w="100%" display={{ md: "none", base: "block" }} mt="50px">
				<Slider
					ref={sliderRef2}
					{...settings}
					appendDots={(dots) => (
						<Box display="flex" justifyContent="center" mt="10px">
							<Box w={40} position="absolute"   as="ul"  >
								{dots}
							</Box>
						</Box>
					)}>

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
								src={url8}
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
								src={url9}
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
								src={url10}
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
								src={url6}
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

				<Box  
				display={{ md: "none", base: "block" }}
				justifyContent="space-between"
				position="relative" h={20}>
				<Button
					onClick={() => sliderRef2.current?.slickPrev()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					ml="-140px"
					p={2}
					position="absolute"
					mt={8}
					zIndex={1}>
					<FaAngleLeft />
				</Button>
				<Button
					onClick={() => sliderRef2.current?.slickNext()}
					border="1px solid #D4D4D4"
					bg="white"
					color="black"
					p={2}
					mt={8}
					ml="100px"
					position="absolute"

					zIndex={1}>
					<FaAngleRight />
				</Button>
			</Box>
		</Box>
	);
};

export default SuccessSlider3;
