import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import logo from "@/assets/footer.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
import {
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	WHATSAPP_LINK,
} from "@/constants/admin";

const Footer = () => {
	const { t } = useLanguageStore();

	const links = [
		{
			name: t("Главная", "Башкы бет"),
			link: "#home",
		},
		{
			name: t("О школе", "Мектеп жөнүндө"),
			link: "#about",
		},
		{
			name: t("Филиалы", "Филиалдар"),
			link: "#branches",
		},
		{
			name: t("Руководство", "Башчылык"),
			link: "#branches", // Updated to a unique link
		},
		{
			name: t("Контакты", "Байланыштар"),
			link: "#delivery",
		},
	];
	return (
		<Box p="50px 0" bg="#1A1A1A" color="white">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex flexDirection="column" gap={10}>
					<Flex
						flexDirection={{ lg: "row", base: "column" }}
						alignItems="center"
						gap={{ lg: "200px", base: "30px" }}>
						<Flex
							alignItems="center"
							textAlign={{ lg: "start", base: "center" }}
							flexDirection={{ lg: "row", base: "column" }}
							gap={4}>
								<ScrollLink
								activeClass="active"
								to="#home"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}>
								 <Image src={logo} alt="img" />
							</ScrollLink>
							 
							<Text
								fontSize={{ lg: 22, base: 18 }}
								fontWeight={400}
								fontFamily="Unbounded">
								Общеобразовательная <br /> частная школа
							</Text>
						</Flex>

						<Flex gap={4}>
							<Link href={INSTAGRAM_LINK} target={"_blank"}>
								<Button
									p={2}
									border="solid 1px white"
									bg="#FFFFFF1A"
									fontSize={22}
									borderRadius={50}
									color="white">
									<AiFillInstagram />
								</Button>
							</Link>

							<Link href={FACEBOOK_LINK} target={"_blank"}>
								<Button
									p={2}
									border="solid 1px white"
									bg="#FFFFFF1A"
									fontSize={22}
									borderRadius={50}
									color="white">
									<FaFacebookSquare />
								</Button>
							</Link>

							<Link href={WHATSAPP_LINK} target={"_blank"}>
								<Button
									p={2}
									border="solid 1px white"
									bg="#FFFFFF1A"
									fontSize={22}
									borderRadius={50}
									color="white">
									<IoLogoWhatsapp />
								</Button>
							</Link>
						</Flex>
					</Flex>

					<Flex
						gap="20px"
						textAlign="center"
						justifyContent="space-between"
						flexDirection={{ lg: "row", base: "column" }}>
						<Text fontSize="12px" fontWeight={400} color="#FFFFFF">
							{t("Политика конфиденциальности","Политикалык конфиденциальносу")}
						</Text>
						<Flex flexDirection={{ lg: "row", base: "column" }} gap={4}>
							{links.map((item, index) => (
								<Text key={index} fontSize="14px">
									<ScrollLink
										activeClass="active"
										to={item.link}
										spy={true}
										smooth={true}
										offset={0}
										duration={700}>
										{item.name}
									</ScrollLink>
								</Text>
							))}
						</Flex>
						<Link href={"https://motionweb.kg/"} target="_blank">
							<Text fontSize="12px" fontWeight={400} color="#FFFFFF">
								{t("Разработал Motion Web LLC", "Motion Web LLC-ден жасалган")}
							</Text>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
