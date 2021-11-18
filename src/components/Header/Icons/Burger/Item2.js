import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Menu from './Menu'

const Item2 = ({ text, links }) => {
	const [ isOpen, setIsOpen ] = useState(false)
	return (
		<div>
			<li
				onClick={() => links && setIsOpen(true)}
				className="flex items-center justify-between  py-3 cursor-pointer opacity-75 hover:opacity-100 hover:bg-white hover:text-black transition-colors duration-300 rounded px-3 text-lg"
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
					<button className="opacity-75 hover:opacity-100 text-base font-medium py-2 px-12 mb-2" onClick={() => setIsOpen(false)}>
						<div className="flex items-center gap-2">
							<i class="fa fa-chevron-left" aria-hidden="true" />
							<p>Back</p>
						</div>
					</button>
					<ul className="mt-2 flex flex-col px-12">
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
