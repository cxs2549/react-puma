import styled from 'styled-components'
import GoldBand from './GoldBand/GoldBand'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header.attrs({ className: ' border-b transition-all duration-300' })`

	
`
const Container = ({ children }) => {
	return <div className="max-w-7xl mx-auto flex items-center justify-between">{children}</div>
}
const Logo = () => {
	return (
		<div className="flex items-center py-3 pl-4">
			<Link to="/">
				<img id="logo" src={logo} alt="logo" className="w-12 transition-all duration-300" />
			</Link>
		</div>
	)
}

const Header = () => {
	return (
		<StyledHeader id="header">
			<Container>
				<GoldBand />
			</Container>
			<Container>
				<Logo />
				<Icons />
			</Container>
		</StyledHeader>
	)
}
export default Header
