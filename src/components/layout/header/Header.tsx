"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/header.png";
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

const Header = () => {
	const { t, language, setLanguage } = useLanguageStore();

	const links = [
		{
			name: t("Главная", "Home"),
			link: "#home",
		},
		{
			name: t("О школе", "About the School"),
			link: "#about",
		},
		{
			name: t("Филиалы", "Branches"),
			link: "#branches",
		},
		{
			name: t("Руководство", "Leadership"),
			link: "#branches",  
		},
		{
			name: t("Контакты", "Contacts"),
			link: "#delivery",
		},
	];

	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const [isMobile, setIsMobile] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();
	 
	const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value as "ru" | "en";
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
						<Box>
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
									<Image src={logo} alt="" />
								</Box>
							</ScrollLink>
						</Box>
						<Box>
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
														<option value="en">en</option>
														<option value="ru">ru</option>
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
														color="#00712D">
														{t("Записаться", "Sign up")}
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
											<option value="en">en</option>
											<option value="ru">ru</option>
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
											color="#00712D">
											{t("Записаться", "Sign up")}
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
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
