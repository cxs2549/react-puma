import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Item2 from './Item2'
import Menu from './Menu'

const Item = ({ text, links }) => {
	const [ isOpen, setIsOpen ] = useState(false)
	return (
		<div>
			<li
				onClick={() => setIsOpen(true)}
				className="text-2xl flex items-center justify-between  py-3 cursor-pointer opacity-75 hover:opacity-100 px-3 rounded hover:bg-white hover:text-black transition-colors duration-300"
			>
				<p className="">{text}</p>
				<div className="text-base">
					<i class="fa fa-chevron-right" aria-hidden="true" />
				</div>
			</li>
			<CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
				<Menu>
					<button className="opacity-75 hover:opacity-100 text-base font-medium py-2 w-full px-12 mb-2" onClick={() => setIsOpen(false)}>
						<div className="flex items-center gap-2">
							<div className="text-sm">
								<i class="fa fa-chevron-left" aria-hidden="true" />
							</div>
							<p>Back</p>
						</div>
					</button>

					<ul className=" flex flex-col gap-3 px-12">
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
export default Item
