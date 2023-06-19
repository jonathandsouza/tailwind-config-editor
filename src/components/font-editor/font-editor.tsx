"use client";

import { useTailwindConfigurationStore } from "@/services/tailwind-configuration";
import { useForm } from "react-hook-form";

export const FontEditor = () => {
	const store = useTailwindConfigurationStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log({
			...store.fontSize,
			sm: [
				data["text-sm-size"],
				{ lineHeight: data["text-sm-line-height"] },
			],
		});
		store.setFontSize({
			...store.fontSize,
			sm: [
				data["text-sm-size"],
				{ lineHeight: data["text-sm-line-height"] },
			],
		});
	};

	const fontTextSm = store.fontSize["sm"];

	return (
		<>
			<div className="flex w-full">
				<div className="grid flex-grow basis-1/2 bg-base-300 p-8">
					<div className="overflow-x-auto">
						<form onSubmit={handleSubmit(onSubmit)}>
							<table className="table">
								<thead>
									<tr>
										<th>name</th>
										<th>font size</th>
										<th>line height</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>text-sm</th>
										<td>
											<input
												defaultValue={fontTextSm[0]}
												{...register("text-sm-size")}
												type="text"
												placeholder="size"
												className="input input-bordered w-full max-w-xs"
											/>
										</td>
										<td>
											<input
												defaultValue={
													fontTextSm[1].lineHeight
												}
												{...register(
													"text-sm-line-height"
												)}
												type="text"
												placeholder="line height"
												className="input input-bordered w-full max-w-xs"
											/>
										</td>
									</tr>
								</tbody>
							</table>

							<button type="submit" className="btn btn-primary">
								Save
							</button>
						</form>
					</div>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="grid flex-grow bg-base-300">
					<div className="relative rounded-xl overflow-auto p-8">
						<div className="flex flex-col gap-8">
							<div>
								<span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
									text-sm
								</span>
								<p className="text-sm font-medium text-slate-900 dark:text-slate-200">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
									text-base
								</span>
								<p className="text-base font-medium text-slate-900 dark:text-slate-200">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
									text-lg
								</span>
								<p className="text-lg font-medium text-slate-900 dark:text-slate-200">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
									text-xl
								</span>
								<p className="text-xl font-medium text-slate-900 dark:text-slate-200">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
									text-2xl
								</span>
								<p className="text-2xl font-medium text-slate-900 dark:text-slate-200">
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
