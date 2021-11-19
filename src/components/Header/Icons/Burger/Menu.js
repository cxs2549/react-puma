import styled from 'styled-components'

const StyledMenu = styled.div.attrs({ className: 'py-4' })`
    position: fixed;
    top: 106px;
    left: 0;
    width: 100%;
    height: calc(100% - 79px);
    background: ${props => props.bg || 'black'};
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
