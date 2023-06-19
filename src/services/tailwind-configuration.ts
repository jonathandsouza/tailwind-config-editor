import { FontSizes } from "@/types/tailwind-config";
import { create } from "zustand";
import defaultConfig from "tailwindcss/defaultConfig";
import { Config } from "tailwindcss";

const fetcher = (data: object) =>
	fetch("/api/tailwind", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.text());

export const useTailwindConfigurationStore = create<{
	activeConfig: Pick<Config, "theme">;
	fontSize: any;
	styles: string;
	setFontSize: (newFontSize: FontSizes) => void;
}>((set) => ({
	activeConfig: {},

	fontSize: defaultConfig.theme?.fontSize,

	styles: "",

	setFontSize: async (newFontSize: FontSizes) => {
		const styles = await fetcher(newFontSize);
		set((state) => ({ ...state, styles, fontSize: newFontSize }));
	},
}));
