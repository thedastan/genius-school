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
import { taintObjectReference } from "next/dist/server/app-render/entry-base";
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
									{t("Занятия", "Lessons")}
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
									{t("Мероприятия", "Events")}
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
									{t("Интерьер", "Interior")}
								</Tab>
							</TabList>

							<Flex
								mt={10}
								justifyContent="center"
								alignItems="center"
								flexDirection={{ md: "row", base: "column" }}
								gap={2}>
								<Text
									color="black"
									fontFamily="Unbounded"
									fontSize={{ md: 56, base: 40 }}
									fontWeight={500}>
									{t("О нашей", "About the")}
								</Text>
								<Box
									textAlign="center"
									mt={{ md: "16px", base: "-15px" }}
									w={{ md: "235px", base: "175px" }}
									h={{ md: "60px", base: "45px" }}
									borderRadius={10}
									bg="#FF9100"
									transform="rotate(-2deg)">
									<Text
										mt={{ md: "-16px", base: "-10px" }}
										color="white"
										transform="rotate(2deg)"
										fontFamily="Unbounded"
										fontSize={{ md: 56, base: 40 }}
										fontWeight={500}>
										{t("школе", "School")}
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
