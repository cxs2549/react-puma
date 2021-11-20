import { AiOutlineArrowRight } from 'react-icons/ai'

const Email = () => {
	return (
		<form className="flex flex-col gap-1 w-full">
			<label htmlFor="email" className="font-semibold">
				Email Sign Up
			</label>
			<div className="relative max-w-sm">
				<input
					type="email"
					placeholder="Email address"
					className="w-full py-4 px-3 rounded bg-brandInput placeholder-gray-700 "
				/>
				<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
					<AiOutlineArrowRight size={28} />
				</div>
			</div>
		</form>
	)
}

export default Email
