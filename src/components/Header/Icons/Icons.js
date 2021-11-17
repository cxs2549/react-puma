import { BiSearch } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Burger from './Burger/Burger'

const Icons = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="px-1">
				<BiSearch size={30} />
			</div>
			<div className="px-3">
				<AiOutlineShoppingCart size={30} />
			</div>
			<Burger  />
		</div>
	)
}

export default Icons
