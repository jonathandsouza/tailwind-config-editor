"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";
import { TAILWIND_CONFIG_CATEGORIES } from "@/types/tailwind-configd";
import clsx from "clsx";

export const TailwindConfigSwitcher = () => {
	const store = useTailwindConfigurationStore();

	const configList = new Map([
		[TAILWIND_CONFIG_CATEGORIES.COLORS, "Colors"],
		[TAILWIND_CONFIG_CATEGORIES.FONT_SIZE, "Font Size"],
	]);

	return (
		<div className="tabs">
			{Array.from(configList).map(([key, value]) => (
				<a
					key={key}
					className={clsx(
						{
							"tab-active": store.activeConfig === key,
						},
						"tab tab-lifted"
					)}
					onClick={() => store.setActiveConfig(key)}
				>
					{value}
				</a>
			))}
		</div>
	);
};
