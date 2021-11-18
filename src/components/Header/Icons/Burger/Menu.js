import styled from 'styled-components'

const StyledMenu = styled.div.attrs({ className: 'py-8' })`
    position: fixed;
    top: 99px;
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
