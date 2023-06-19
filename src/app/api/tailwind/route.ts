import postcss from "postcss";
import tailwind from "tailwindcss";

export async function POST(request: any) {
	if (request.method !== "POST") {
		return new Response("Method not allowed", {
			status: 405,
			statusText: "Method not allowed",
		});
	}

	const body = await request.json();

	const css = `
				@tailwind base;
				@tailwind components;
				@tailwind utilities;
				`;

	const tailwindConfig = {
		config: {
			prefix: "tce-",
			content: [],
			safelist: ["tce-text-sm"],
			theme: {
				fontSize: body,
				extend: {
					colors: {
						primary: "#ff0000",
					},
				},
			},
			plugins: [],
		},
	};

	console.log("TESTING CONFIG CONFIG !!!!", tailwindConfig);

	const result = await postcss()
		.use(tailwind(tailwindConfig))

		.process(css, {
			from: css,
		});

	return new Response(result.css);
}
