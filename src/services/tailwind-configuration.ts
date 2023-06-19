import {
	TAILWIND_CONFIG_CATEGORIES,
	FontSizes,
	SWR_API_KEY,
} from "@/types/tailwind-config";
import { create } from "zustand";

const fetcher = (data: object) =>
	fetch("/api/tailwind", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.text());

export const useTailwindConfigurationStore = create<{
	activeConfig: TAILWIND_CONFIG_CATEGORIES;
	fontSize: FontSizes;
	styles: string;
	setActiveConfig: (newConfig: TAILWIND_CONFIG_CATEGORIES) => void;
	setFontSize: (newFontSize: FontSizes) => void;
}>((set) => ({
	activeConfig: TAILWIND_CONFIG_CATEGORIES.COLORS,

	fontSize: {
		xs: ["0.75rem", { lineHeight: "1rem" }],
		sm: ["0.875rem", { lineHeight: "1.25rem" }],
		base: ["1rem", { lineHeight: "1.5rem" }],
		lg: ["1.125rem", { lineHeight: "1.75rem" }],
		xl: ["1.25rem", { lineHeight: "1.75rem" }],
		"2xl": ["1.5rem", { lineHeight: "2rem" }],
		"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
		"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
		"5xl": ["3rem", { lineHeight: "1" }],
		"6xl": ["3.75rem", { lineHeight: "1" }],
		"7xl": ["4.5rem", { lineHeight: "1" }],
		"8xl": ["6rem", { lineHeight: "1" }],
		"9xl": ["8rem", { lineHeight: "1" }],
	},

	styles: "",

	setActiveConfig: (newConfig) =>
		set((state) => ({ ...state, activeConfig: newConfig })),

	setFontSize: async (newFontSize: FontSizes) => {
		const styles = await fetcher(newFontSize);
		set((state) => ({ ...state, styles, fontSize: newFontSize }));
	},
}));
