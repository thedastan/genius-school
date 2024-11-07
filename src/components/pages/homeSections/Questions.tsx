 
"use client";
import React, { useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
	Icon,
	Text,
	Container,
	Flex,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { MdOutlineMinimize } from "react-icons/md";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { IoAdd } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";

const Questions = () => {
	const { t } = useLanguageStore();
	const accardion_map = [
		{
			title: t(
				"Какой режим обучения в школе?",
				"Мектепте кандай окуу режимдери бар?"
			),
			disc: t(
				"Школа работает по пятидневной системе, занятия проходят в одну смену, что удобно для родителей и учеников.",
				"Мектеп беш күндүк система боюнча иштейт, сабактар бир сменада өтөт, бул ата-энелер үчүн жана окуучулар үчүн ыңгайлуу."
			),
		},
		{
			title: t("Сколько учеников в классе?", "Бир класста канча окуучу бар?"),
			disc: t(
				"В каждом классе обучается не более 25 учеников, что позволяет уделять внимание каждому ребенку.",
				"Ар бир класста 25 окуучудан ашык эмес, бул ар бир балага жеке көңүл бурууга мүмкүнчүлүк берет."
			),
		},
		{
			title: t(
				"Какие дополнительные кружки доступны для детей?",
				"Балдар үчүн кандай кошумча кружоктор бар?"
			),
			disc: t(
				"Школа предлагает разнообразные кружки, включая рисование, музыку и спорт, чтобы развивать таланты детей.",
				"Мектеп балдардын таланттарын өнүктүрүү үчүн сүрөт тартуу, музыка жана спортту камтыган ар түрдүү кружокторду сунуштайт."
			),
		},
		{
			title: t(
				"Как организовано питание для учеников?",
				"Окуучулар үчүн тамактануу кандай уюштурулган?"
			),
			disc: t(
				"Питание организовано на базе школы, предлагаются здоровые и сбалансированные обеды для всех учеников.",
				"Тамактануу мектептин базасында уюштурулат, бардык окуучулар үчүн ден соолукка пайдалуу жана балансированный түштөнүү сунушталат."
			),
		},
		{
			title: t(
				"Необходимые документы для поступления в первый класс?",
				"Биринчи класска кабыл алуу үчүн кандай документтер керек?"
			),
			disc: t(
				"Для поступления необходимо предоставить свидетельство о рождении и медицинскую справку.",
				"Кабыл алуу үчүн туулгандыгы тууралуу күбөлүк жана медициналык маалыматты берүү керек."
			),
		},
	];

	// State to track which accordion items are open
	const [openAccordions, setOpenAccordions] = useState<boolean[]>(Array(accardion_map.length).fill(false));

	const toggleAccordion = (index: number) => {
		setOpenAccordions(prevState => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<Box w="100%" p={{ md: "100px 0", base: "50px 0" }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					textAlign="center"
					justifyContent="center"
					alignItems="center"
					 
					gap={2}>
					<Text
						color="black"
						fontFamily="Montserrat ,sans-serif"
						fontSize={{ md: 70, base: 32  }}
						fontWeight={500}>
						{t("Вопросы & Ответы", "Суроолор & Жообтор")}
					 
					</Text>
					 
				</Flex>
				<Flex flexDirection="column" mt="50px" gap={4}>
					{accardion_map.map((item, index) => (
						<Accordion
							display="flex"
							justifyContent="center"
							key={index}
							allowToggle>
							<AccordionItem
								w={{ md: 700, base: "100%" }}
								display="flex"
								justifyContent="space-between"
								minH={50}
								border={`solid 2px ${openAccordions[index] ? "#D5ED9F" : "#F2F5EB"}`}
								borderRadius={{ md: 20, base: 14 }}
								boxShadow={openAccordions[index] ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none"}>
								<Flex w="100%" flexDirection="column">
									<AccordionButton
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										p="15px 30px"
										_hover={{ bg: "none" }}
										onClick={() => toggleAccordion(index)}>
										<Flex
											alignItems="center"
											textAlign="start"
											minH="60px"
											w="100%">
											<Text fontSize={{ md: 20, base: 16 }} fontWeight={700}>
												{item.title}
											</Text>
										</Flex>
									</AccordionButton>

									<AccordionPanel
										p="0px 15px 30px 30px"
										fontSize={{ md: 16, base: 14 }}>
										{item.disc}
									</AccordionPanel>
								</Flex>
								<AccordionButton
									_hover={{ bg: "none" }}
									onClick={() => toggleAccordion(index)}
									display="flex"
									justifyContent="center"
									alignItems={openAccordions[index] ? { md: "center", base: "start" } : { md: "center", base: "center" }}
									p="15px 30px"
									w={10}>
									<Icon
										as={openAccordions[index] ? AiOutlineMinus : IoAdd}
										color="black"
										fontSize={30}
										fontWeight={200}
									/>
								</AccordionButton>
							</AccordionItem>
						</Accordion>
					))}
				</Flex>
			</Container>
		</Box>
	);
};

export default Questions;

