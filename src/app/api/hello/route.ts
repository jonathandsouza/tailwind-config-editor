import postcss from 'postcss';
import tailwind from 'tailwindcss';

export async function GET(request: Request) {

	const css = `
				@tailwind base;
				@tailwind components;
				@tailwind utilities;
				`;

	const result = await postcss()
		.use(tailwind(
			{
				config: {
					content: [],

					// safelist: [
					// 	{
					// 		pattern: /.*/,
					// 	},
					// ],

					theme: {
						extend: {
							colors: {
							},
						},
					},
					plugins: [],
				}
			}
		))

		.process(css, {
			from: css,
		})

	return new Response(result.css);
}
