const Explore = () => {
	return (
		<div className="p-4 pb-8 uppercase flex flex-col gap-4">
			<h2 className="text-center text-xl font-semibold">explore holiday deals</h2>
			<div className="flex flex-wrap items-center justify-center gap-4 text-sm ">
				<button className="border font-semibold uppercase whitespace-nowrap px-8 py-3 rounded border-gray-800">
					shoes under $50
				</button>
				<button className="border font-semibold uppercase whitespace-nowrap px-8 py-3 rounded border-gray-800">
					fleece under $50
				</button>
				<button className="border font-semibold uppercase whitespace-nowrap px-8 py-3 rounded border-gray-800">
					accessories under $30
				</button>
			</div>
		</div>
	)
}

export default Explore
