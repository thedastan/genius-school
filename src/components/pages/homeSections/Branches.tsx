"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import twogis from "@/assets/2gis.png";
import phone from "@/assets/whatsapp.png";

import director from "@/assets/director.png";
import director2 from "@/assets/director2.png";
import director3 from "@/assets/director3.png";
import director4 from "@/assets/director4.png";
import director5 from "@/assets/director5.png";
import director6 from "@/assets/director6.png";
import director7 from "@/assets/director7.png";
import director8 from "@/assets/director8.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
import cardfon1 from "@/assets/cardfon1.png";
import cardfon2 from "@/assets/cardfon2.png";
import cardfon3 from "@/assets/cardfon3.png";
	
import {
	LOCATION,
	LOCATION2,
	LOCATION3,
	LOCATION4,
	PHONE_NUMBER,
	PHONE_NUMBER2,
	PHONE_NUMBER3,
	PHONE_NUMBER4,
	PHONE_NUMBER_FIXSET,
	WHATSAPP_LINK,
	WHATSAPP_LINK1,
	WHATSAPP_LINK2,
	WHATSAPP_LINK3,
	WHATSAPP_LINK4,
} from "@/constants/admin";

import { FaPhone } from "react-icons/fa";
import { useEffect } from "react";

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
			url: director,
			title: t("Директор", "Директор"),
			disc: t("Айтиева Кымбат Сайтбековна", "Айтиева Кымбат Сайтбековна"),
		},
		{
			url: director2,
			title: t("Академический директор", "Академиялык директор"),
			disc: t("Старокожева Анна Владимировна", "Старокожева Анна Владимировна"),
		},
		{
			url: director3,
			title: t("Замдиректора по ВР", "Билим берүү боюнча орун басар директор"),
			disc: t("Жээналиева Асель Мусаевна", "Жээналиева Асель Мусаевна"),
		},
	];

	const box2 = [
		{
			url: director,
			title: t("Директор", "Директор"),
			disc: t("Айтиева Кымбат Сайтбековна", "Айтиева Кымбат Сайтбековна"),
		},
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
			title: t("Замдиректора по ВР", "Билим берүү боюнча орун басар директор"),
			disc: t("Бекташова Элеонора Кыркбаевна", "Бекташова Элеонора Кыркбаевна"),
		},
	];

	const box3 = [
		{
			url: director6,
			title: t("Директор", "Директор"),
			disc: t("Никитенко Светлана Викторовна", "Никитенко Светлана Викторовна"),
		},
		{
			url: director7,
			title: t("Академический директор", "Академиялык директор"),
			disc: t(
				"Чынгышова Айнура Айтманбетовна",
				"Чынгышова Айнура Айтманбетовна"
			),
		},
	];

	const box4 = [
		{
			url: director8,
			title: t("Академический директор", "Академиялык директор"),
			disc: t("Кекер Лариса Анатольевна", "Кекер Лариса Анатольевна"),
		},
	];

	return (
		<Box id="#branches" w="100%" p="100px 0">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					textAlign="center"
					justifyContent="center"
					alignItems="center"
					p="50px 0"
					flexDirection={{ md: "row", base: "column" }}
					gap={2}>
					<Text
						color="black"
						fontFamily="Montserrat ,sans-serif"
						fontSize={{ md: 56, base: 40 }}
						fontWeight={500}>
						{t("Филиалы по", "Бишкектеги")}
					</Text>
					<Box
						mt={{ md: "16px", base: "-15px" }}
						// w={{ md: "380px", base: "270px" }}
						h={{ md: "69px", base: "100%" }}
						borderRadius={10}
						bg="#D5ED9F"
						transform="rotate(-2deg)">
						<Text
							mt={{ md: "-16px", base: "-10px" }}
							color="#00712D"
							transform="rotate(2deg)"
							fontFamily="Montserrat ,sans-serif"
							fontSize={{ md: 56, base: 40 }}
							fontWeight={500}
							p={1}>
							{t("Бишкеку", "Филиалдар")}
						</Text>
					</Box>
				</Flex>
				<Flex justifyContent="center" flexWrap="wrap" gap={5}>
					<Box
						backgroundImage={`url(${cardfon1.src})`}
						backgroundSize="cover"
						backgroundPosition="center"
						w={{ md: "380px", base: "100%" }}
						borderRadius={30}
						// bg="#2D7A73"
						p="18px 18px 10px 18px">
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="white"
										w="100%" // Keeps 100% width within parent Box
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
										<Text>{t("ул.Чуйкова 132А", "Чуйкова көчөсү 132А")}</Text>
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

						<Flex mt={4} flexDirection="column" gap={2}>
							{box.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="white"
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
							<Flex
								p="8px 0"
								justifyContent="space-between"
								alignItems="center">
								<Text
									fontSize={18}
									fontWeight={700}
									color="#00712D"
									display="flex"
									alignItems="center"
									justifyContent="center"
									w="38px"
									h="38px"
									borderRadius="50px"
									bg="white">
									1
								</Text>
								<Link href={WHATSAPP_LINK1} target={"_blank"}>
									<Text color="white">{PHONE_NUMBER}</Text>
								</Link>
							</Flex>
						</Flex>
					</Box>

					<Box
						backgroundImage={`url(${cardfon2.src})`}
						backgroundSize="cover"
						backgroundPosition="center"
						w={{ md: "380px", base: "100%" }}
						borderRadius={30}
						// bg="#B698CA"
						p="18px 18px 10px 18px">
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION2} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="white"
										w="100%" // Keeps 100% width within parent Box
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
										<Text>{t("ул.Чуйкова 132/2", "Чуйкова көчөсү 132/2")}</Text>
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
						<Flex mt={4} flexDirection="column" gap={2}>
							{box2.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="white"
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
							<Flex
								p="8px 0"
								justifyContent="space-between"
								alignItems="center">
								<Text
									fontSize={18}
									fontWeight={700}
									color="#00712D"
									display="flex"
									alignItems="center"
									justifyContent="center"
									w="38px"
									h="38px"
									borderRadius="50px"
									bg="white">
									1
								</Text>
								<Link href={WHATSAPP_LINK2} target={"_blank"}>
									<Text color="white">{PHONE_NUMBER2}</Text>
								</Link>
							</Flex>
						</Flex>
					</Box>

					<Box
						backgroundImage={`url(${cardfon3.src})`}
						backgroundSize="cover"
						backgroundPosition="center"
						w={{ md: "380px", base: "100%" }}
						borderRadius={30}
						// bg="#F0926C"
						p="18px 18px 10px 18px">
						<Flex
							alignItems="center"
							justifyContent="space-between"
							gap={4}
							width="100%">
							<Box width="calc(100% - 51px)">
								{" "}
								<Link href={LOCATION3} target={"_blank"}>
									<Flex
										alignItems="center"
										justifyContent="start"
										bg="white"
										w="100%" // Keeps 100% width within parent Box
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
											{t("ул.Ден Сяопина 126", "Дэн Сяопин көчөсү 126")}
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
						<Flex mt={4} flexDirection="column" gap={2}>
							{box3.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="white"
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
							<Flex
								p="8px 0"
								justifyContent="space-between"
								alignItems="center"
								mt="105px">
								<Text
									fontSize={18}
									fontWeight={700}
									color="#00712D"
									display="flex"
									alignItems="center"
									justifyContent="center"
									w="38px"
									h="38px"
									borderRadius="50px"
									bg="white">
									3
								</Text>
								<Link href={WHATSAPP_LINK3} target={"_blank"}>
									<Text color="white">{PHONE_NUMBER3}</Text>
								</Link>
							</Flex>
						</Flex>
					</Box>

					<Box
						w={{ md: "775px", base: "100%" }}
						borderRadius={30}
						bg="#F8F5FE"
						p="18px 18px 18px 18px">
						<Flex  gap={8} justifyContent="space-between">
							{box4.map((item, index) => (
								<Flex
									key={index}
									p={2}
									bg="white"
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
												bg="white"
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
													{t("ул.Байтик Баатыра 5К", "Байтик Баатыр көчөсү 5К.")}
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
								<Flex p="8px 0" alignItems="center" gap={6}>
									<Text
										fontSize={18}
										fontWeight={700}
										color="#00712D"
										display="flex"
										alignItems="center"
										justifyContent="center"
										w="38px"
										h="38px"
										borderRadius="50px"
										bg="white">
										4
									</Text>
									<Link href={WHATSAPP_LINK4} target={"_blank"}>
										<Text color="black">{PHONE_NUMBER4}</Text>
									</Link>
								</Flex>
							</Flex>
						</Flex>
					</Box>

					<Box
						w={{ md: "385px", base: "100%" }}
						borderRadius={30}
						bg="#F8F5FE"
						p="18px 18px 18px 18px">
						<Flex  gap={8} justifyContent="space-between">
							 

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
												bg="white"
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
													{t("ул.Чуйкова 132/6", "Чуйкова көчөсү 132/6")}
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
								<Flex p="8px 0" alignItems="center" gap={6}>
									<Text
										fontSize={18}
										fontWeight={700}
										color="#00712D"
										display="flex"
										alignItems="center"
										justifyContent="center"
										w="38px"
										h="38px"
										borderRadius="50px"
										bg="white">
										5
									</Text>
									<Link href={WHATSAPP_LINK3} target={"_blank"}>
										<Text color="black">{PHONE_NUMBER3}</Text>
									</Link>
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
