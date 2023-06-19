"use client";

import { FontEditor } from "@/components/font-editor/font-editor";
import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";
import { EDITORS } from "@/types/tailwind-config";

export default function Home() {
	const { initialize, activeEditor } = useTailwindConfigurationStore();

	initialize();

	return <>{activeEditor === EDITORS.FONT_SIZE && <FontEditor />}</>;
}
