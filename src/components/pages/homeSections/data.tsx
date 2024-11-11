"use client";

import director from "@/assets/director.png";
import director2 from "@/assets/director2.png";
import director3 from "@/assets/director3.png";
import director4 from "@/assets/director4.png";
import director5 from "@/assets/director5.png";
import director6 from "@/assets/director6.png";
import director7 from "@/assets/director7.png";
import director8 from "@/assets/director8.png";
import director9 from "@/assets/director9.png";

import { useLanguageStore } from "@/stores/useLanguageStore";

import {
	FIFEILIAL,
	FOFILIAL,
	LOCATION,
	LOCATION2,
	LOCATION3,
	LOCATION4,
	LOCATION5,
	ONEFILIAL,
	THREEIFILIAL,
	TWOFILIAL,
	WHATSAPP_LINK,
} from "@/constants/admin";

// const { t } = useLanguageStore();

export const getBranches = (t: any) => [
	{
		box: [
			 
			{
				url: director2,
				title: t("Академический директор", "Академиялык директор"),
				disc: t(
					"Старокожева Анна Владимировна",
					"Старокожева Анна Владимирова"
				),
			},
			{
				url: director3,
				title: t(
					"Куратор воспитательной работы",
					"Тарбиялык иш боюнча куратор"
				),
				disc: t("Жээналиева Асель Мусаевна", "Жээналиева Асель Мусаева"),
			},
		],
		box2: [
			{
				location: LOCATION,
				whatsapp: WHATSAPP_LINK,
				filial: ONEFILIAL,
				adress: t("ул.Чуйкова, 132А", "Чуйков көчөсү, 132А"),
			},
		],
	},
	{
		box: [
			 
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
				title: t(
					"Куратор воспитательной работы",
					"Тарбиялык иш боюнча куратор"
				),
				disc: t(
					"Бекташова Элеонора Кыркбаевна",
					"Бекташова Элеонора Кыркбаева"
				),
			},
		],
		box2: [
			{
				location: LOCATION2,
				whatsapp: WHATSAPP_LINK,
				filial: TWOFILIAL,
				adress: t("ул.Чуйкова, 132/2", "Чуйков көчөсү, 132/2"),
			},
		],
	},
	{
		box: [
			{
				url: director6,
				title: t("Директор", "Директор"),
				disc: t(
					"Никитенко Светлана Викторовна",
					"Никитенко Светлана Викторова"
				),
			},
			{
				url: director7,
				title: t("Академический директор", "Академиялык директор"),
				disc: t(
					"Чынгышова Айнура Айтманбетовна",
					"Чынгышова Айнура Айтманбетова"
				),
			},
		],
		box2: [
			{
				location: LOCATION3,
				whatsapp: WHATSAPP_LINK,
				filial: THREEIFILIAL,
				adress: t("ул.Дэн Сяопина, 126", "Дэн Сяопин көчөсү, 126"),
			},
		],
	},
 
	 
];

export const getBranches2 = (t: any) => [
 
	{
		box: [
			{
				url: director8,
				title: t("Академический директор", "Академиялык директор"),
				disc: t("Кекер Лариса Анатольевна", "Кекер Лариса Анатольева"),
			},
		],
		box2: [
			{
				location: LOCATION4,
				whatsapp: WHATSAPP_LINK,
				filial: FOFILIAL,
				adress: t("ул.Байтик Баатыра, 5К", "Байтик Баатыр көчөсү, 5К."),
			},
		],
	},
	{
		box: [
			{
				url: director9,
				title: t("Академический директор", "Академиялык директор"),
				disc: t("Рубанова Анна Викторовна", "Рубанова Анна Викторова"),
			},
		],
		box2: [
			{
				location: LOCATION5,
				whatsapp: WHATSAPP_LINK,
				filial: FIFEILIAL,
				adress: t("ул.Чуйкова, 132/6", "Чуйков көчөсү, 132/6"),
			},
		],
	},
];
