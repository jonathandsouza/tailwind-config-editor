export const TailwindConfigEditor = () => {
	return (
		<>
			<div className="collapse bg-base-200">
				<input type="radio" name="my-accordion-1" checked={true} />
				<div className="collapse-title text-xl font-medium">
					Click to open this one and close others
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div className="collapse bg-base-200">
				<input type="radio" name="my-accordion-1" />
				<div className="collapse-title text-xl font-medium">
					Click to open this one and close others
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div className="collapse bg-base-200">
				<input type="radio" name="my-accordion-1" />
				<div className="collapse-title text-xl font-medium">
					Click to open this one and close others
				</div>
				<div className="collapse-content">
					<p>hello</p>
				</div>
			</div>
		</>
	);
};
