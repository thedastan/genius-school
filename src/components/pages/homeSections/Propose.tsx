"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import img from "../../../assets/Frame.png";
import img2 from "../../../assets/Frame (1).png";
import img3 from "../../../assets/Frame (2).png";

import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Propose = () => {
	const { t } = useLanguageStore();
	return (
		<Box id="#what" w="100%" p="100px 0" bg="#F2F5EB">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent="center"
					alignItems="center"
					textAlign="center"
					flexDirection="column">
					<Text
						w="70%"
						color="black"
						fontFamily="Montserrat ,sans-serif"
						fontSize={{ md: 56, base: 32 }}
						fontWeight={500}>
						{t("Что предлагает ", "Genius School ")}
						<Box
							as="span"
							backgroundColor="#D5ED9F"
							transform="rotate(-2deg)"
							fontSize={{ md: 56, base: 30 }}
							borderRadius={5}
							color="#00712D"
							padding="1px"
							display="inline-block"
							marginLeft={{ md: "10px", base: "0px" }}
							p={1}>
							<Text transform="rotate(2deg)">
								{t("Genius School ", "Эмнени сунуштайт")}
							</Text>
						</Box>
					</Text>
				</Flex>
				<Flex mt="100px" flexWrap="wrap" justifyContent="center" gap={20}>
					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#D3D3D3"
							borderRadius={10}
							transform="rotate(3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F5F7F1", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(-3deg)"
							// mt={-210}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t("Школа полного дня", "Толук күндүк мектеп")}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Ваш ребенок находится под присмотром и обучается с утра до вечера, что удобно для работающих родителей.",
									"Сиздин балдарыңыз көзөмөлдө болуп, таңкы сааттан кечкиге чейин окуйт, бул жумушчу ата-энелер үчүн ыңгайлуу."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img2}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#F8C376"
							borderRadius={10}
							transform="rotate(3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F8C376", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(-3deg)"
							// mt={-210}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t(
									"Небольшие классы — до 16 учеников",
									"Кичинекей класстар — 16 окуучуга чейин."
								)}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Учителя могут уделить внимание каждому ребенку благодаря малочисленным классам.",
									"Устаттар кичинекей класстар аркылуу ар бир балага көңүл бура алышат."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#D3D3D3"
							borderRadius={10}
							transform="rotate(-3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F5F7F1", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(3deg)"
							// mt={-210}
							ml="-4px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t(
									"Сбалансированное 3-разовое питание",
									"Үч маал тең салмактуу тамактануу"
								)}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"	В течение дня дети получают полноценное питание, что помогает поддерживать их энергию и здоровье.",
									"Күн ичинде балдар толук тамактануу алышат, бул алардын энергиясын жана ден соолугун колдоого жардам берет."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img2}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#F8C376"
							borderRadius={10}
							transform="rotate(-3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F8C376", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(3deg)"
							// mt={-210}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t("Изучение 5 языков", "5 тилди үйрөнүү")}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Мы обучаем английскому, русскому, китайскому, кыргызскому и программированию, готовя учеников к международному будущему.",
									"English, орус, кытай, кыргыз тилдерин жана программалоону үйрөнүү, студенттерди эл аралык келечекке даярдоо."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#D3D3D3"
							borderRadius={10}
							transform="rotate(3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F5F7F1", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(-3deg)"
							// mt={-210}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t(
									"Выполнение домашних заданий в школе",
									"Мектепте үй тапшырмаларын аткаруу"
								)}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Домашние задания выполняются под присмотром учителей, что освобождает время для семьи по вечерам.",
									"Үй тапшырмалары устаттардын көзөмөлүндө аткарыла, бул кечки убакытты үй-бүлө үчүн бошотот."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img3}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#D3D3D3"
							borderRadius={10}
							transform="rotate(3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F5F7F1", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(-3deg)"
							// mt={-210}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t("5 филиалов по всему Бишкеку", "Бишкектеги 5 филиал")}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Удобное расположение филиалов по городу позволяет легко выбрать школу рядом с домом.",
									"Шаардагы филиалдардын ыңгайлуу жайгашуусу, үйдүн жанына жакын мектепти оңой тандоого мүмкүндүк берет."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
					<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img2}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#F8C376"
							borderRadius={10}
							transform="rotate(-3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F8C376", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(3deg)"
							// mt={{ md: -210, base: -230 }}
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t("Трансфер с дома на школу со школы домой", "Үйдөн мектепке, мектептен үйгө жеткирүү кызматы")}
							</Text>
							<Text color="#5f5f5f"  fontSize={16}>
								{t(
									"Мы предлагаем удобный и безопасный трансфер для учеников, обеспечивая перевозку с дома в школу и обратно.",
									"Биз окуучулар үчүн ыңгайлуу жана коопсуз трансферди сунуштайбыз, үйдөн мектепке жана кайра алып барууну камсыздайбыз."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>

					<Box p={2} role="group">
						<Image
							style={{
								marginLeft: "30px",
								position: "absolute",
								marginTop: "-30px",
								zIndex: "10",
							}}
							src={img}
							alt="img"
						/>
						<Box
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="#D3D3D3"
							borderRadius={10}
							transform="rotate(3deg)"
							transition="0.2s"
							_groupHover={{ bg: "White", transition: "0.2s" }}> 

						<Flex
							flexDirection="column"
							gap={2}
							w={{ md: 340, base: "100%" }}
							minH={200}
							bg="white"
							transition="0.2s"
							_groupHover={{ bg: "#F5F7F1", transition: "0.2s" }}
							borderRadius={10}
							transform="rotate(-3deg)"
							ml="6px"
							p={5}>
							<Text fontSize={22} fontWeight={700}>
								{t(
									"Кружки",
									"Кружоктор"
								)}
							</Text>
							<Text color="#5f5f5f" fontSize={16}>
								{t(
									"Мы предлагаем широкий выбор кружков, направленных на развитие талантов и интересов наших учеников.",
									"Биз окуучуларыбыздын таланттары менен кызыгууларын өнүктүрүүгө багытталган ар түрдүү ийримдерди сунуштайбыз."
								)}
							</Text>
						</Flex>
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Propose;
