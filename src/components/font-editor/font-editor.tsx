"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";
import { useForm } from "react-hook-form";
import { EditorLayout } from "../editor-layout/editor-layout";

export const FontEditor = () => {
	const store = useTailwindConfigurationStore();

	const { register, handleSubmit } = useForm();

	const onSubmit = (form: any) => {
		console.log(form);

		const fontSizes: any = {};

		for (let key in form) {
			if (key.includes("size")) {
				fontSizes[key.replace("-size", "")] = [
					form[key] + "rem",
					{
						lineHeight:
							form[key.replace("-size", "-line-height")] + "rem",
					},
				];
			}
		}

		store.updateFonts(fontSizes);
	};

	const fonts = store.config?.fontSize;

	console.log(fonts);

	return (
		<>
			<EditorLayout
				editor={
					<form onSubmit={handleSubmit(onSubmit)}>
						<table className="table">
							<thead>
								<tr>
									<th>name</th>
									<th>font size (rem)</th>
									<th>line height (rem)</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(fonts as object).map(
									([key, value]) => (
										<tr key={key}>
											<th>{key}</th>
											<td>
												<input
													defaultValue={value[0].replace(
														"rem",
														""
													)}
													{...register(`${key}-size`)}
													type="number"
													placeholder="size"
													className="input input-bordered w-full max-w-xs"
												/>
											</td>
											<td>
												<input
													defaultValue={value[1].lineHeight.replace(
														"rem",
														""
													)}
													{...register(
														`${key}-line-height`
													)}
													type="number"
													placeholder="line height"
													className="input input-bordered w-full max-w-xs"
												/>
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>

						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</form>
				}
				preview={
					<div className="flex flex-col gap-8">
						{Object.entries(fonts as object).map(([key, value]) => {
							return (
								<div key={key}>
									<span className="text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
										{key}
									</span>
									<p
										className={`tce-text-${key} text-slate-900 dark:text-slate-200`}
									>
										The quick brown fox jumps over the lazy
										dog.
									</p>
								</div>
							);
						})}
					</div>
				}
			/>
		</>
	);
};
