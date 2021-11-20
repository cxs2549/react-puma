import styled from 'styled-components'

const StyledMenu = styled.div.attrs({ className: 'pb-4 pb-16' })`
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    background: ${props => props.bg || '#131313'};
    color: white;
    z-index: 1;
    overflow-y: scroll;
`

const Menu = ({ children, bg }) => {
	return (
		<StyledMenu bg={bg}>
			{children}
		</StyledMenu>
	)
}
export default Menu
