import { TAILWIND_CONFIG_CATEGORIES } from "@/types/tailwind-configd";
import { create } from "zustand";

export const useTailwindConfigurationStore = create<{
	activeConfig: TAILWIND_CONFIG_CATEGORIES;
	setActiveConfig: (newConfig: TAILWIND_CONFIG_CATEGORIES) => void;
}>((set) => ({
	activeConfig: TAILWIND_CONFIG_CATEGORIES.COLORS,
	setActiveConfig: (newConfig) => set({ activeConfig: newConfig }),
}));
