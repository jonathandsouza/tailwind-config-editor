import { NextApiRequest } from "next";
import postcss from "postcss";
import tailwind from "tailwindcss";

export async function POST(request: NextApiRequest) {
	console.log("TESTING NOW NOW !!!!", JSON.parse(request.body));

	const css = `
				@tailwind base;
				@tailwind components;
				@tailwind utilities;
				`;

	const result = await postcss()
		.use(
			tailwind({
				config: {
					prefix: "tce-",
					content: [],

					// safelist: [
					// 	{
					// 		pattern: /.*/,
					// 	},
					// ],

					theme: {
						extend: {
							colors: {},
						},
					},
					plugins: [],
				},
			})
		)

		// @TODO: find a way to make this work
		// .use(cssnano({}))
		.process(css, {
			from: css,
		});

	return new Response(result.css);
}
