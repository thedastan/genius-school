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

const Questions = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useLanguageStore();
	const accardion_map = [
		{
			title: t("Какой режим обучения в школе?", "What is the school schedule?"),
			disc: t("Школа работает по пятидневной системе, занятия проходят в одну смену, что удобно для родителей и учеников.", "The school operates on a five-day system, with classes held in one shift, which is convenient for parents and students."),
		},
		{
			title: t("Сколько учеников в классе?", "How many students are there in a class?"),
			disc: t("В каждом классе обучается не более 25 учеников, что позволяет уделять внимание каждому ребенку.", "Each class has no more than 25 students, allowing for individual attention to each child."),
		},
		{
			title: t("Какие дополнительные кружки доступны для детей?", "What extracurricular activities are available for children?"),
			disc: t("Школа предлагает разнообразные кружки, включая рисование, музыку и спорт, чтобы развивать таланты детей.", "The school offers a variety of clubs, including art, music, and sports, to develop children's talents."),
		},
		{
			title: t("Как организовано питание для учеников?", "How is the meal service organized for students?"),
			disc: t("Питание организовано на базе школы, предлагаются здоровые и сбалансированные обеды для всех учеников.", "Meals are organized on-site, providing healthy and balanced lunches for all students."),
		},
		{
			title: t("Необходимые документы для поступления в первый класс?", "What documents are required for enrollment in the first grade?"),
			disc: t("Для поступления необходимо предоставить свидетельство о рождении и медицинскую справку.", "For enrollment, you need to provide a birth certificate and a medical certificate."),
		},
		
	];

	return (
		<Box w="100%" p="100px 0">
			<Container maxW={CONTAINER_WIDTH}>
				  <Flex textAlign="center" justifyContent="center" alignItems="center" flexDirection={{ md: "row", base: "column" }} gap={2}>
					<Text
						color="black"
						fontFamily="Unbounded"
						fontSize={{ md: 56, base: 40 }}
						fontWeight={500}>
						{t("Вопросы", "Questions")}
					</Text>
					<Box
						mt={{ md: "16px", base: "-15px" }}
						w={{ md: "380px", base: "300px" }}
						h={{ md: "60px", base: "45px" }}
						borderRadius={10}
						bg="#D5ED9F"
						transform="rotate(-2deg)">
						<Text
							mt={{ md: "-16px", base: "-10px" }}
							color="#00712D"
							p={1}
							transform="rotate(2deg)"
							fontFamily="Unbounded"
							fontSize={{ md: 56, base: 40 }}
							fontWeight={500}>
							{t("& Ответы", "& Answers")}
						</Text>
					</Box>
				</Flex> 
				<Flex flexDirection="column" mt="50px" gap={4}>
					{accardion_map.map((item, index) => {
						 

						const toggleAccordion = () => {
							setIsOpen(!isOpen);
						};

						return (
							<Accordion display="flex" justifyContent="center" key={index} allowToggle>
								<AccordionItem
									w={{ md: 700, base: "100%" }}
									minH={50}
									border={`solid 2px ${isOpen ? "#D5ED9F" : "#F2F5EB"}`}
									borderRadius={{ md: 20, base: 6 }}
									// _active={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
									boxShadow={` ${isOpen ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  : "#red"}`}
									>
									<AccordionButton
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										onClick={toggleAccordion}>
										<Flex alignItems="center" textAlign="start" minH="60px" w="100%">
											<Text fontSize={{ md:20, base: 18 }} fontWeight={700}>{item.title}</Text>
										</Flex>
										<Icon
											as={isOpen ? MdOutlineMinimize : IoMdAdd}
											color="black"
										/>
									</AccordionButton>
									<AccordionPanel fontSize={{ md:16, base: 14 }}>{item.disc}</AccordionPanel>
								</AccordionItem>
							</Accordion>
						);
					})}
				</Flex>
			</Container>
		</Box>
	);
};

export default Questions;
