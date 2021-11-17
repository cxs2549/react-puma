import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import { CSSTransition } from 'react-transition-group'
import Item from './Item'
import useOnClickOutside from 'use-onclickoutside'

const links = [
	{
		title: 'new arrivals',
		sublinks: [
			'launch calendar',
			`women's new arrivals`,
			`men's new arrivals`,
			`kids' new arrivals`,
			'shop all new arrivals'
		]
	},
	{
		title: 'men',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'women',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'kids',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'collabs',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'sport',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'outlet',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	},
	{
		title: 'gift guide',
		sublinks: [
			{
				title: 'shoes',
				sublinks: [
					'suede',
					'classics',
					'RS collection',
					'PUMA rider pack',
					'xetic',
					'lifestyle',
					'training + gym',
					'running',
					'motorsport',
					'basketball',
					'soccer',
					'slides + sandals'
				]
			},
			{
				title: 'clothing',
				sublinks: [
					'classics',
					't-Shirts + tops',
					'polos',
					'shorts',
					'hoodies + sweatshirts',
					'tracksuits',
					'pants',
					'jackets + outerwear',
					'team jerseys',
					'big & tall'
				]
			},
			{
				title: 'accessories',
				sublinks: [
					'hats + beanies',
					'socks + underwear',
					'bags + backpacks',
					'watches',
					'sunglasses',
					'sports equipment',
					'face masks + gaiters'
				]
			},
			{
				title: 'sports',
				sublinks: [
					'basketball',
					'soccer',
					'training + gym',
					'running',
					'motorsport',
					'swimming',
					'golf',
					'tennis',
					'running shoe finder'
				]
			},
			{ title: 'new arrivals' },
			{ title: 'best sellers' },
			{ title: 'classics' },
			{ title: 'merry + bright' },
			{ title: 'winter ready wear' },
			{ title: 'laid-back layers' },
			{ title: 'slippers' },
			{ title: 'gender-neutral' },
			{ title: 'gift cards' },
			{ title: 'sale' }
		]
	}
]

const StyledBurger = styled.div.attrs({ className: '' })`
    .menu-enter {
        left: 100%;
    }
    .menu-enter-active {
        transition: all 300ms ease-in;
        left: 0;
    }
    .menu-exit {
        left: 0;
    }
    .menu-exit-active {
        transition: all 300ms ease-in;
        left: 100%;
    }

	
`
const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	const ref = useRef()
	const handleClose = () => {
		setOpen(false)
		document.getElementById('header').classList.remove('bg-black')
		document.getElementById('header').classList.remove('text-white')
		document.getElementById('logo').classList.remove('invert')
	}
	const handleOpen = () => {
		setOpen(!isOpen)
		document.getElementById('header').classList.toggle('bg-black')
		document.getElementById('header').classList.toggle('text-white')
		document.getElementById('logo').classList.toggle('invert')
	}
	useOnClickOutside(ref, handleClose)
	return (
		<StyledBurger ref={ref}>
			<Hamburger toggled={isOpen} toggle={handleOpen} size={29} />
			<CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
				<Menu>
					<ul className="flex flex-col gap-2 capitalize">
						{links.map((link) => <Item text={link.title} links={link.sublinks} />)}
					</ul>
				</Menu>
			</CSSTransition>
		</StyledBurger>
	)
}
export default Burger
