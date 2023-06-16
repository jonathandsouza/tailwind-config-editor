import Image from "next/image";
import { TailwindConfigEditor } from "./components/tailwind-config-editor/tailwind-config-editor";

export default function Home() {
	return (
		<div className="flex space-x-9">
			
			<div className="editor basis-1/2">
				<TailwindConfigEditor />
			</div>
			<div className="preview basis-1/2">preview...</div>
		</div>
	);
}
