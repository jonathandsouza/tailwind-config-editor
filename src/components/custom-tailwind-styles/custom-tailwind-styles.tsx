"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";

export const CustomTailwindStyles = () => {
	const styles = useTailwindConfigurationStore((store) => store.styles);

	console.log(`!!!!! CustomTa~ilwindStyles !!!!!`, styles);

	return <style>{styles}</style>;
};
