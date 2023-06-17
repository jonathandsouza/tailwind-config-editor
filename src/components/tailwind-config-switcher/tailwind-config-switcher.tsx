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
		<>
			<div className="dropdown dropdown-bottom">
				<label tabIndex={0} className="btn m-1">
					{configList.get(store.activeConfig)}
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					{Array.from(configList).map(([key, value]) => (
						<li
							key={key}
							className={clsx({
								active: store.activeConfig === key,
							})}
							onClick={() => store.setActiveConfig(key)}
						>
							<a>{value}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
