export const SWR_API_KEY = "/api/tailwind";

export enum TAILWIND_CONFIG_CATEGORIES {
	COLORS = "colors",
	FONT_SIZE = "font-size",
}

export interface ITailwindFontSizeConfig {
	[s: string]: string | string[];
}

export type FontSizes = Record<
	string,
	[
		string,
		Partial<{
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
			fontWeight: string | number;
		}>
	]
>;
