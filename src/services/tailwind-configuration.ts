import { create } from "zustand";
import defaultConfig from "tailwindcss/defaultConfig";
import { initialize } from "next/dist/server/lib/render-server";

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

const compileFonts = (fonts: any) =>
	Object.keys(fonts).map((key) => `tce-text-${key}`);

export const useTailwindConfigurationStore = create<{
	config: typeof defaultConfig.theme;
	styles: string;
	isInitialized: boolean;
	initialize: () => void;
	updateFonts: (fonts: any) => void;
}>((set, get) => ({
	config: defaultConfig.theme,

	styles: "",

	isInitialized: false,

	initialize: async function () {
		const state = get();

		if (state.isInitialized) return;

		const styles = await fetcher(
			{ fontSize: {} },
			compileFonts(defaultConfig.theme?.fontSize ?? [])
		);

		set({
			styles,
			isInitialized: true,
		});
	},

	async updateFonts(fonts) {
		const styles = await fetcher({ fontSize: fonts }, compileFonts(fonts));
		set((state) => ({
			config: {
				...state.config,
				fontSize: fonts,
			},
			styles,
		}));
	},
}));
