import { AiOutlineShoppingCart } from 'react-icons/ai'
import Burger from './Burger/Burger'
import Search from './Search/Search'

const Icons = () => {
	return (
		<div className="flex items-center gap-4 pr-3">
			<Search />
			<div className="px-3">
				<AiOutlineShoppingCart size={30} />
			</div>
			<Burger  />
		</div>
	)
}

export default Icons
