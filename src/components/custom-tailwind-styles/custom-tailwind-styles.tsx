"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";

export const CustomTailwindStyles = () => {
	const { styles } = useTailwindConfigurationStore();

	console.log(`!!!!! CustomTailwindStyles !!!!!`, styles);

	return <style>{styles}</style>;
};
