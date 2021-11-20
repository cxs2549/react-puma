import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Menu from './Menu'

const Item2 = ({ text, links }) => {
	const [ isOpen, setIsOpen ] = useState(false)
	return (
		<div>
			<li
				onClick={() => links && setIsOpen(true)}
				className="flex items-center justify-between  py-3 cursor-pointer  hover:bg-white hover:text-black transition-colors duration-300 rounded px-3 text-lg"
			>
				<p>{text}</p>
				{links && (
					<div>
						<i class="fa fa-chevron-right" aria-hidden="true" />
					</div>
				)}
			</li>
			<CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
				<Menu>
					<div className="bg-gray-700 px-12 py-3 flex relative items-center">
						<button
							className="opacity-75 hover:opacity-100 text-base font-medium py-2 w-full"
							onClick={() => setIsOpen(false)}
						>
							<div className="flex items-center gap-2">
								<div className="text-sm">
									<i class="fa fa-chevron-left" aria-hidden="true" />
								</div>
							</div>
						</button>
						<div className="absolute left-1/2 transform -translate-x-1/2 ">
							<h5 className="whitespace-nowrap capitalize font-semibold text-center">
								{text}
							</h5>
						</div>
					</div>
					<ul className="max-w-2xl mx-auto mt-8 flex flex-col px-12 pb-4">
						{links &&
							links.map((link) => (
								<Item2 text={link.title || link} links={link.sublinks} />
							))}
					</ul>
				</Menu>
			</CSSTransition>
		</div>
	)
}
export default Item2
