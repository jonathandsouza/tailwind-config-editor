"use client";
export const FontEditor = () => {
	return (
		<>
			<div className="flex w-full">
				<div className="grid flex-grow basis-1/2 bg-base-300 p-8">
					content
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
