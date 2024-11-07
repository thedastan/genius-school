"use client";
import { CONTAINER_WIDTH } from "@/config/_variables.config";
import {
	Box,
	Container,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React from "react";
import SuccessSlider2 from "./SuccessSlider2";
import SuccessSlider3 from "./SuccessSlider3";
import SuccessSlider1 from "./SuccessSlider1";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Success = () => {
	const { t } = useLanguageStore();
	return (
		<Box py={30} w="100%">
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					bg="#F2F5EB"
					p={{ md: "50px 0", base: "10px 0" }}
					borderRadius={20}>
					<Box>
						<Tabs
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
							p={4}>
							<TabList
								// w={{ md: 400, base: "100%" }}
								display="flex"
								justifyContent="center"
								alignItems="center"
								textAlign="center">
								<Tab
									fontWeight={700}
									color="#D4D4D4"
									fontSize={{ md: 16, base: 12 }}
									sx={{
										_selected: {
											color: "black",
											borderBottom: "2px solid black",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Занятия", "Сабактар")}
								</Tab>
								<Tab
									color="#D4D4D4"
									fontWeight={700}
									fontSize={{ md: 16, base: 12 }}
									sx={{
										_selected: {
											color: "black",
											borderBottom: "2px solid black",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Мероприятия", "Иш-чаралар")}
								</Tab>
								<Tab
									color="#D4D4D4"
									fontSize={{ md: 16, base: 12 }}
									fontWeight={700}
									sx={{
										_selected: {
											color: "black",
											borderBottom: "2px solid black",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Интерьер", "Интерьер")}
								</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<SuccessSlider1 key="slider1" />
								</TabPanel>
								<TabPanel>
									<SuccessSlider2 key="slider2" />
								</TabPanel>
								<TabPanel>
									<SuccessSlider3 key="slider3" />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Success;
