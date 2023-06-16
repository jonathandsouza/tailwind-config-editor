import postcss from "postcss";
import tailwind from "tailwindcss";
import cssnano from "cssnano";

export async function GET(request: Request) {
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
