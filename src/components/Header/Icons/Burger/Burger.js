import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import { CSSTransition } from 'react-transition-group'
import Item from './Item'
import useOnClickOutside from 'use-onclickoutside'


const StyledBurger = styled.div.attrs({ className: '' })`
    .menu-enter {
        left: 100%;
    }
    .menu-enter-active {
        transition: all 300ms cubic-bezier(0.85, 0, 0.15, 1);;
        left: 0;
    }
    .menu-exit {
        left: 0;
		opacity: 1;
    }
    .menu-exit-active {
        transition: all 300ms cubic-bezier(0.85, 0, 0.15, 1);;
        left: 100%;
		opacity: 0;
    }

	
`
const Burger = ({links}) => {
	const [ isOpen, setOpen ] = useState(false)
	const ref = useRef()
	const handleClose = () => {
		setOpen(false)
		document.body.classList.remove('stop-flow')
		document.getElementById('main').classList.remove('bg-brandBlack')
		document.getElementById('main').classList.add('bg-white')
		document.getElementById('main').classList.remove('text-white')
		document.getElementById('logo').classList.remove('invert')
	}
	const handleOpen = () => {
		setOpen(!isOpen)
		document.body.classList.toggle('stop-flow')
		document.getElementById('logo').classList.toggle('invert')
		document.getElementById('main').classList.toggle('bg-white')
		document.getElementById('main').classList.toggle('bg-brandBlack')
		document.getElementById('main').classList.toggle('text-white')
	}
	useOnClickOutside(ref, handleClose)
	return (
		<StyledBurger ref={ref} className="xl:hidden">
			<Hamburger toggled={isOpen} toggle={handleOpen} size={29} />
			<CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
				<Menu>
					<ul className="max-w-2xl mx-auto flex flex-col gap-1 mt-12 capitalize px-12">
						{links.map((link) => <Item text={link.title} links={link.sublinks} />)}
					</ul>
				</Menu>
			</CSSTransition>
		</StyledBurger>
	)
}
export default Burger
