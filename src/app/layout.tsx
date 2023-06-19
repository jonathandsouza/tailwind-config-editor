import { TailwindConfigSwitcher } from "@/components/tailwind-config-switcher/tailwind-config-switcher";
import { CustomTailwindStyles } from "../components/custom-tailwind-styles/custom-tailwind-styles";
import { NavBar } from "../components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tailwind Configuration editor",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="dracula">
			<head>
				<CustomTailwindStyles />
			</head>

			<body className={inter.className}>
				<NavBar />

				<main className="container mt-5">
					<TailwindConfigSwitcher />
					{children}
				</main>
			</body>
		</html>
	);
}
