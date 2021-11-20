import styled from 'styled-components'
import GoldBand from './GoldBand/GoldBand'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'
import Links from './Links/Links'

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

const StyledHeader = styled.header.attrs({ className: 'transition-all duration-300' })`
height: 106px;
	
`
const Container = ({ children }) => {
	return (
		<div
			id="main"
			className="  flex items-center gap-8 justify-between bg-white border-b transition-all duration-800 delay-400 h-16"
		>
			{children}
		</div>
	)
}
const Logo = () => {
	return (
		<div className="flex items-center py-3 pl-4 xl:pl-6">
			<Link to="/">
				<img
					id="logo"
					src={logo}
					alt="logo"
					className="w-12 transition-all duration-700 delay-100"
				/>
			</Link>
		</div>
	)
}

const Header = () => {
	return (
		<StyledHeader>
			<GoldBand />
			<Headroom className="border-b bg-white">
				<div className="bg-white">
					<Container>
						<div className="flex gap-8 items-center w-full">
							<Logo />
							<Links links={links} />
						</div>
						<Icons links={links} />
					</Container>
				</div>
			</Headroom>
		</StyledHeader>
	)
}
export default Header
