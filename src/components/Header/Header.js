import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Icons from './Icons/Icons'

const StyledHeader = styled.header.attrs({ className: 'h-20 border-b transition-all duration-300' })`
`
const Container = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
            {children}
        </div>
    )
}
const Logo = () => {
	return (
		<div className="flex items-center">
			<img id="logo" src={logo} alt="logo" className="w-12 transition-all duration-300" />
		</div>
	)
}

const Header = () => {
	return (
		<StyledHeader id="header">
			<Container>
				<Logo />
                <Icons />
			</Container>
		</StyledHeader>
	)
}
export default Header
