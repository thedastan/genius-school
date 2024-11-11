"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
 
import fon from "@/assets/fon2.png";
import Link from "next/link";

import { useLanguageStore } from "@/stores/useLanguageStore";
import { useEffect } from "react";
import { getBranches, getBranches2 } from "./data";
import { WHATSAPP_LINK } from "@/constants/admin";

import twogis from "@/assets/2gis.png";
import phone from "@/assets/whatsapp.png";
import { GoArrowUpRight } from "react-icons/go";

const Branches = () => {
	const { t } = useLanguageStore();
	const branches = getBranches(t);
	const branches2 = getBranches2(t);

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);
 
return (
		<Box
			id="#branches"
			alignItems="center"
			justifyContent="center"
			w="100%"
			p="100px 0"
			bgImage={`url(${fon.src})`}
			bgSize="cover"
			bgPosition="center"
			bgRepeat="no-repeat">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					textAlign="center"
					justifyContent="center"
					alignItems="center"
					pb="50px"
					flexDirection={{ md: "row", base: "column" }}
					gap={2}>
					<Text
						color="white"
						fontFamily="Montserrat, sans-serif"
						fontSize={{ md: 60, base: 32 }}
						fontWeight={500}>
						{t("Филиалы по Бишкеку", "Бишкектеги Филиалдар")}
					</Text>
				</Flex>

				<Flex justifyContent="center" flexWrap="wrap" gap={8}>
					{branches.map((branch, index) => (
						<Box
							key={index}
							p={5}
							border="1px solid rgba(255, 255, 255, 0.3)"
							borderRadius="20px"
							w={{ base: "100%", md: "388px" }}
							h="100%"
							bg="rgba(0, 0, 0, 0.7)"
							color="white">
							<Flex
								alignItems="center"
								pb={4}
								w="100%"
								justifyContent="space-between">
								<Text fontSize={20} fontWeight={600} color="#FF9100">
									Филиал {index + 1}
								</Text>
 
								{branch.box2.map((el, idx) => (
									<Link key={index} href={`tel:${el.filial}`} target={"_blank"}>
										<Text
											display="flex"
											fontSize={14}
											fontWeight={400}
											color="rgb(146, 146, 146)"
											key={idx}>
											{el.filial}{" "}
											<span style={{ fontSize: "20px", marginLeft: "4px" }}>
												<GoArrowUpRight />
											</span>
										</Text>
									</Link>
								))}
							</Flex>

							<Stack spacing={2} align="start">
								{branch.box.map((el, idx) => (
									<Box key={idx} textAlign="start">
										<Flex bg="#212121" w="100%" p={4} borderRadius={10} gap={3}>
											{el.url && (
												<Image
													style={{ borderRadius: "50%" }}
													src={el.url}
													alt="branch image"
													width={80}
													height={80}
												/>
											)}
											<Flex
												flexDirection="column"
												justifyContent="space-around">
												<Text
													fontSize={13}
													fontWeight={400}
													color="rgb(146, 146, 146)">
													{el.title}
												</Text>
												<Text
													fontSize={16}
													fontWeight={400}
													lineHeight="19px"
													w={{ md: "90%", base: "100%" }}>
													{el.disc}
												</Text>
											</Flex>
										</Flex>
									</Box>
								))}
							</Stack>
							<Flex mt={4} w="100%" justifyContent="space-between">
								{branch.box2.map((el, idx) => (
									<>
										{el.location && (
											<Link key={index} href={el.location} target={"_blank"}>
												<Button
													display="flex"
													justifyContent="start"
													gap={2}
													fontSize={{ md: 18, base: 15 }}
													fontWeight={400}
													bg="#212121"
													color="white"
													p={2}
													h="58px"
													w={{ md: "280px", base: "245px" }}
													_hover="none"
													borderRadius={50}>
													<Image
														width={38}
														height={38}
														style={{ borderRadius: "50%" }}
														src={twogis}
														alt="WhatsApp"
													/>
													{el.adress}
												</Button>
											</Link>
										)}
									</>
								))}

								<Link href={WHATSAPP_LINK} target={"_blank"}>
									<Flex
										borderRadius="50%"
										justifyContent="center"
										alignItems="center"
										w="58px"
										h="58px"
										bg="white">
										<Image
											width={40}
											height={40}
											style={{ borderRadius: "50%" }}
											src={phone}
											alt="WhatsApp"
										/>
									</Flex>
								</Link>
							</Flex>
						</Box>
					))}

					{branches2.map((branch, index) => (
						<Box
							key={index}
							p={5}
							border="1px solid rgba(255, 255, 255, 0.3)"
							borderRadius="20px"
							w={{ base: "100%", md: "598px" }}
							h="100%"
							bg="rgba(0, 0, 0, 0.7)"
							color="white">
							<Flex
								alignItems="center"
								pb={4}
								w="100%"
								justifyContent="space-between">
								<Text fontSize={20} fontWeight={600} color="#FF9100">
									Филиал {index + 4}
								</Text>

								{branch.box2.map((el, idx) => (
									<Link key={idx} href={`tel:${el.filial}`} target={"_blank"}>
										<Text
											display="flex"
											fontSize={14}
											fontWeight={400}
											color="rgb(146, 146, 146)"
										 >
											{el.filial}{" "}
											<span style={{ fontSize: "20px", marginLeft: "4px" }}>
												<GoArrowUpRight />
											</span>
										</Text>
									</Link>
								))}
							</Flex>

							<Stack   spacing={2} align="start">
								{branch.box.map((el, idx) => (
									<Box w="100%" key={idx} textAlign="start">
										<Flex bg="#212121" w="100%" p={4} borderRadius={10} gap={3}>
											{el.url && (
												<Image
													style={{ borderRadius: "50%" }}
													src={el.url}
													alt="branch image"
													width={80}
													height={80}
												/>
											)}
											<Flex
												flexDirection="column"
												justifyContent="space-around">
												<Text
													fontSize={13}
													fontWeight={400}
													color="rgb(146, 146, 146)">
													{el.title}
												</Text>
												<Text
													fontSize={16}
													fontWeight={400}
													lineHeight="19px"
													w="100%">
													{el.disc}
												</Text>
											</Flex>
										</Flex>
									</Box>
								))}
							</Stack>
							<Flex mt={4} w="100%" justifyContent="space-between">
								{branch.box2.map((el, idx) => (
									<>
										{el.location && (
											<Link href={el.location} target={"_blank"}>
												<Box
													display="flex"
													justifyContent="start"
													alignItems="center"
													gap={2}
													fontSize={{ md: 18, base: 15 }}
													fontWeight={400}
													bg="#212121"
													color="white"
													p={2}
													h="58px"
													w={{ md: "480px", base: "245px" }}
													_hover="none"
													borderRadius={50}>
													<Image
														width={38}
														height={38}
														style={{ borderRadius: "50%" }}
														src={twogis}
														alt="WhatsApp"
													/>
													 <Text textAlign="start" w={{ md: "100%", base: "90%" }}>
													 {el.adress}
													 </Text>
												</Box>
											</Link>
										)}
									</>
								))}

								<Link href={WHATSAPP_LINK} target={"_blank"}>
									<Flex
										borderRadius="50%"
										justifyContent="center"
										alignItems="center"
										w="58px"
										h="58px"
										bg="white">
										<Image
											width={40}
											height={40}
											style={{ borderRadius: "50%" }}
											src={phone}
											alt="WhatsApp"
										/>
									</Flex>
								</Link>
							</Flex>
						</Box>
					))}
				</Flex>
			</Container>
		</Box>
	);
};

export default Branches;
