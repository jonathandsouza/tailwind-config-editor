import { create } from "zustand";
import defaultConfig from "tailwindcss/defaultConfig";
import { Config } from "tailwindcss";

const fetcher = (config: object, safeList: string[]) =>
	fetch("/api/tailwind", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			theme: {
				...config,
			},
			safeList,
		}),
	}).then((res) => res.text());

export const useTailwindConfigurationStore = create<{
	config: Config;
	styles: string;
	updateFonts: (fonts: any) => void;
}>((set) => ({
	config: defaultConfig,

	styles: "",

	async updateFonts(fonts) {
		const styles = await fetcher(
			{ fontSize: fonts },
			Object.keys(fonts).map((key) => `tce-text-${key}`)
		);
		set((state) => {
			if (state.config.theme) {
				state.config.theme.fontSize = fonts;
			}
			state.styles = styles as string;
			return state;
		});
	},
}));
