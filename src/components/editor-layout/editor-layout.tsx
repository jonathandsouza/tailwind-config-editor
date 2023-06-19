export const EditorLayout = ({
	editor,
	preview,
}: {
	editor: React.ReactNode;
	preview: React.ReactNode;
}) => {
	return (
		<div className="flex w-full">
			<div className="grid grow-0 shrink-0 basis-1/2 bg-base-300 p-8">
				<div className="overflow-x-auto">{editor}</div>
			</div>
			<div className="divider divider-horizontal "></div>
			<div className="grid grow shrink-0 bg-base-300 ">
				<div className="relative rounded-xl overflow-auto p-8">
					<div className="flex flex-col gap-8">{preview}</div>
				</div>
			</div>
		</div>
	);
};
