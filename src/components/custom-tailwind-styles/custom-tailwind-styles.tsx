"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";

export const CustomTailwindStyles = () => {
	console.log(`component rendered`);

	const { styles } = useTailwindConfigurationStore();

	return <style>{styles}</style>;
};
