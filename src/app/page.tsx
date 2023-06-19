"use client";

import { FontEditor } from "@/components/font-editor/font-editor";
import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";

export default function Home() {
	const { initialize } = useTailwindConfigurationStore();

	initialize();

	return <FontEditor />;
}
