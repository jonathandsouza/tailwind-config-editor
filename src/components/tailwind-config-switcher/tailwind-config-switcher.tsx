"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";
import { EDITORS } from "@/types/tailwind-config";
import clsx from "clsx";

export const TailwindConfigSwitcher = () => {
	const store = useTailwindConfigurationStore();

	const configList = new Map([
		[EDITORS.COLORS, "Colors"],
		[EDITORS.FONT_SIZE, "Font Size"],
	]);

	return (
		<div className="tabs">
			{Array.from(configList).map(([key, value]) => (
				<a
					key={key}
					className={clsx(
						{
							"tab-active": store.activeEditor === key,
						},
						"tab tab-lifted"
					)}
					onClick={() => store.setActiveEditor(key)}
				>
					{value}
				</a>
			))}
		</div>
	);
};
