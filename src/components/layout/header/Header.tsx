"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/logo.png";
import { MdOutlineArrowOutward } from "react-icons/md";

import {
	Flex,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	Select,
	Container,
} from "@chakra-ui/react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Image from "next/image";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/constants/admin";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
	const { t, language, setLanguage } = useLanguageStore();

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
			link: "#branches",
		},
		{
			name: t("Контакты", "Байланыштар"),
			link: "#delivery",
		},
	];

	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const [selected, setSelected] = useState("RU");

	const [isMobile, setIsMobile] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value as "ru" | "ky";
		setLanguage(selectedLanguage);
	};
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setShowHeader(false);
			} else {
				setShowHeader(true);
			}
			setLastScrollY(currentScrollY);
		};

		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<Box
			position="fixed"
			top={showHeader ? 0 : "-80px"}
			left="0"
			right="0"
			height="80px"
			backgroundColor="white"
			transition="top 0.3s"
			zIndex="1000"
			display="flex"
			justifyContent="center"
			alignItems="center">
			<Container maxW={CONTAINER_WIDTH}>
				<Box>
					<Flex alignItems="center" justifyContent="space-between">
						<Box
							display={{ md: "none", base: "block" }}
							justifyContent="start"
							w="80%">
							<Select
								w={20}
								border="none"
								onChange={handleChangeLanguage}
								value={language}
								name=""
								id="">
								<option value="ru">🇰🇬</option>
								<option value="ky">🇷🇺</option>
							</Select>
						</Box>
						<Box>
							<Flex w="120%"  height={80} justifyContent="center" alignItems="center">
								<ScrollLink
									activeClass="active"
									to="#home"
									spy={true}
									smooth={true}
									offset={-100}
									duration={700}>
									<Box
										display={{ lg: "flex", base: "block" }}
										alignItems="center"
										gap={5}>
										<Image width={80} height={80} src={logo} alt="img" />
									</Box>
								</ScrollLink>
							</Flex>
						</Box>
						<Flex justifyContent="end" w="80%">
							{isMobile ? (
								<>
									<Button onClick={onOpen} background="white" fontSize={20}>
										<GiHamburgerMenu />
									</Button>

									<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
										<DrawerOverlay />
										<DrawerContent>
											<DrawerCloseButton />
											<DrawerHeader> </DrawerHeader>

											<DrawerBody>
												<Box display="flex" flexDirection="column" gap={2}>
													{links.map((item, index) => (
														<Button
															key={index}
															background="white"
															fontSize="14px"
															border="solid 1px #495B4FB2"
															borderRadius="50px"
															onClick={onClose}>
															<ScrollLink
																activeClass="active"
																to={item.link}
																spy={true}
																smooth={true}
																offset={0}
																duration={700}
																onClick={onClose}>
																{item.name}
															</ScrollLink>
														</Button>
													))}
												</Box>
												<Flex
													mt={6}
													flexDirection="column"
													gap={6}
													alignItems="center"
													justifyContent="center">
													<Select
														w={20}
														border="none"
														onChange={handleChangeLanguage}
														value={language}
														name=""
														id="">
														<option value="ky">🇰🇬</option>
														<option value="ru">🇷🇺</option>
													</Select>

													<Link href={WHATSAPP_LINK} target={"_blank"}>
														<Button
															fontFamily="Arial"
															display="flex"
															gap="10px"
															borderRadius="50px"
															p="20px 10px 20px 20px"
															fontSize={14}
															fontWeight={700}
															color="#00712D"
															border="solid 1px #00712D">
															{t("Записаться", "Катталуу")}
															<span
																style={{
																	background: "#00712D",
																	color: "white",
																	borderRadius: "50px",
																	padding: "5px",
																}}>
																<GoArrowUpRight />
															</span>
														</Button>
													</Link>
												</Flex>
											</DrawerBody>
										</DrawerContent>
									</Drawer>
								</>
							) : (
								<Flex gap="170px">
									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
										gap={4}>
										{links.map((item, index) => (
											<Button
												key={index}
												background="white"
												fontSize="14px"
												border="solid 1px #495B4FB2"
												borderRadius="50px">
												<ScrollLink
													activeClass="active"
													to={item.link}
													spy={true}
													smooth={true}
													offset={0}
													duration={700}>
													{item.name}
												</ScrollLink>
											</Button>
										))}
									</Box>
									<Flex gap={6} alignItems="center" justifyContent="center">
										<Select
											w={20}
											border="none"
											onChange={handleChangeLanguage}
											value={language}
											name=""
											id="">
											<option value="ru">🇰🇬</option>
											<option value="ky">🇷🇺</option>
										</Select>
										<Link href={WHATSAPP_LINK} target={"_blank"}>
											<Button
												fontFamily="Arial"
												display="flex"
												gap="10px"
												borderRadius="50px"
												p="20px 10px 20px 20px"
												fontSize={14}
												fontWeight={700}
												color="#00712D"
												border="solid 1px #00712D"
												textTransform="uppercase">
												{t("записаться", "катталуу")}
												<span
													style={{
														background: "#00712D",
														color: "white",
														borderRadius: "50px",
														padding: "5px",
													}}>
													<MdOutlineArrowOutward />
												</span>
											</Button>
										</Link>
									</Flex>
								</Flex>
							)}
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
