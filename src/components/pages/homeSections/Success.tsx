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
		<Box w="100%">
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					bg="#F2F5EB"
					p={{ md: "50px 0", base: "50px 0" }}
					borderRadius={20}>
					<Box>
						<Tabs
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							textAlign="center">
							<TabList
								w={{ md: 350, base: "100%" }}
								display="flex"
								justifyContent="center"
								alignItems="center"
								textAlign="center">
								<Tab
									fontWeight={700}
									sx={{
										_selected: {
											color: "#FF9100",
											borderBottom: "2px solid #FF9100",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Занятия", "Сабактар")}
								</Tab>
								<Tab
									fontWeight={700}
									sx={{
										_selected: {
											color: "#FF9100",
											borderBottom: "2px solid #FF9100",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Мероприятия", "Иш-чаралар")}
								</Tab>
								<Tab
									fontWeight={700}
									sx={{
										_selected: {
											color: "#FF9100",
											borderBottom: "2px solid #FF9100",
										},
										_focus: { boxShadow: "none" },
									}}>
									{t("Интерьер", "Интерьер")}
								</Tab>
							</TabList>

							<Flex
								textAlign="center"
								justifyContent="center"
								alignItems="center"
								 
								p="50px 0"
								flexDirection={{ md: "row", base: "column" }}
								gap={2}>
								<Text
									color="black"
									fontFamily="Unbounded"
									h={{ md: "69px", base: "100%" }}
									fontSize={{ md: 56, base: 40 }}
									fontWeight={500}>
									{t("Успех в", "Жетишкендиктер")}
								</Text>
								<Box
									mt={{ md: "16px", base: "-15px" }}
									// w={{ md: "380px", base: "270px" }}
									h={{ md: "69px", base: "100%" }}
									borderRadius={10}
									bg="#FF9100"
									transform="rotate(-2deg)">
									<Text
										mt={{ md: "-16px", base: "-10px" }}
										color="white"
										transform="rotate(2deg)"
										fontFamily="Unbounded"
										fontSize={{ md: 56, base: 40 }}
										fontWeight={500}
										p={1}>
										{t("каждом кадре", "Ар бир кадрда")}
									</Text>
								</Box>
							</Flex>

							<TabPanels>
								<TabPanel>
									<SuccessSlider1 />
								</TabPanel>
								<TabPanel>
									<SuccessSlider2 />
								</TabPanel>
								<TabPanel>
									<SuccessSlider3 />
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
