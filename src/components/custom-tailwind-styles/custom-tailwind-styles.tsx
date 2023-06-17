"use client";

import { useCustomTailwindStyles } from "@/services/cutom-tailwind-styles";

export const CustomTailwindStyles = () => {
	console.log(`component rendered`);

	const { data } = useCustomTailwindStyles();

	return <style>{data}</style>;
};
