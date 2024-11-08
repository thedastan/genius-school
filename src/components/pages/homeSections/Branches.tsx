"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import twogis from "@/assets/2gis.png";
import phone from "@/assets/whatsapp.png";

import director2 from "@/assets/director2.png";
import director3 from "@/assets/director3.png";
import director4 from "@/assets/director4.png";
import director5 from "@/assets/director5.png";
import director6 from "@/assets/director6.png";
import director7 from "@/assets/director7.png";
import director8 from "@/assets/director8.png";
import director9 from "@/assets/director9.png";

import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";

import {
	FIFEILIAL,
	FOFILIAL,
	LOCATION,
	LOCATION2,
	LOCATION3,
	LOCATION4,
	LOCATION5,
	ONEFILIAL,
	THREEIFILIAL,
	TWOFILIAL,
	WHATSAPP_LINK,
} from "@/constants/admin";

import { useEffect } from "react";

import fon from "@/assets/fon2.png";

const Branches = () => {
	const { t } = useLanguageStore();

	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	const box = [
		{
			url: director2,
			title: t("Академический директор", "Академиялык директор"),
			disc: t("Старокожева Анна Владимировна", "Старокожева Анна Владимирова"),
		},
		{
			url: director3,
			title: t("Куратор воспитательной работы", "Тарбиялык иш боюнча куратор"),
			disc: t("Жээналиева Асель Мусаевна", "Жээналиева Асель Мусаева"),
		},
	];

	const box2 = [
		{
			url: director4,
			title: t("Академический директор", "Академиялык директор"),
			disc: t(
				"Анастасия Николаевна Борисовская",
				"Анастасия Николаевна Борисовская"
			),
		},
		{
			url: director5,
			title: t("Куратор воспитательной работы", "Тарбиялык иш боюнча куратор"),
			disc: t("Бекташова Элеонора Кыркбаевна", "Бекташова Элеонора Кыркбаева"),
		},
	];

	const box3 = [
		{
			url: director6,
			title: t("Директор", "Директор"),
			disc: t("Никитенко Светлана Викторовна", "Никитенко Светлана Викторова"),
		},
		{
			url: director7,
			title: t("Академический директор", "Академиялык директор"),
			disc: t(
				"Чынгышова Айнура Айтманбетовна",
				"Чынгышова Айнура Айтманбетова"
			),
		},
	];

	const box4 = [
		{
			url: director8,
			title: t("Академический директор", "Академиялык директор"),
			disc: t("Кекер Лариса Анатольевна", "Кекер Лариса Анатольева"),
		},
	];

	const box5 = [
		{
			url: director9,
			title: t("Академический директор", "Академиялык директор"),
			disc: t("Рубанова Анна Викторовна", "Рубанова Анна Викторова"),
		},
	];

	return (
		<Box id="#branches"
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
						fontFamily="Montserrat ,sans-serif"
						fontSize={{ md: 60, base: 32 }}
						fontWeight={500}>
						{t("Филиалы по Бишкеку", "Бишкектеги Филиалдар")}
					</Text>
				</Flex>
				<Flex justifyContent="center" flexWrap="wrap" gap={5}>
					<Box 
						backgroundSize="cover"
						backgroundPosition="center"
						w={{ md: "380px", base: "100%" }}
						h="100%"
						borderRadius={30}
						bg="#0D0D0D"
						p="18px 18px 10px 18px">
						<Flex flexDirection="column" gap={2}>
							<Flex
								// p="8px 0"
								justifyContent="space-between"
								alignItems="center">
								<Text fontSize={18} fontWeight={700} color="#FF9100">
									Филиал 1
								</Text>
								<Link href={`tel:${ONEFILIAL}`} target={"_blank"}>
									<Text
										fontSize={14}
										fontWeight={400}
										display="flex"
										alignItems="center"
										gap={2}
										color="grey">
										{ONEFILIAL} <HiArrowUpRight />
									</Text>
								</Link>
							</Flex>
							{box.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="#212121"
									borderRadius={10}
									alignItems="center"
									gap={4}>
									<Image
										style={{ borderRadius: "50%" }}
										width={80}
										height={80}
										src={item.url}
										alt="img"
									/>

									<Flex flexDirection="column" gap={1}>
										<Text color="grey" fontSize={14} fontWeight={400}>
											{item.title}
										</Text>
										<Text
											color="white"
											lineHeight="20px"
											fontSize={16}
											fontWeight={400}>
											{item.disc}
										</Text>
									</Flex>
								</Flex>
							))}
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							p="8px 0"
							mt={6}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="#212121"
										w="100%"
										p={2}
										gap={2}
										borderRadius="50px">
										<Image
											style={{ borderRadius: "50%" }}
											src={twogis}
											width={36}
											height={36}
											alt="img"
										/>
										<Text color="white">
											{t("ул.Чуйкова, 132А", "Чуйков көчөсү, 132А")}
										</Text>
									</Flex>
								</Link>
							</Box>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								width={51}
								height={51}
								p={2}
								bg="white"
								borderRadius="50%">
								<Link href={WHATSAPP_LINK} target={"_blank"}>
									<Image
										width={50}
										height={50}
										style={{ borderRadius: "50%" }}
										src={phone}
										alt="img"
									/>
								</Link>
							</Box>
						</Flex>
					</Box>

					<Box
						backgroundSize="cover"
						backgroundPosition="center"
						w={{ md: "380px", base: "100%" }}
						h="100%"
						borderRadius={30}
						bg="#0D0D0D"
						p="18px 18px 10px 18px">
						<Flex flexDirection="column" gap={2}>
							<Flex justifyContent="space-between" alignItems="center">
								<Text fontSize={18} fontWeight={700} color="#FF9100">
									Филиал 2
								</Text>
								<Link href={`tel:${TWOFILIAL}`} target={"_blank"}>
									<Text
										fontSize={14}
										fontWeight={400}
										display="flex"
										alignItems="center"
										gap={2}
										color="grey">
										{TWOFILIAL} <HiArrowUpRight />
									</Text>
								</Link>
							</Flex>
							{box2.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="#212121"
									color="white"
									borderRadius={10}
									alignItems="center"
									gap={4}>
									<Image
										style={{ borderRadius: "50%" }}
										width={80}
										height={80}
										src={item.url}
										alt="img"
									/>

									<Flex flexDirection="column" gap={1}>
										<Text color="grey" fontSize={14} fontWeight={400}>
											{item.title}
										</Text>
										<Text lineHeight="20px" fontSize={16} fontWeight={400}>
											{item.disc}
										</Text>
									</Flex>
								</Flex>
							))}
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							p="8px 0"
							mt={6}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION2} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="#212121"
										color="white"
										w="100%"
										p={2}
										gap={2}
										borderRadius="50px">
										<Image
											style={{ borderRadius: "50%" }}
											src={twogis}
											width={36}
											height={36}
											alt="img"
										/>
										<Text>
											{t("ул.Чуйкова, 132/2", "Чуйков көчөсү, 132/2")}
										</Text>
									</Flex>
								</Link>
							</Box>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								width={51}
								height={51}
								p={2}
								bg="white"
								borderRadius="50%">
								<Link href={WHATSAPP_LINK} target={"_blank"}>
									<Image
										width={50}
										height={50}
										style={{ borderRadius: "50%" }}
										src={phone}
										alt="img"
									/>
								</Link>
							</Box>
						</Flex>
					</Box>

					<Box
						w={{ md: "380px", base: "100%" }}
						h={{ md: "458px", base: "486px" }}
						borderRadius={30}
						bg="#0D0D0D"
						p="18px 18px 10px 18px"
						display="flex"
						flexDirection="column"
						justifyContent="space-between">
						<Flex flexDirection="column" gap={2}>
							<Flex justifyContent="space-between" alignItems="center">
								<Text fontSize={18} fontWeight={700} color="#FF9100">
									Филиал 3
								</Text>
								<Link href={`tel:${THREEIFILIAL}`} target={"_blank"}>
									<Text
										fontSize={14}
										fontWeight={400}
										display="flex"
										alignItems="center"
										gap={2}
										color="grey">
										{THREEIFILIAL} <HiArrowUpRight />
									</Text>
								</Link>
							</Flex>
							{box3.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="#212121"
									color="white"
									borderRadius={10}
									alignItems="center"
									gap={2}>
									<Image
										style={{ borderRadius: "50%" }}
										width={80}
										height={80}
										src={item.url}
										alt="img"
									/>
									<Flex flexDirection="column" gap={1}>
										<Text color="grey" fontSize={14} fontWeight={400}>
											{item.title}
										</Text>
										<Text lineHeight="20px" fontSize={16} fontWeight={400}>
											{item.disc}
										</Text>
									</Flex>
								</Flex>
							))}
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							p="8px 0"
							mt={6}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION3} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="#212121"
										w="100%"
										color="white"
										p={2}
										gap={2}
										borderRadius="50px">
										<Image
											style={{ borderRadius: "50%" }}
											src={twogis}
											width={36}
											height={36}
											alt="img"
										/>
										<Text>
											{t("ул.Дэн Сяопина, 126", "Дэн Сяопин көчөсү, 126")}
										</Text>
									</Flex>
								</Link>
							</Box>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								width={51}
								height={51}
								p={2}
								bg="white"
								borderRadius="50%">
								<Link href={WHATSAPP_LINK} target={"_blank"}>
									<Image
										width={50}
										height={50}
										style={{ borderRadius: "50%" }}
										src={phone}
										alt="img"
									/>
								</Link>
							</Box>
						</Flex>
					</Box>

					<Box
						w={{ md: "580px", base: "100%" }}
						h={{ md: "100%", base: "100%" }}
						borderRadius={30}
						bg="#0D0D0D"
						p="18px 18px 18px 18px">
						<Flex flexDirection="column" gap={4} justifyContent="space-between">
							<Box w="100%">
								<Flex
									alignItems="center"
									justifyContent="space-between"
									gap={6}>
									<Text fontSize={18} fontWeight={700} color="#FF9100">
										Филиал 4
									</Text>
									<Link href={`tel:${FOFILIAL}`} target={"_blank"}>
										<Text
											fontSize={14}
											fontWeight={400}
											display="flex"
											alignItems="center"
											gap={2}
											color="grey">
											{FOFILIAL} <HiArrowUpRight />
										</Text>
									</Link>
								</Flex>
							</Box>

							{box4.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="#212121"
									color="white"
									w={{ md: "100%", base: "100%" }}
									borderRadius={10}
									alignItems="center"
									gap={4}>
									<Image
										style={{ borderRadius: "50%" }}
										width={80}
										height={80}
										src={item.url}
										alt="img"
									/>
									<Flex flexDirection="column" gap={1}>
										<Text color="grey" fontSize={14} fontWeight={400}>
											{item.title}
										</Text>
										<Text lineHeight="20px" fontSize={16} fontWeight={400}>
											{item.disc}
										</Text>
									</Flex>
								</Flex>
							))}

							<Flex w="100%" flexDirection="column" gap={2}>
								<Flex
									alignItems="center"
									justifyContent="space-between"
									gap={4}
									width="100%">
									<Box width="calc(100% - 51px)">
										{" "}
										<Link href={LOCATION4} target={"_blank"}>
											<Flex
												alignItems="center"
												justifyContent="start"
												bg="#212121"
												w="100%"
												p={2}
												gap={2}
												borderRadius="50px">
												<Image
													style={{ borderRadius: "50%" }}
													src={twogis}
													width={36}
													height={36}
													alt="img"
												/>
												<Text color="white">
													{t(
														"ул.Байтик Баатыра, 5К",
														"Байтик Баатыр көчөсү, 5К."
													)}
												</Text>
											</Flex>
										</Link>
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										width={51}
										height={51}
										p={2}
										bg="white"
										borderRadius="50%">
										<Link href={WHATSAPP_LINK} target={"_blank"}>
											<Image
												width={50}
												height={50}
												style={{ borderRadius: "50%" }}
												src={phone}
												alt="img"
											/>
										</Link>
									</Box>
								</Flex>
							</Flex>
						</Flex>
					</Box>

					<Box
						w={{ md: "580px", base: "100%" }}
						borderRadius={30}
						h={{ md: "100%", base: "100%" }}
						bg="#0D0D0D"
						p="18px 18px 18px 18px">
						<Flex flexDirection="column" gap={4} justifyContent="space-between">
							<Box w="100%">
								<Flex
									alignItems="center"
									justifyContent="space-between"
									gap={6}>
									<Text fontSize={18} fontWeight={700} color="#FF9100">
										Филиал 5
									</Text>
									<Link href={`tel:${FIFEILIAL}`} target={"_blank"}>
										<Text
											fontSize={14}
											fontWeight={400}
											display="flex"
											alignItems="center"
											gap={2}
											color="grey">
											{FIFEILIAL} <HiArrowUpRight />
										</Text>
									</Link>
								</Flex>
							</Box>

							{box5.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="#212121"
									color="white"
									w={{ md: "100%", base: "100%" }}
									borderRadius={10}
									alignItems="center"
									gap={4}>
									<Image
										style={{ borderRadius: "50%" }}
										width={80}
										height={80}
										src={item.url}
										alt="img"
									/>
									<Flex flexDirection="column" gap={1}>
										<Text color="grey" fontSize={14} fontWeight={400}>
											{item.title}
										</Text>
										<Text lineHeight="20px" fontSize={16} fontWeight={400}>
											{item.disc}
										</Text>
									</Flex>
								</Flex>
							))}

							<Flex w="100%" flexDirection="column" gap={2}>
								<Flex
									alignItems="center"
									justifyContent="space-between"
									gap={4}
									width="100%">
									<Box width="calc(100% - 51px)">
										{" "}
										<Link href={LOCATION5} target={"_blank"}>
											<Flex
												alignItems="center"
												justifyContent="start"
												bg="#212121"
												w="100%"
												p={2}
												gap={2}
												borderRadius="50px">
												<Image
													style={{ borderRadius: "50%" }}
													src={twogis}
													width={36}
													height={36}
													alt="img"
												/>
												<Text color="white">
													{t("ул.Чуйкова, 132/6", "Чуйков көчөсү, 132/6")}
												</Text>
											</Flex>
										</Link>
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										width={51}
										height={51}
										p={2}
										bg="white"
										borderRadius="50%">
										<Link href={WHATSAPP_LINK} target={"_blank"}>
											<Image
												width={50}
												height={50}
												style={{ borderRadius: "50%" }}
												src={phone}
												alt="img"
											/>
										</Link>
									</Box>
								</Flex>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Branches;
