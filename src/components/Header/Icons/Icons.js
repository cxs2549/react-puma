import Burger from './Burger/Burger'
import Cart from './Cart/Cart'
import Search from './Search/Search'

const Icons = () => {
	return (
		<div className="flex items-center gap-4 pr-3">
			<Search />
			<Cart />
			<Burger  />
		</div>
	)
}

export default Icons
