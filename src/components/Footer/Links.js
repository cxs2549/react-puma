import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Accord = ({ title, links }) => {
	const [ open, setOpen ] = useState(false)
	return (
		<div className="w-full capitalize border-b md:border-b-0 border-brandBorder">
			<div
				className="flex justify-between w-full  py-2 cursor-pointer"
				onClick={() => setOpen(!open)}
			>
				<p className="font-semibold">{title}</p>
				<div className="pr-1 text-sm md:hidden">
					<i className="fa fa-plus" aria-hidden="true" />
				</div>
			</div>
			<CSSTransition in={open} timeout={500} classNames="drop" unmountOnExit>
				<div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-3 pb-6 md:hidden">
					{links.map((link) => <p className="text-sm opacity-60">{link}</p>)}
				</div>
			</CSSTransition>
			<div className="hidden md:block">
				<div className="flex flex-col xl:grid xl:grid-cols-2 gap-x-8 gap-y-4 mt-3 pb-6">
					{links.map((link) => <p className="text-sm opacity-60 whitespace-nowrap">{link}</p>)}
				</div>
			</div>
		</div>
	)
}

const Links = ({ supportLinks, aboutLinks }) => {
	return (
		<div className="flex flex-col md:flex-row xl:gap-8 w-full">
			<Accord title="support" links={supportLinks} />
			<Accord title="about PUMA" links={aboutLinks} />
		</div>
	)
}

export default Links
