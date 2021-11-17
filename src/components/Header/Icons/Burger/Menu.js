import styled from 'styled-components'

const StyledMenu = styled.div.attrs({ className: 'py-8 px-16' })`
    position: fixed;
    top: 79px;
    left: 0;
    width: 100%;
    height: calc(100% - 79px);
    background: black;
    color: white;
    z-index: 1;
    overflow-y: scroll;
`

const Menu = ({ children }) => {
	return (
		<StyledMenu>
			{children}
		</StyledMenu>
	)
}
export default Menu
